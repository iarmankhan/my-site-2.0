"use client"

import { useState, type ComponentProps, type ElementType, type ReactNode } from "react"
import * as runtime from "react/jsx-runtime"

type PreProps = ComponentProps<"pre"> & {
  "data-language"?: string
}

function MdxLink({ children, href, className, ...props }: ComponentProps<"a">) {
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href)

  if (!isExternal) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={["external-link", className].filter(Boolean).join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="external-link-icon"
      >
        <path
          d="M5 4h7v7M12 4 4 12"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </a>
  )
}

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("")
  }

  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: ReactNode }
    return getTextContent(props.children)
  }

  return ""
}

function CopyablePre({ children, ...props }: PreProps) {
  const [copied, setCopied] = useState(false)
  const language = props["data-language"]
  const isCodeBlock = Boolean(language)

  async function copyCode() {
    await navigator.clipboard.writeText(getTextContent(children).trimEnd())
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  if (!isCodeBlock) {
    return <pre {...props}>{children}</pre>
  }

  return (
    <div className="code-block-with-copy">
      <pre {...props}>{children}</pre>
      <button
        type="button"
        className="code-copy-button"
        onClick={copyCode}
        aria-label={copied ? "Code copied" : "Copy code"}
      >
        {copied ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="code-copy-icon"
          >
            <path
              d="M13.5 4.5 6.75 11.25 3.5 8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="code-copy-icon"
          >
            <path
              d="M5.25 5.25V3.75A1.25 1.25 0 0 1 6.5 2.5h5.75a1.25 1.25 0 0 1 1.25 1.25V9.5a1.25 1.25 0 0 1-1.25 1.25h-1.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.35"
            />
            <rect
              width="8.25"
              height="8.25"
              x="2.5"
              y="5.25"
              rx="1.25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, ElementType>
}

export function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code)
  return <Component components={{ a: MdxLink, pre: CopyablePre, ...components }} />
}
