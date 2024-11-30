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
    <section className="relative py-8">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl py-24">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-200">
            Have a project in mind? Want to collaborate? Or just want to say hi?
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-base font-medium text-blue-200"
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
                    className={`block w-full px-4 py-3 text-white placeholder-blue-400/60 
                                                bg-white/5 border border-white/10 rounded-lg focus:ring-2 
                                                focus:ring-blue-500/50 focus:border-blue-500/50 
                                                transition-colors duration-200 
                                                ${
                                                  errors.fullName
                                                    ? "border-red-500/50"
                                                    : ""
                                                }`}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-blue-200"
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
                    className={`block w-full px-4 py-3 text-white placeholder-blue-400/60 
                                                bg-white/5 border border-white/10 rounded-lg focus:ring-2 
                                                focus:ring-blue-500/50 focus:border-blue-500/50 
                                                transition-colors duration-200 
                                                ${
                                                  errors.email
                                                    ? "border-red-500/50"
                                                    : ""
                                                }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-base font-medium text-blue-200"
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
                    className={`block w-full px-4 py-3 text-white placeholder-blue-400/60 
                                                bg-white/5 border border-white/10 rounded-lg focus:ring-2 
                                                focus:ring-blue-500/50 focus:border-blue-500/50 
                                                transition-colors duration-200 
                                                ${
                                                  errors.message
                                                    ? "border-red-500/50"
                                                    : ""
                                                }`}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-blue-200">
                    Quick Suggestions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setMessage(suggestion)}
                        className="px-3 py-1 text-sm font-medium rounded-full 
                                                         bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                                         border border-blue-500/20 text-blue-300
                                                         hover:from-blue-500/20 hover:to-purple-500/20 
                                                         transition-colors duration-300"
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
                  className={`inline-flex w-full items-center justify-center px-6 py-4 text-base font-medium text-white transition-all duration-200 
                                            bg-gradient-to-r from-blue-600 to-blue-700 border border-transparent rounded-lg 
                                            hover:from-blue-700 hover:to-blue-800 
                                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                                            disabled:opacity-70 disabled:cursor-not-allowed
                                            group relative overflow-hidden`}
                >
                  {/* Button background glow effect */}
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
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
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">
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
