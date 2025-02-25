import e, { Request, Response } from 'express';
import sendMail from '../services/mailService';
import path from 'path';
import ejs from 'ejs';

const contactFormController = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    const userTemplatePath = path.join(__dirname, '../emails/templates/userTemplate.ejs');
    const adminTemplatePath = path.join(__dirname, '../emails/templates/adminTemplate.ejs');
    const userTemplate = await ejs.renderFile(userTemplatePath, {
        name,
    });

    const adminTemplate = await ejs.renderFile(adminTemplatePath, {
        name,
        email,
        message,
    });

    try {
        const userMailInfo = await sendMail(
            email,
            `Thank You ${name} for Reaching Out!`,
            userTemplate
        );
        const adminMailInfo = await sendMail(
            'fiamanillahb2@gmail.com',
            'Portfolio Contact Form Submission',
            adminTemplate
        );

        res.status(200).json({ userMailInfo, adminMailInfo });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email' });
    }
};

export default contactFormController;
