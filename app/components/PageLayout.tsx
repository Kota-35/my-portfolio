"use client"

import type React from "react"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden ${className}`}>
      {/* メインコンテンツ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
      </div>

      {/* デコレーティブ要素 */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-xl"></div>
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-18 h-18 rounded-full bg-gradient-to-br from-pink-500/15 to-cyan-400/15 blur-xl"></div>
    </div>
  )
} 