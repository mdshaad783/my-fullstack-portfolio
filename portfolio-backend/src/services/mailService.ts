import transporter from '../config/nodemailer';
import env from '../config/env';

const sendMail = async (email: string, subject: string, message: string) => {
    const mailOptions = {
        from: env.SMTP_USER,
        to: email,
        subject,
        text: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw new Error('Error sending email');
    }
};

export default sendMail;

// This snippet defines a sendMail function that takes an email address, subject, and message as arguments. It creates a mailOptions object with the sender email, recipient email, subject, and message. The function then uses the nodemailer transporter object to send the email and logs a success message or error message to the console. Finally, the sendMail function is exported for use in other parts of the application.
