const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const NodeCache = require('node-cache');

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const otpCache = new NodeCache({ stdTTL: 300 }); // 5 minutes expiry

app.use(cors());
app.use(express.json());

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per window
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/', limiter);

// Endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and Name are required' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpCache.set(email, { otp, name, timestamp: Date.now() });

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
      to: [email],
      subject: 'Your Verification Code - Sri Charan Portfolio',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Verification Code</h2>
          <p>Hi ${name},</p>
          <p>Your verification code for the contact form is:</p>
          <div style="background: #f4f4f4; padding: 15px; font-size: 24px; font-weight: bold; text-align: center; border-radius: 5px; color: #000;">
            ${otp}
          </div>
          <p>This code will expire in 5 minutes.</p>
          <hr />
          <p style="font-size: 12px; color: #777;">If you didn't request this, please ignore this email.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to verify OTP and send the final contact message
app.post('/api/verify-otp', async (req, res) => {
  const { email, otp, message } = req.body;

  if (!email || !otp || !message) {
    return res.status(400).json({ error: 'Email, OTP, and Message are required' });
  }

  const cachedData = otpCache.get(email);

  if (!cachedData || cachedData.otp !== otp) {
    return res.status(400).json({ error: 'Invalid or expired OTP' });
  }

  // OTP is valid, now send the actual contact details to the owner
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
      to: [process.env.OWNER_EMAIL],
      subject: `New Portfolio Message from ${cachedData.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>New Message Received</h2>
          <p><strong>From:</strong> ${cachedData.name} (${email})</p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; border-left: 5px solid #BC13FE;">
            <p>${message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 20px;">Sent from your Portfolio Website.</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Clear OTP after successful use
    otpCache.del(email);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
