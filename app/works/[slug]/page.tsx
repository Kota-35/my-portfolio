import type React from "react"
import { notFound } from "next/navigation"
import PageLayout from "../../components/PageLayout"
import DiagramViewer from "../../components/DiagramViewer"
import Link from "next/link"
import { getProjectBySlug, getAllProjects } from "../data"
import { 
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaMobile,
  FaArrowLeft,
  FaCheckCircle,
  FaCog,
  FaTools
} from "react-icons/fa"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

const colorBgMap = {
  yellow: "from-yellow-500 to-orange-500",
  blue: "from-blue-500 to-purple-500",
  green: "from-green-500 to-teal-500",
  purple: "from-purple-500 to-pink-500",
  orange: "from-orange-500 to-red-500",
  teal: "from-teal-500 to-blue-500"
}

const colorTagMap = {
  yellow: "bg-yellow-100 text-yellow-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
  orange: "bg-orange-100 text-orange-800",
  teal: "bg-teal-100 text-teal-800"
}

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = async ({ params }) => {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const IconComponent = iconMap[project.icon as keyof typeof iconMap]
  const iconColor = colorMap[project.color as keyof typeof colorMap]
  const gradientColor = colorBgMap[project.color as keyof typeof colorBgMap]
  const tagColorClass = colorTagMap[project.color as keyof typeof colorTagMap]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* ヘッダー */}
        <div className="text-center space-y-6">
          <Link href="/works" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-6">
            <FaArrowLeft className="mr-2" />
            Works一覧に戻る
          </Link>
          
          <div className="flex justify-center items-center space-x-4 mb-6">
            {IconComponent && <IconComponent className={`text-5xl ${iconColor}`} />}
            <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
              {project.title}
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {project.description}
          </p>
          
          {/* タグ */}
          <div className="flex flex-wrap justify-center gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className={`px-4 py-2 rounded-full text-sm font-medium ${tagColorClass}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* プロジェクト情報 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">プロジェクト概要</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">期間:</span>
                <span>{project.details.duration}</span>
              </div>
              {project.details.role && (
                <div className="flex justify-between">
                  <span className="font-medium">役割:</span>
                  <span>{project.details.role}</span>
                </div>
              )}
            </div>
          </div>


          {/* リンク */}
          {project.links && (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">プロジェクトリンク</h3>
              <div className="space-y-3">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full max-w-xs mx-auto"
                  >
                    <FaGithub className="mr-3 text-lg group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">GitHub Repository</span>
                  </a>
                )}
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${gradientColor} text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full max-w-xs mx-auto`}
                  >
                    <FaExternalLinkAlt className="mr-3 text-lg group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

          {/* 図表・資料 */}
          {project.diagrams && (project.diagrams.architecture || project.diagrams.timeline) && (
            <DiagramViewer diagrams={project.diagrams} />
          )}

        {/* 詳細コンテンツ */}
        <div className="space-y-10">
          {/* 概要 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">プロジェクト詳細</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.details.overview}
            </p>
          </div>

          {/* コード特徴・工夫点 */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">実装の特徴・工夫点</h2>
            
            {project.details.codeFeatures?.map((feature, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FaCode className="text-2xl text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  {feature.githubLink && (
                    <a 
                      href={feature.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {feature.codeSnippet && (
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <SyntaxHighlighter
                      language={feature.language || "typescript"}
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                      }}
                      showLineNumbers={true}
                      wrapLines={true}
                    >
                      {feature.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            ))}
          </div>



          {/* 主要実装・技術ハイライト */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 主要実装 */}
            {project.details.keyImplementations && project.details.keyImplementations.length > 0 && (
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
                <div className="flex items-center mb-6">
                  <FaTools className="text-2xl text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">主要実装</h3>
                </div>
                <ul className="space-y-3">
                  {project.details.keyImplementations.map((implementation, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                      <span className="text-sm leading-relaxed">{implementation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 技術ハイライト */}
            {project.details.techHighlights && project.details.techHighlights.length > 0 && (
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
                <div className="flex items-center mb-6">
                  <FaCog className="text-2xl text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">技術ハイライト</h3>
                </div>
                <ul className="space-y-3">
                  {project.details.techHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <FaCheckCircle className="flex-shrink-0 text-green-500 mt-1 mr-3" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 技術スタック */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">使用技術</h3>
            <div className="flex flex-wrap gap-3">
              {project.details.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>


        </div>

        {/* ナビゲーション */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/works">
            <button className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-50 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Watch Other Works
            </button>
          </Link>
          <Link href="/about">
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

// 静的パスの生成（オプション）
export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default ProjectDetailPage 