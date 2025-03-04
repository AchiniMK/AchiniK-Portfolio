"use client";
import React from 'react';
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Technologies",
    value: "4",
    postfix: "+",
  },
  {
    metric: "Code commits",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Project Manager intern",
    value: "6",
    postfix: "+ months",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full sm:w-auto my-4 sm:my-0"
          >
            {/* Ensure number and postfix stay in one line */}
            <h2 className="text-white text-4xl font-bold flex flex-row items-center gap-1 whitespace-nowrap">
              <span>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tension: 140 * (index + 1),
                  })}
                />
              </span>
              <span className="text-3xl sm:text-4xl">{achievement.postfix}</span>
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;