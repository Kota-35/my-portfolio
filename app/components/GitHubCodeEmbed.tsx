import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface GitHubCodeEmbedProps {
  githubUrl: string
  title: string
  description?: string
  language?: string
  codeSnippet?: string
}

const GitHubCodeEmbed: React.FC<GitHubCodeEmbedProps> = ({
  githubUrl,
  title,
  description,
  language = 'python',
  codeSnippet
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition-colors"
        >
          <FaGithub className="mr-2" />
          View Code
          <FaExternalLinkAlt className="ml-1 text-xs" />
        </a>
      </div>
      
      {codeSnippet && (
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code className={`language-${language}`}>
              {codeSnippet}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default GitHubCodeEmbed 