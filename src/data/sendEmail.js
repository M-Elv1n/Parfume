const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Создаем транспорт для отправки писем через SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com', // Ваш адрес электронной почты Gmail
        pass: 'your_password' // Ваш пароль от почты Gmail
    }
});

// Маршрут для отправки письма
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: 'your_email@gmail.com', // Отправитель
        to: to, // Получатель
        subject: subject, // Тема письма
        text: text // Текст письма
    };

    // Отправляем письмо
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Error occurred:', error.message);
            res.status(500).json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent successfully:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
