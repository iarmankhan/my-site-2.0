'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

type ContactFormFields = {
    fullName: string
    email: string
    message: string
}

type ContactFormErrors = {
    fullName?: string
    email?: string
    message?: string
}

const suggestions = [
    "I have a project idea and I need help with it",
    "I need a website for my business",
    "I want to learn more about your services",
    "I want to collaborate with you",
]

export function ContactForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<ContactFormErrors>({})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setError(false)
        setSubmitting(true)

        // Basic validation
        const errors: ContactFormErrors = {}
        if (!fullName) {
            errors.fullName = 'Full Name is required'
        }
        if (!email) {
            errors.email = 'Email is required'
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
            errors.email = 'Invalid email format'
        }
        if (!message) {
            errors.message = 'Message is required'
        } else if (message.length < 20) {
            errors.message = 'Message should have at least 20 characters'
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            setSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/contact', {
                body: JSON.stringify({
                    email,
                    fullName,
                    message
                }),
                method: 'POST'
            })

            const data = await response.json()

            if (!data?.data?.id) {
                throw new Error("Some errors occurred!")
            }

            setSuccess(true)

            setTimeout(() => {
                setSuccess(false)
            }, 5000)

            setEmail('')
            setFullName('')
            setMessage('')
        } catch (e) {
            setError(true)
        }

        setSubmitting(false)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        // Reset error for the field
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: undefined
        }))

        switch (name) {
            case 'fullName':
                setFullName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'message':
                setMessage(value)
                break
            default:
                break
        }
    }

    const handleSuggestionsClick = (suggestion: string) => {
        setMessage(suggestion)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <div className="sm:grid sm:grid-cols-2 gap-4 flex flex-col">
                    <div>
                        <label htmlFor="fullName" className="block text-gray-700 font-medium">What&apos;s your name?</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={handleInputChange}
                            placeholder="Full name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.fullName && <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">What&apos;s your email?</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium">How can I help you?</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    placeholder='Your project requirements...'
                    rows={5}
                    className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                {
                    suggestions.length > 0 && (
                        <div className="mt-2">
                            <p className="text-gray-600 text-sm mb-2">Suggestions:</p>
                            <ul className="list-inside flex flex-wrap gap-2">
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSuggestionsClick(suggestion)} className="text-sm text-gray-500 cursor-pointer transition-all hover:bg-gray-500 hover:text-white border-2 px-2 py-1 rounded-sm">{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
            <button
                type="submit"
                disabled={submitting}
                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all flex items-center gap-3 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {submitting && (
                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                )} Submit
            </button>
            {success && <p className="text-green-600 mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4">An error occurred. Please try again later.</p>}
        </form>
    )
}
