import { useEffect, useState } from "react";
import "./index.css";

function CircularProgress({ percentage, label }) {
  const [progress, setProgress] = useState(0);

  const radius = 70;
  const stroke = 12;
  const normalizedRadius = 54; // الدائرة الخضراء
  const innerBorderRadius = 45; // بوردر داخلي
  const outerBorderRadius = 64; // بوردر خارجي
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 400);
    return () => clearTimeout(timer);
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="skill-card">
      <div className="circle-wrapper">
        <svg height={radius * 2} width={radius * 2} viewBox="0 0 140 140">
          {/* 1. البوردر الخارجي الأبيض */}
          <circle
            className="circle-border outer"
            strokeWidth="1.5"
            r={outerBorderRadius}
            cx="70"
            cy="70"
          />

          {/* 2. البوردر الداخلي الأبيض */}
          <circle
            className="circle-border inner"
            strokeWidth="1.5"
            r={innerBorderRadius}
            cx="70"
            cy="70"
          />

          {/* 3. الحلقة الخلفية (الرمادي الغامق) */}
          <circle
            className="circle-bg"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="70"
            cy="70"
          />

          {/* 4. حلقة التقدم الخضراء */}
          <circle
            className="circle-progress"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="70"
            cy="70"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        <div className="percentage">{progress}%</div>
      </div>

      <p className="skill-label">{label}</p>
    </div>
  );
}

export default CircularProgress;
