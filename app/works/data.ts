export interface Project {
  slug: string
  title: string
  description: string
  shortDescription: string
  icon: string
  color: "green" | "blue" | "red" | "yellow" | "purple" | "orange" | "pink" | "brown" | "gray" | "black" | "white"
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
  {
    slug: "todo-api",
    title: "Todo管理API",
    description: "Todo管理API",
    shortDescription: "Todo管理API",
    icon: "FaTasks",
    color: "blue",
    tags: ["Go", "Gin", "PostgreSQL", "Prisma", "Docker"],
    details: {
      overview: "Todo管理API",
      codeFeatures: [
        {
          title: "Todo管理API",
          description: "Todo管理API",
        }
      ],
      technologies: ["Go", "Gin", "PostgreSQL", "Prisma", "Docker"],
      duration: "開発中",
    },
    links: {
      github: "https://github.com/Kota-35/todo-api-go"
    }
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects
} 