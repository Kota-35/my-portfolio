"use client"

import clsx from "clsx"
import type React from "react"
import { useEffect, useState } from "react"

/*----------------- ① 幻想的な背景グラデーション -----------------*/
const FantasyBg: React.FC = () => (
  <div
    className={clsx(
      "min-h-screen",
      "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", // ダークベース
      "pointer-events-none",
      "absolute",
      "inset-0",
      "overflow-hidden",
    )}
  >
    {/* メインの紫グラデーション */}
    <div
      className={clsx(
        "absolute",
        "-left-1/3",
        "-top-1/3",
        "h-[100vw]",
        "w-[100vw]",
        "rounded-full",
        "bg-[radial-gradient(circle,#8b5cf6_0%,rgba(139,92,246,0.4)_25%,rgba(139,92,246,0.1)_50%,transparent_70%)]",
        "blur-[80px]",
        "opacity-60",
        "animate-pulse",
      )}
      style={{
        animation: "float 20s ease-in-out infinite",
      }}
    />

    {/* ピンクの光 */}
    <div
      className={clsx(
        "absolute",
        "-right-1/4",
        "top-1/4",
        "h-[70vw]",
        "w-[70vw]",
        "rounded-full",
        "bg-[radial-gradient(circle,#ec4899_0%,rgba(236,72,153,0.3)_30%,rgba(236,72,153,0.1)_60%,transparent_80%)]",
        "blur-[60px]",
        "opacity-50",
      )}
      style={{
        animation: "float 25s ease-in-out infinite reverse",
      }}
    />

    {/* 青緑の光 */}
    <div
      className={clsx(
        "absolute",
        "left-1/4",
        "-bottom-1/4",
        "h-[80vw]",
        "w-[80vw]",
        "rounded-full",
        "bg-[radial-gradient(circle,#06b6d4_0%,rgba(6,182,212,0.4)_25%,rgba(6,182,212,0.1)_50%,transparent_70%)]",
        "blur-[70px]",
        "opacity-40",
      )}
      style={{
        animation: "float 30s ease-in-out infinite",
      }}
    />

    {/* 小さな光の粒子 */}
    <div
      className={clsx(
        "absolute",
        "right-1/3",
        "top-1/3",
        "h-[30vw]",
        "w-[30vw]",
        "rounded-full",
        "bg-[radial-gradient(circle,#fbbf24_0%,rgba(251,191,36,0.6)_20%,rgba(251,191,36,0.2)_40%,transparent_60%)]",
        "blur-[40px]",
        "opacity-30",
      )}
      style={{
        animation: "pulse 15s ease-in-out infinite",
      }}
    />

    {/* 追加の紫の光 */}
    <div
      className={clsx(
        "absolute",
        "left-1/3",
        "top-2/3",
        "h-[40vw]",
        "w-[40vw]",
        "rounded-full",
        "bg-[radial-gradient(circle,#a855f7_0%,rgba(168,85,247,0.5)_25%,rgba(168,85,247,0.1)_50%,transparent_70%)]",
        "blur-[50px]",
        "opacity-35",
      )}
      style={{
        animation: "float 18s ease-in-out infinite reverse",
      }}
    />
  </div>
)

/*----------------- ② 星の背景 -----------------*/
const StarField: React.FC = () => {
  const [stars, setStars] = useState<Array<{
    left: string;
    top: string;
    animation: string;
    animationDelay: string;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [...Array(50)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={star}
        />
      ))}
    </div>
  );
};

/*----------------- ③ 背景コンポーネント -----------------*/
const Background: React.FC = () => (
  <>
    <FantasyBg />
    <StarField />
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -30px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `}</style>
  </>
)

export default Background 