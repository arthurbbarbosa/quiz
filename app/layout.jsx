'use client'
import React from 'react'
import './globals.css'

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          <div className="flex h-screen w-screen items-center justify-center text-center">
            <div className="size-32 animate-spin rounded-full border-[10px] border-blue-400 border-b-white drop-shadow-2xl"></div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </body>
    </html>
  )
}
