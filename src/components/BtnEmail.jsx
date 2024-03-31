const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ваш_адрес@gmail.com',
            pass: 'ваш_пароль'
        }
    });

    const mailOptions = {
        from: 'ваш_адрес@gmail.com',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false, error: error.message });
        } else {
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
