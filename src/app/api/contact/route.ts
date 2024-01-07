import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json()

        if (!body) {
            return Response.json({
                error: "Body is not available"
            })
        }

        if (!body?.fullName || !body?.email || !body?.message) {
            return Response.json({
                error: "Required fields are missing"
            })
        } 

        const data = await resend.emails.send({
            from: 'Arman Khan <contact@armankhan.dev>',
            to: ['work.armankhan@gmail.com'],
            subject: 'New form submission!',
            react: EmailTemplate({
                email: body.email,
                fullName: body.fullName,
                message: body.message
            }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
