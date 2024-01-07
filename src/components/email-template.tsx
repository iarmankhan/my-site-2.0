import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
    email: string;
    message: string;
}

export function EmailTemplate({ email, fullName, message }: EmailTemplateProps) {
    return (
        <div>
            <h1>Hey Arman, Someone submitted the form!!</h1>
            <p>
                <strong>Name: </strong>
                {fullName}
            </p>
            <p>
                <strong>Email: </strong>
                {email}
            </p>
            <p>
                <strong>Message: </strong>
                {message}
            </p>
        </div>
    )
}