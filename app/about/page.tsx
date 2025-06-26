"use client"

import type React from "react"
import PageLayout from "../components/PageLayout"
import Link from "next/link"

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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              信州大学工学部電子情報システム工学科情報プログラムの3年生です。
              5歳からサッカーを続けており、現在も大学のサークルでサッカーを楽しんでいます。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              REHATCHというデジタルマーケティング・広告運用支援のベンチャー企業で
              1年3ヶ月の就業型長期インターンを経験し、データ分析からフルスタック開発まで
              幅広い技術を学んでいます。
            </p>
          </div>

          {/* 技術スキル */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Technical Skills
              </h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• <span className="text-pink-600 font-semibold">Python + FastAPI:</span> サーバー構築、BFF開発</li>
                <li>• <span className="text-pink-600 font-semibold">TypeScript + Next.js:</span> フロントエンド開発</li>
                <li>• <span className="text-pink-600 font-semibold">Rust:</span> APIサーバー開発、Google API連携</li>
                <li>• <span className="text-pink-600 font-semibold">SQL:</span> データ加工、ETL処理</li>
                <li>• <span className="text-pink-600 font-semibold">GraphQL:</span> Hono.js、クエリ言語</li>
                <li>• <span className="text-pink-600 font-semibold">NoSQL:</span> Firestore操作</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Work Experience
              </h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• <span className="text-cyan-600 font-semibold">REHATCH:</span> 1年3ヶ月インターン</li>
                <li>• <span className="text-cyan-600 font-semibold">ダッシュボードONE:</span> データ分析・構築</li>
                <li>• <span className="text-cyan-600 font-semibold">Leaplace:</span> AI対話機能BFF開発</li>
                <li>• <span className="text-cyan-600 font-semibold">業務効率化:</span> Slack自動化</li>
                <li>• <span className="text-cyan-600 font-semibold">データ連携:</span> ETL・API開発</li>
              </ul>
            </div>
          </div>

          {/* プロジェクト経験 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Projects
            </h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-lg font-semibold text-yellow-600 mb-2">
                  🎯 ダッシュボードONE構築
                </h4>
                <p className="text-gray-700">
                  Google Looker StudioとオリジナルONEの両方を開発。広告データとGA4データを
                  trocco（ETL）で取得し、SQLで加工。フルスタック開発を経験。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-600 mb-2">
                  🤖 Leaplace AI対話機能BFF
                </h4>
                <p className="text-gray-700">
                  DIFYとLeaplaceを仲介するBFFをPython FastAPI + Pydanticで構築。
                  FirestoreでのNoSQL操作、要件定義から実装まで一貫して担当。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-600 mb-2">
                  ⚡ 業務効率化ツール
                </h4>
                <p className="text-gray-700">
                  Slack返信リマインド機能をPythonで実装。社外チャンネルの3時間以内
                  未返信を自動検知し、担当者にリマインド送信。
                </p>
              </div>
            </div>
          </div>

          {/* 学習状況 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Learning & Growth
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              現在、非同期処理（async/await、asyncio）の理解を深め、
              TypeScriptの基礎知識を強化中です。GraphQLのfragment、union componentなど
              より高度な概念も学習を進めています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              RustでのGoogle API連携では、開発中のクレートが少ない中で
              BigQuery、Secret Manager、OAuth認証を自前実装し、
              マルチクライアント対応も経験しました。
            </p>
          </div>
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/">
            <button className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-400 hover:border-gray-600 hover:bg-gray-50 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Go Back Home
            </button>
          </Link>
          <button className="px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full font-semibold hover:border-gray-600 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
            Watch My Works
          </button>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage 