import { Request, Response } from 'express';
import sendMail from '../services/mailService';

const contactFormController = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    const mailContent = {
        subject: 'Portfolio Contact Form Submission',
        message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        const info = await sendMail(
            'fiamanillahb2@gmail.com',
            mailContent.subject,
            mailContent.message
        );

        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ message: 'Error sending email' });
    }
};

export default contactFormController;
