"use client"

import type React from "react"
import PageLayout from "../components/PageLayout"
import Link from "next/link"
import { getAllProjects } from "./data"
import { 
  FaCode,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaLaptopCode,
  FaMobile
} from "react-icons/fa"

// アイコンマッピング
const iconMap = {
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCode,
  FaLaptopCode,
  FaMobile
}

// カラーマッピング
const colorMap = {
  yellow: "text-yellow-600",
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
  teal: "text-teal-600"
}

const colorTagMap = {
  yellow: "bg-yellow-100 text-yellow-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-800",
  teal: "bg-teal-100 text-teal-800"
}

const WorksPage: React.FC = () => {
  const projects = getAllProjects()

  return (
    <PageLayout>
      <div className="text-center space-y-8 max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent">
            My Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでに取り組んできたプロジェクトと成果物をご紹介します
          </p>
        </div>

        {/* メインプロジェクト */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap]
            const iconColor = colorMap[project.color as keyof typeof colorMap]
            const tagColorClass = colorTagMap[project.color as keyof typeof colorTagMap]

            return (
              <Link key={project.slug} href={`/works/${project.slug}`}>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className={`text-3xl ${iconColor} mr-3`} />}
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-left space-y-3">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${tagColorClass}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* 技術スタック */}
        {/* <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <FaCloud className="text-3xl text-indigo-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              使用技術スタック
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-pink-600">Frontend</h4>
              <div className="space-y-2">
                <div className="bg-pink-50 text-pink-800 py-2 px-4 rounded-lg font-medium">Next.js</div>
                <div className="bg-pink-50 text-pink-800 py-2 px-4 rounded-lg font-medium">TypeScript</div>
                <div className="bg-pink-50 text-pink-800 py-2 px-4 rounded-lg font-medium">Tailwind CSS</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600">Backend</h4>
              <div className="space-y-2">
                <div className="bg-blue-50 text-blue-800 py-2 px-4 rounded-lg font-medium">Python</div>
                <div className="bg-blue-50 text-blue-800 py-2 px-4 rounded-lg font-medium">FastAPI</div>
                <div className="bg-blue-50 text-blue-800 py-2 px-4 rounded-lg font-medium">Rust</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-600">Database</h4>
              <div className="space-y-2">
                <div className="bg-green-50 text-green-800 py-2 px-4 rounded-lg font-medium">BigQuery</div>
                <div className="bg-green-50 text-green-800 py-2 px-4 rounded-lg font-medium">Firestore</div>
                <div className="bg-green-50 text-green-800 py-2 px-4 rounded-lg font-medium">PostgreSQL</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-600">Tools</h4>
              <div className="space-y-2">
                <div className="bg-purple-50 text-purple-800 py-2 px-4 rounded-lg font-medium">GraphQL</div>
                <div className="bg-purple-50 text-purple-800 py-2 px-4 rounded-lg font-medium">ETL</div>
                <div className="bg-purple-50 text-purple-800 py-2 px-4 rounded-lg font-medium">Slack API</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/about">
            <button className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-50 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              About Me
            </button>
          </Link>
          <Link href="/">
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default WorksPage 