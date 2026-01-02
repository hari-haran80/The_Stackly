import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const headings = [
    "Web Development",
    "Mobile App Development",
    "Web Design",
    "E-Commerce",
  ];

  useEffect(() => {
    const currentHeading = headings[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 50 : 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentHeading.length) {
          setDisplayText(currentHeading.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentHeading.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next heading
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className="typing-container flex flex-col items-start">
      <h1 className="text-white text-xl md:text-2xl font-semibold mb-4">
        Looking For
      </h1>
      <div className="typing-text min-h-20 flex items-center">
        <span className="text-emerald-600">{displayText}</span>
        <span className="typing-cursor ml-1 h-10 w-0.75 bg-emerald-600 animate-pulse"></span>
      </div>
    </div>
  );
};

export default TypingAnimation;
