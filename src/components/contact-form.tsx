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
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
            <span className="font-bold text-black uppercase text-sm tracking-wide">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            LET&apos;S CONNECT
          </h1>
          <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
            Have a project in mind? Want to collaborate? Or just want to say hi?
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative bg-white card-brutalist p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-black uppercase tracking-wide mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Your name"
                  value={fullName}
                  onChange={handleInputChange}
                  className={`block w-full px-4 py-4 text-black placeholder-gray-400 
                                            bg-white brutalist-border focus:bg-yellow-400/20 focus:outline-none
                                            transition-colors duration-200
                                            ${
                                              errors.fullName
                                                ? "border-red-500"
                                                : ""
                                            }`}
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm font-bold text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-black uppercase tracking-wide mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={handleInputChange}
                  className={`block w-full px-4 py-4 text-black placeholder-gray-400 
                                            bg-white brutalist-border focus:bg-yellow-400/20 focus:outline-none
                                            transition-colors duration-200
                                            ${
                                              errors.email
                                                ? "border-red-500"
                                                : ""
                                            }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm font-bold text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-black uppercase tracking-wide mb-3"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={handleInputChange}
                  className={`block w-full px-4 py-4 text-black placeholder-gray-400 
                                            bg-white brutalist-border focus:bg-yellow-400/20 focus:outline-none
                                            transition-colors duration-200 resize-none
                                            ${
                                              errors.message
                                                ? "border-red-500"
                                                : ""
                                            }`}
                  rows={6}
                />
                {errors.message && (
                  <p className="mt-2 text-sm font-bold text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-black uppercase tracking-wide">
                    Quick Suggestions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setMessage(suggestion)}
                        className="px-3 py-2 text-xs font-bold badge-brutalist text-black
                                                     hover:bg-yellow-400 hover:text-black transition-colors duration-200"
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
                  className={`inline-flex w-full items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 
                                            bg-black btn-brutalist-primary 
                                            hover:bg-yellow-400 hover:text-black 
                                            focus:outline-none
                                            disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {submitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      <span>SENDING...</span>
                    </div>
                  ) : (
                    "SEND MESSAGE →"
                  )}
                </button>
              </div>
            </form>

            {success && (
              <div className="mt-6 p-4 bg-green-400 brutalist-border">
                <p className="text-black font-bold text-sm">
                  ✓ Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-500 brutalist-border">
                <p className="text-white font-bold text-sm">
                  ✗ Something went wrong. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
