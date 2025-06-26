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
              <div className="flex items-center mb-4">
                <FaCode className="text-2xl text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Technical Skills
                </h3>
              </div>
              <ul className="text-gray-700 space-y-3 text-left">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">Python + FastAPI:</span> 
                  <span className="ml-2">サーバー構築、BFF開発</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">TypeScript + Next.js:</span> 
                  <span className="ml-2">フロントエンド開発</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">Rust:</span> 
                  <span className="ml-2">APIサーバー開発、Google API連携</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">SQL:</span> 
                  <span className="ml-2">データ加工、ETL処理</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">GraphQL:</span> 
                  <span className="ml-2">Hono.js、クエリ言語</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-pink-600 font-semibold">NoSQL:</span> 
                  <span className="ml-2">Firestore操作</span>
                </li>
              </ul>
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
                  <span className="text-cyan-600 font-semibold">REHATCH:</span> 
                  <span className="ml-2">1年3ヶ月インターン</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">ダッシュボードONE:</span> 
                  <span className="ml-2">データ分析・構築</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">Leaplace:</span> 
                  <span className="ml-2">AI対話機能BFF開発</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">業務効率化:</span> 
                  <span className="ml-2">Slack自動化</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  <span className="text-cyan-600 font-semibold">データ連携:</span> 
                  <span className="ml-2">ETL・API開発</span>
                </li>
              </ul>
            </div>
          </div>

          {/* プロジェクト経験 */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <FaRocket className="text-3xl text-yellow-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Key Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center mb-3">
                  <FaChartLine className="text-2xl text-yellow-600 mr-3" />
                  <h4 className="text-lg font-semibold text-yellow-800">
                    ダッシュボードONE構築
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Google Looker StudioとオリジナルONEの両方を開発。広告データとGA4データを
                  trocco（ETL）で取得し、SQLで加工。フルスタック開発を経験。
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <FaRobot className="text-2xl text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-blue-800">
                    Leaplace AI対話機能BFF
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  DIFYとLeaplaceを仲介するBFFをPython FastAPI + Pydanticで構築。
                  FirestoreでのNoSQL操作、要件定義から実装まで一貫して担当。
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center mb-3">
                  <FaDatabase className="text-2xl text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-green-800">
                    業務効率化ツール
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Slack返信リマインド機能をPythonで実装。社外チャンネルの3時間以内
                  未返信を自動検知し、担当者にリマインド送信。
                </p>
              </div>
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
          <button className="px-10 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-500 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Watch My Works
          </button>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage 