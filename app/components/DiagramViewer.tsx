'use client'

import React from 'react'
import { FaSitemap, FaClock } from 'react-icons/fa'

interface DiagramViewerProps {
  diagrams: {
    architecture?: string
    timeline?: string
  }
}

const DiagramViewer: React.FC<DiagramViewerProps> = ({ diagrams }) => {
  const handleImageClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">図表・資料</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* アーキテクチャ図 */}
        {diagrams.architecture && (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
            <div className="flex items-center mb-6">
              <FaSitemap className="text-2xl text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">アーキテクチャ図</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <img 
                src={diagrams.architecture} 
                alt="アーキテクチャ図" 
                className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleImageClick(diagrams.architecture!)}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              クリックすると新しいタブで開きます
            </p>
          </div>
        )}

        {/* タイムライン図 */}
        {diagrams.timeline && (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 shadow-xl">
            <div className="flex items-center mb-6">
              <FaClock className="text-2xl text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">タイムライン図</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <img 
                src={diagrams.timeline} 
                alt="タイムライン図" 
                className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleImageClick(diagrams.timeline!)}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              クリックすると新しいタブで開きます
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DiagramViewer 