"use client"

import type React from "react"
import PageLayout from "../components/PageLayout"
import Link from "next/link"
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaSchool, 
  FaFutbol, 
  FaRocket,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaRobot
} from "react-icons/fa"

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Kota Ishikuro
          </h2>
        </div>

        {/* メインコンテンツ */}
        <div className="space-y-8">
          {/* 自己紹介 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
            信州大学工学部情報システム工学科に在籍しています。エンジニアを目指すきっかけは、高校時代にプログラミングに初めて挑戦した体験にあります。環境構築に苦戦しながらも、Hello Worldが画面に表示された瞬間の達成感と、「これからどんなことができるようになるのか」というワクワク感は今でも鮮明に覚えています。それ以来、「作ること」と「新しい技術を学ぶこと」への情熱が止まらず、プログラミングを通じてあらゆる課題を解決できる可能性に魅力を感じ続けています。
            </p>
          </div>

          {/* 技術スキル */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
              <div className="flex items-center mb-6">
                <FaCode className="text-2xl text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4 text-left">
                {/* 言語 */}
                <div>
                  <h4 className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Rust</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                  </div>
                </div>

                {/* フレームワーク */}
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">FastAPI</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Hono.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Actix-web</span>
                  </div>
                </div>

                {/* データベース */}
                <div>
                  <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">BigQuery</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Firestore</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                  </div>
                </div>

                {/* その他技術 */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">GraphQL</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">ETL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-2xl">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-2xl text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Work Experience
                </h3>
              </div>
              <ul className="text-gray-700 space-y-3 text-left">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">長期インターン:</span> 
                  <span className="ml-2">2024年3月〜現在</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">データ分析・分析基盤構築:</span> 
                  <span className="ml-2">SQL、BIツール活用</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">SaaS開発:</span> 
                  <span className="ml-2">分析ツールのフロント・バックエンド構築</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">AI機能開発:</span> 
                  <span className="ml-2">チャット機能のBE構築</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">業務効率化・API開発:</span> 
                  <span className="ml-2">データ連携、自動化システム</span>
                </li>
              </ul>
            </div>
          </div>


          {/* 経歴マップ */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Career Journey
              </h3>
            </div>
            <div className="relative max-w-3xl mx-auto">
              {/* 中央の線 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-yellow-500 h-full rounded-full shadow-lg"></div>
              
              {/* タイムラインアイテム */}
              <div className="space-y-12">
                {/* 未来の目標 */}
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <div className="w-5/12 mr-auto">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-sm font-semibold mb-2 opacity-90">Future</div>
                      <h4 className="text-lg font-bold mb-2">AI・データサイエンス分野</h4>
                      <p className="text-purple-100 text-sm leading-relaxed">
                        機械学習やデータ分析等のAI開発に実際に取り組みたい
                      </p>
                    </div>
                  </div>
                </div>


                {/* REHATCH インターン */}
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-600 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                    <FaBriefcase className="text-white text-lg" />
                  </div>
                  <div className="w-5/12 ml-auto">
                    <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-sm font-semibold mb-2 opacity-90">2024 Apr. - Present</div>
                      <h4 className="text-lg font-bold mb-2">REHATCH インターン</h4>
                      <p className="text-cyan-100 text-sm leading-relaxed">
                        長期インターンにて分析ダッシュボード構築・AI機能開発・業務効率化・バックエンド開発を経験
                      </p>
                    </div>
                  </div>
                </div>

                {/* 大学入学 */}
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                    <FaSchool className="text-white text-lg" />
                  </div>
                  <div className="w-5/12 mr-auto">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-sm font-semibold mb-2 opacity-90">2023 Apr. - Present</div>
                      <h4 className="text-lg font-bold mb-2">信州大学入学</h4>
                      <p className="text-green-100 text-sm leading-relaxed">
                        工学部電子情報システム工学科<br/>
                        プログラミング学習開始
                      </p>
                    </div>
                  </div>
                </div>

                {/* サッカー開始 */}
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-600 rounded-full border-4 border-white shadow-xl z-10 flex items-center justify-center">
                    <FaFutbol className="text-white text-lg" />
                  </div>
                  <div className="w-5/12 ml-auto">
                    <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="text-sm font-semibold mb-2 opacity-90">2009 - Present</div>
                      <h4 className="text-lg font-bold mb-2">サッカー人生開始</h4>
                      <p className="text-yellow-100 text-sm leading-relaxed">
                        5歳でサッカーを始める<br/>
                        現在も大学サークルで継続中
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/">
            <button className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-50 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Go Back Home
            </button>
          </Link>
          <Link href="/works">
            <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Watch My Works
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage 