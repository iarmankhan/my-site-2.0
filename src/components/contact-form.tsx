"use client"

import { ChangeEvent, FormEvent, useState } from "react"

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
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
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
      errors.fullName = "Full Name is required"
    }
    if (!email) {
      errors.email = "Email is required"
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      errors.email = "Invalid email format"
    }
    if (!message) {
      errors.message = "Message is required"
    } else if (message.length < 20) {
      errors.message = "Message should have at least 20 characters"
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          email,
          fullName,
          message,
        }),
        method: "POST",
      })

      const data = await response.json()

      if (!data?.data?.id) {
        throw new Error("Some errors occurred!")
      }

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 5000)

      setEmail("")
      setFullName("")
      setMessage("")
    } catch (e) {
      setError(true)
    }

    setSubmitting(false)
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // Reset error for the field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }))

    switch (name) {
      case "fullName":
        setFullName(value)
        break
      case "email":
        setEmail(value)
        break
      case "message":
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
    <section className="relative py-10 sm:py-16 lg:py-24 bg-white border-b-4 border-black">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Have a project in mind? Want to collaborate? Or just want to say hi?
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative bg-white card-brutalist p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-base font-bold text-black"
                >
                  Full Name
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your name"
                    value={fullName}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-3 text-black placeholder-gray-400 
                                                bg-white brutalist-border focus:border-black focus:outline-none
                                                transition-colors duration-200
                                                ${
                                                  errors.fullName
                                                    ? "border-red-500"
                                                    : ""
                                                }`}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-bold text-black"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-3 text-black placeholder-gray-400 
                                                bg-white brutalist-border focus:border-black focus:outline-none
                                                transition-colors duration-200
                                                ${
                                                  errors.email
                                                    ? "border-red-500"
                                                    : ""
                                                }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-base font-bold text-black"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={message}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-3 text-black placeholder-gray-400 
                                                bg-white brutalist-border focus:border-black focus:outline-none
                                                transition-colors duration-200
                                                ${
                                                  errors.message
                                                    ? "border-red-500"
                                                    : ""
                                                }`}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-black">
                    Quick Suggestions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setMessage(suggestion)}
                        className="px-3 py-1 text-sm font-medium badge-brutalist text-black
                                                         hover:bg-black hover:text-white transition-colors duration-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`inline-flex w-full items-center justify-center px-6 py-4 text-base font-bold text-white transition-all duration-200 
                                            bg-black btn-brutalist-primary 
                                            hover:bg-white hover:text-black 
                                            focus:outline-none
                                            disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {submitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>

            {success && (
              <div className="mt-4 p-4 bg-white brutalist-border">
                <p className="text-black text-sm">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-white brutalist-border border-red-500">
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
