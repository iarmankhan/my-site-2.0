"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, AlertCircle } from "lucide-react"

export default function JSONFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const formatJSON = () => {
    try {
      setError(null)
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON")
      setOutput("")
    }
  }

  const minifyJSON = () => {
    try {
      setError(null)
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON")
      setOutput("")
    }
  }

  const validateJSON = () => {
    try {
      setError(null)
      JSON.parse(input)
      setOutput("Valid JSON ✓")
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON")
      setOutput("")
    }
  }

  const copyToClipboard = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      setError("Failed to copy to clipboard")
    }
  }

  const clearAll = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-black hover:bg-yellow-400 px-4 py-2 brutalist-border mb-12 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-bold text-sm uppercase">Back to Apps</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
              <span className="font-bold text-black uppercase text-sm tracking-wide">
                Tool
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              JSON FORMATTER
            </h1>
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
              Format, validate, and minify JSON data. Paste your JSON below to get started.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="input" className="text-sm font-bold text-black">
                Input
              </label>
              <button
                onClick={clearAll}
                className="text-sm text-black hover:bg-black hover:text-white px-2 py-1 brutalist-border-thin transition-colors"
              >
                Clear
              </button>
            </div>
            <textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-96 p-4 brutalist-border bg-white text-black font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder='Paste your JSON here, e.g., {"name":"John","age":30}'
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="output" className="text-sm font-bold text-black">
                Output
              </label>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 text-sm text-black hover:bg-black hover:text-white px-2 py-1 brutalist-border-thin transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-96 p-4 brutalist-border bg-gray-50 text-black font-mono text-sm resize-none"
              placeholder="Formatted JSON will appear here..."
            />
          </div>
        </div>

        {error && (
          <div className="mb-6 brutalist-border p-4 bg-red-100 flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-black mb-1">Error</p>
              <p className="text-sm text-black">{error}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={formatJSON}
            className="brutalist-border px-8 py-3 bg-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold uppercase text-sm"
          >
            Format JSON
          </button>
          <button
            onClick={minifyJSON}
            className="brutalist-border px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-bold uppercase text-sm"
          >
            Minify JSON
          </button>
          <button
            onClick={validateJSON}
            className="brutalist-border px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 font-bold uppercase text-sm"
          >
            Validate JSON
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

