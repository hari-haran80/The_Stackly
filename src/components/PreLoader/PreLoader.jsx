import React, { useEffect, useState } from "react";

export const PreLoader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [splitAnimation, setSplitAnimation] = useState(false);

  useEffect(() => {
    // Initial loading phase
    const loadingTimer = setTimeout(() => {
      // Start split animation (screen opening)
      setSplitAnimation(true);

      // After split animation starts, wait for it to complete before calling onFinish
      const exitTimer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setLoading(false);
          if (onFinish) onFinish();
        }, 800);
      }, 800); // Half of split animation duration

      return () => clearTimeout(exitTimer);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(loadingTimer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden ${
        exiting ? "pointer-events-none" : ""
      }`}
    >
      {/* Main loading container */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 
        text-white flex items-center justify-center
        transition-transform duration-1000 ease-in-out
        ${splitAnimation ? "-translate-y-full" : "translate-y-0"}
        ${exiting ? "opacity-0" : "opacity-100"}
      `}
      >
        {/* Loading text with enhanced animation */}
        <div className="text-center">
          <h1
            className="flex justify-center uppercase font-bold mb-6 leading-none"
            style={{
              fontSize: "clamp(2rem, 8vw, 4rem)",
              letterSpacing: "clamp(4px, 3vw, 20px)",
            }}
          >
            {"LOADING".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animation: `bounceFade 1.2s ease-in-out ${
                    index * 0.1
                  }s infinite alternate`,
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes bounceFade {
          0% {
            opacity: 0.3;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
          50% {
            opacity: 1;
            transform: translateY(-15px) scale(1.1);
            filter: blur(0px);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(168, 85, 247, 0.6);
          }
          100% {
            opacity: 0.3;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes progressBar {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 60%;
            transform: translateX(0);
          }
          100% {
            width: 100%;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
            background-color: white;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
            background-color: #a855f7;
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.8);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes shimmer-reverse {
          0% {
            transform: translateX(200%) skewX(15deg);
          }
          100% {
            transform: translateX(-100%) skewX(15deg);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes screenSplit {
          0% {
            clip-path: inset(0 0 0 0);
          }
          50% {
            clip-path: inset(50% 0 0 0);
          }
          100% {
            clip-path: inset(100% 0 0 0);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-shimmer-reverse {
          animation: shimmer-reverse 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Glow effect for text */
        .glow-text {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor,
            0 0 30px currentColor;
        }
      `}</style>
    </div>
  );
};
