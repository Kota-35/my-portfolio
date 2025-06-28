export interface Project {
  slug: string
  title: string
  description: string
  shortDescription: string
  icon: string
  color: string
  tags: string[]
  details: {
    overview: string
    codeFeatures: {
      title: string
      description: string
      codeSnippet?: string
      language?: string
      githubLink?: string
    }[]
    keyImplementations?: string[]
    techHighlights?: string[]
    technologies: string[]
    duration: string
    role?: string
  }
  links?: {
    github?: string
    demo?: string
    docs?: string
  }
  diagrams?: {
    architecture?: string
    timeline?: string
  }
}

export const projects: Project[] = [
//   {
//     slug: "dashboard-one",
//     title: "ダッシュボードONE",
//     description: "Google Looker StudioとオリジナルONEの両方を開発。広告データとGA4データをtrocco（ETL）で取得し、SQLで加工。フルスタック開発を経験。",
//     shortDescription: "Google Looker StudioとオリジナルONEの両方を開発。広告データとGA4データをtrocco（ETL）で取得し、SQLで加工。フルスタック開発を経験。",
//     icon: "FaChartLine",
//     color: "yellow",
//     tags: ["SQL", "ETL", "BigQuery", "Looker Studio"],
//     details: {
//       overview: "広告効果の可視化とデータドリブンな意思決定を支援するダッシュボードシステムの開発プロジェクトです。Google Looker Studioを使った標準ダッシュボードと、より柔軟なカスタマイズが可能なオリジナルダッシュボード「ONE」の両方を開発しました。",
//       challenges: [
//         "複数の広告プラットフォームからのデータ統合",
//         "リアルタイムに近いデータ更新の実現",
//         "非技術者でも直感的に操作できるUI設計",
//         "大量データの効率的な処理と表示"
//       ],
//       solutions: [
//         "trocco（ETL）を使用して複数データソースからの自動データ取得パイプライン構築",
//         "BigQueryでのデータウェアハウス設計と最適化されたSQLクエリ実装",
//         "Looker Studioでの標準テンプレート開発と、カスタムダッシュボードのフルスタック開発",
//         "データ更新頻度の最適化とキャッシュ戦略の実装"
//       ],
//       results: [
//         "データ取得時間を80%短縮",
//         "レポート作成工数を70%削減",
//         "リアルタイムデータ分析による意思決定速度向上",
//         "非技術者の自律的なデータ活用促進"
//       ],
//       technologies: ["SQL", "BigQuery", "Looker Studio", "trocco", "ETL", "JavaScript", "Python"],
//       duration: "6ヶ月",
//       role: "フルスタックエンジニア・データエンジニア"
//     }
//   },
//   {
//     slug: "ai-chat-bff",
//     title: "AI対話機能BFF",
//     description: "DIFYとLeaplaceを仲介するBFFをPython FastAPI + Pydanticで構築。FirestoreでのNoSQL操作、要件定義から実装まで一貫して担当。",
//     shortDescription: "DIFYとLeaplaceを仲介するBFFをPython FastAPI + Pydanticで構築。FirestoreでのNoSQL操作、要件定義から実装まで一貫して担当。",
//     icon: "FaRobot",
//     color: "blue",
//     tags: ["Python", "FastAPI", "Firestore", "AI"],
//     details: {
//       overview: "AI対話サービス「DIFY」とプラットフォーム「Leaplace」を連携させるBFF（Backend For Frontend）の開発プロジェクトです。ユーザーのスムーズな対話体験を実現するための高性能なAPI基盤を構築しました。",
//       challenges: [
//         "異なるサービス間でのデータ形式の統一",
//         "リアルタイムな対話処理の高速化",
//         "ユーザーセッション管理とデータ永続化",
//         "AI応答の品質管理とレート制限"
//       ],
//       solutions: [
//         "FastAPIとPydanticを使用した型安全で高性能なAPI設計",
//         "Firestoreを活用したスケーラブルなNoSQLデータベース設計",
//         "非同期処理とConnectionPoolingによる応答速度最適化",
//         "要件定義から実装まで一貫した開発プロセスの実践"
//       ],
//       results: [
//         "応答時間を平均300ms以下に最適化",
//         "同時接続数1000ユーザーまでのスケーラビリティ確保",
//         "システム稼働率99.5%以上を達成",
//         "開発期間を予定より20%短縮"
//       ],
//       technologies: ["Python", "FastAPI", "Pydantic", "Firestore", "NoSQL", "DIFY", "Docker", "GCP"],
//       duration: "4ヶ月",
//       role: "バックエンドエンジニア・システム設計"
//     }
//   },
  {
    slug: "slack-response-reminder",
    title: "Slack自動リマインド",
    description: "社外チャンネルの3時間以内未返信を自動検知し、担当者にリマインド送信",
    shortDescription: "社外チャンネルの3時間以内未返信を自動検知し、担当者にリマインド送信",
    icon: "FaCode",
    color: "green",
    tags: ["Python", "Slack API", "自動化"],
    details: {
      overview: "社外とのコミュニケーションの質向上を目的とした、Slack自動リマインドシステムの開発プロジェクトです。重要な顧客対応の見落としを防ぐことができました。",
      codeFeatures: [
        {
          title: "社内・社外メンバーをteam情報で自動判定",
          description: "スレッド内の時系列を考慮した返信有無の判定",
          codeSnippet: `has_reply = any(
    message.user_team is None and message.team == env.slack_team_id
    for message in target_messages
)`,
          language: "python",
          githubLink: "https://github.com/Kota-35/slack-response-reminder/blob/e4c37d9e35a5c689e04263ea35ff414818aaac10/src/api/endpoint/tasks/check.py#L44"
        },
      ],
      // keyImplementations: [
      //   "Slack APIを活用したリアルタイムメッセージ監視システム構築",
      //   "Pythonによる非同期処理とスケジューリング機能実装",
      //   "チャンネル属性の自動判別アルゴリズム開発",
      //   "ログ機能とエラーハンドリングの充実化"
      // ],
      // techHighlights: [
      //   "Slack APIの活用",
      //   "Pythonの活用",
      //   "チャンネル属性の自動判別",
      //   "ログ機能とエラーハンドリングの充実化"
      // ],
      technologies: ["Python", "FastAPI", "Slack API", "Docker", "Cloud Run", "Cloud Tasks", "Cloud Scheduler", "Notion API"],
      duration: "2週間",
    },
    links: {
        github: "https://github.com/Kota-35/slack-response-reminder.git"
      },
    diagrams: {
      architecture: "https://github.com/Kota-35/slack-response-reminder/blob/main/docs/images/architecture.jpg?raw=true",
      timeline: "https://github.com/Kota-35/slack-response-reminder/blob/main/docs/images/timeline.jpg?raw=true"
    }
  },
//   {
//     slug: "portfolio-site",
//     title: "ポートフォリオサイト",
//     description: "Next.js + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト。モダンなUIとスムーズなアニメーションを実装。",
//     shortDescription: "Next.js + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト。モダンなUIとスムーズなアニメーションを実装。",
//     icon: "FaLaptopCode",
//     color: "purple",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS"],
//     details: {
//       overview: "モダンなWebテクノロジーを活用して構築した個人ポートフォリオサイトです。レスポンシブデザインと直感的なUIを重視し、自身のスキルと経験を効果的に表現できるサイトを制作しました。",
//       challenges: [
//         "モバイルファーストなレスポンシブデザインの実現",
//         "パフォーマンスの最適化とSEO対策",
//         "保守性の高いコンポーネント設計",
//         "ユーザビリティを重視したUX設計"
//       ],
//       solutions: [
//         "Next.js 14の最新機能を活用したSSG/SSR実装",
//         "TypeScriptによる型安全な開発環境構築",
//         "Tailwind CSSでのユーティリティファーストなスタイリング",
//         "React Iconsと独自アニメーションによる魅力的なUI実装"
//       ],
//       results: [
//         "Lighthouse スコア95点以上を達成",
//         "全デバイスでの完全レスポンシブ対応",
//         "ページ読み込み速度1秒以下を実現",
//         "直感的で使いやすいナビゲーション設計"
//       ],
//       technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel", "React Icons"],
//       duration: "2ヶ月",
//       role: "フロントエンドエンジニア・UI/UXデザイン"
//     },
//     links: {
//       github: "https://github.com/username/portfolio",
//       demo: "https://portfolio.example.com"
//     }
//   },
//   {
//     slug: "data-api",
//     title: "データ連携API",
//     description: "複数のサービス間でのデータ連携を実現するREST APIを設計・開発。GraphQLエンドポイントも提供し、柔軟なデータ取得を可能に。",
//     shortDescription: "複数のサービス間でのデータ連携を実現するREST APIを設計・開発。GraphQLエンドポイントも提供し、柔軟なデータ取得を可能に。",
//     icon: "FaDatabase",
//     color: "orange",
//     tags: ["FastAPI", "GraphQL", "PostgreSQL"],
//     details: {
//       overview: "複数のマイクロサービス間でのスムーズなデータ連携を実現するAPI基盤の開発プロジェクトです。REST APIとGraphQLの両方を提供し、クライアントのニーズに応じた柔軟なデータアクセスを可能にしました。",
//       challenges: [
//         "異なるサービス間でのデータ整合性の確保",
//         "高頻度アクセスに対するパフォーマンス最適化",
//         "GraphQLとRESTの共存アーキテクチャ設計",
//         "セキュリティとアクセス制御の実装"
//       ],
//       solutions: [
//         "FastAPIによる高性能なREST API設計と実装",
//         "GraphQLエンドポイントによる柔軟なデータクエリ機能",
//         "PostgreSQLでの最適化されたデータベース設計",
//         "認証・認可機能とレート制限の実装"
//       ],
//       results: [
//         "API応答時間を平均100ms以下に最適化",
//         "データ取得の柔軟性を80%向上",
//         "開発チームの生産性を30%向上",
//         "サービス間通信の信頼性99.9%を達成"
//       ],
//       technologies: ["FastAPI", "GraphQL", "PostgreSQL", "Docker", "Redis", "JWT", "Swagger"],
//       duration: "5ヶ月",
//       role: "API設計・バックエンドエンジニア"
//     }
//   },
//   {
//     slug: "learning-app",
//     title: "学習支援アプリ（企画中）",
//     description: "大学生向けの学習効率化アプリを企画中。AI機能を活用した個人化された学習プランの提案機能を検討。",
//     shortDescription: "大学生向けの学習効率化アプリを企画中。AI機能を活用した個人化された学習プランの提案機能を検討。",
//     icon: "FaMobile",
//     color: "teal",
//     tags: ["React Native", "AI/ML", "企画中"],
//     details: {
//       overview: "大学生の学習効率向上を目的とした、AI機能を活用したパーソナライズド学習支援アプリケーションの企画・開発プロジェクトです。個々の学習スタイルと進捗に応じた最適な学習プランを提案します。",
//       challenges: [
//         "個人の学習パターンの分析とモデル化",
//         "効果的な学習プラン生成アルゴリズムの設計",
//         "ユーザーエンゲージメントの維持向上",
//         "クロスプラットフォーム対応の実現"
//       ],
//       solutions: [
//         "React Nativeによるクロスプラットフォーム開発",
//         "機械学習を活用した学習パターン分析機能",
//         "ゲーミフィケーション要素の導入",
//         "リアルタイム進捗追跡と適応的プラン調整"
//       ],
//       results: [
//         "プロトタイプ版の基本機能完成（企画段階）",
//         "ユーザーリサーチに基づく要件定義完了",
//         "技術検証とアーキテクチャ設計完了",
//         "MVP開発に向けた開発計画策定"
//       ],
//       technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow.js", "Expo", "Redux"],
//       duration: "進行中（企画・設計段階）",
//       role: "プロダクトマネージャー・アプリ設計"
//     }
//   }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
} 