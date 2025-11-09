"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, AlertCircle } from "lucide-react"

export default function Base64Tool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [copiedInput, setCopiedInput] = useState(false)
  const [copiedOutput, setCopiedOutput] = useState(false)
  const [mode, setMode] = useState<"encode" | "decode">("encode")

  const handleModeChange = (newMode: "encode" | "decode") => {
    if (newMode === mode) return
    setMode(newMode)
    if (output) {
      setInput(output)
      setOutput("")
    }
    setError(null)
  }

  const copyToClipboard = async (text: string, type: "input" | "output") => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      if (type === "input") {
        setCopiedInput(true)
        setTimeout(() => setCopiedInput(false), 2000)
      } else {
        setCopiedOutput(true)
        setTimeout(() => setCopiedOutput(false), 2000)
      }
    } catch (e) {
      setError("Failed to copy to clipboard")
    }
  }

  const clearAll = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  const handleInputChange = (value: string) => {
    setInput(value)
    setError(null)
    if (mode === "encode") {
      try {
        const encoded = btoa(unescape(encodeURIComponent(value)))
        setOutput(encoded)
      } catch {
        setOutput("")
      }
    } else {
      try {
        const decoded = decodeURIComponent(escape(atob(value)))
        setOutput(decoded)
      } catch {
        setOutput("")
      }
    }
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
              BASE64 ENCODER/DECODER
            </h1>
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
            Encode text to Base64 or decode Base64 strings. Changes are applied automatically.
          </p>
        </div>

        <div className="mb-8 flex gap-3">
          <button
            onClick={() => handleModeChange("encode")}
            className={`brutalist-border px-8 py-3 font-bold uppercase text-sm transition-all duration-300 ${
              mode === "encode"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-yellow-400 hover:text-black"
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => handleModeChange("decode")}
            className={`brutalist-border px-8 py-3 font-bold uppercase text-sm transition-all duration-300 ${
              mode === "decode"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-yellow-400 hover:text-black"
            }`}
          >
            Decode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="input" className="text-sm font-bold text-black">
                {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
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
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full h-64 p-4 brutalist-border bg-white text-black font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder={
                mode === "encode"
                  ? "Enter text to encode to Base64..."
                  : "Enter Base64 string to decode..."
              }
            />
            {input && (
              <button
                onClick={() => copyToClipboard(input, "input")}
                className="mt-2 inline-flex items-center gap-2 text-sm text-black hover:bg-black hover:text-white px-3 py-1 brutalist-border-thin transition-colors"
              >
                {copiedInput ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Input
                  </>
                )}
              </button>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="output" className="text-sm font-bold text-black">
                {mode === "encode" ? "Base64 Output" : "Decoded Text"}
              </label>
              {output && (
                <button
                  onClick={() => copyToClipboard(output, "output")}
                  className="inline-flex items-center gap-2 text-sm text-black hover:bg-black hover:text-white px-2 py-1 brutalist-border-thin transition-colors"
                >
                  {copiedOutput ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Output
                    </>
                  )}
                </button>
              )}
            </div>
            <textarea
              id="output"
              value={output}
              readOnly
              className="w-full h-64 p-4 brutalist-border bg-gray-50 text-black font-mono text-sm resize-none"
              placeholder={
                mode === "encode"
                  ? "Base64 encoded text will appear here..."
                  : "Decoded text will appear here..."
              }
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

        <div className="brutalist-border p-4 bg-white">
          <p className="text-sm text-black">
            <strong>How it works:</strong> Enter text in the input field and it will be automatically
            encoded or decoded based on the selected mode. You can switch between encode and decode
            modes at any time.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

