import React, { useMemo } from "react";
import { FaCode } from "react-icons/fa";
import { LuBraces } from "react-icons/lu";

const AnimatedBackground = () => {
  const icons = [<FaCode />, <LuBraces />];

  const backgroundIcons = useMemo(() => {
    const rows = 3; // عدد الصفوف
    const cols = 7; // عدد الأعمدة
    const items = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // توزيع مبني على مكان المربع في الشبكة + إزاحة عشوائية بسيطة
        const top = r * (100 / rows) + Math.random() * 5;
        const left = c * (100 / cols) + Math.random() * 5;

        items.push({
          id: `${r}-${c}`,
          icon: icons[(r + c) % icons.length],
          top: `${top}%`,
          left: `${left}%`,
          // سرعة عشوائية لكل واحدة عشان ميبقوش ماشيين زي العساكر
          duration: `${6}s`,
          delay: `${1}s`,
        });
      }
    }
    return items;
  }, []);

  return (
    <div className="animated-bg">
      {backgroundIcons.map((item) => (
        <div
          key={item.id}
          className="bg-icon"
          style={{
            top: item.top,
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
