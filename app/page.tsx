"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import PageLayout from "./components/PageLayout"

export default function Home() {
  return (
    <PageLayout>
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Welcome Text */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
              Welcome
            </span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
          </div>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl text-gray-700 font-light">I&apos;m</p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 relative">
            <span className="relative z-10">Kota Ishikuro</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-cyan-400/20 to-yellow-400/20 blur-lg -z-10 scale-110"></div>
          </h2>
        </div>

        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* About Me Button */}
          <Link href="/about">
            <Button
              size="lg"
              className="
                bg-white 
                text-gray-900 
                border-2 
                border-gray-400 
                hover:border-gray-600
                hover:bg-gray-50
                px-8 
                py-4 
                text-lg 
                font-medium 
                rounded-full
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                relative
                overflow-hidden
                group
              "
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-cyan-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>

          {/* GitHub Button */}
          <Link href="https://github.com/Kota-35" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="
                bg-gray-900 
                text-white 
                border-2 
                border-gray-900 
                hover:border-gray-700
                hover:bg-gray-800
                px-8 
                py-4 
                text-lg 
                font-medium 
                rounded-full
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                relative
                overflow-hidden
                group
                flex
                items-center
                gap-3
              "
            >
              <Image 
                src="/github.svg" 
                alt="GitHub" 
                width={20} 
                height={20}
                className="relative z-10 filter invert"
              />
              <span className="relative z-10">GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-cyan-400/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}