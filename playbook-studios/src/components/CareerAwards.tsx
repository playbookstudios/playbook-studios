import React from 'react';
import { careerAwards, CareerAward } from '../data/careerAwards';

interface CareerAwardsProps {
  careerAwardIds: string[];
  maxDisplay?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function CareerAwards({ careerAwardIds, maxDisplay = 3, size = 'sm' }: CareerAwardsProps) {
  const awards = careerAwardIds
    .map(id => careerAwards.find(award => award.id === id))
    .filter((award): award is CareerAward => award !== undefined)
    .slice(0, maxDisplay);

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  if (awards.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {awards.map((award) => (
        <div
          key={award.id}
          className={`
            inline-flex items-center gap-1 rounded-full border
            ${sizeClasses[size]}
            ${award.color}
            font-medium
          `}
          title={award.description}
        >
          <span className="text-sm">{award.icon}</span>
          <span>{award.title}</span>
        </div>
      ))}
      {careerAwardIds.length > maxDisplay && (
        <div className={`
          inline-flex items-center gap-1 rounded-full border
          ${sizeClasses[size]}
          bg-gray-100 text-gray-600 border-gray-200
          font-medium
        `}>
          <span className="text-sm">+{careerAwardIds.length - maxDisplay}</span>
        </div>
      )}
    </div>
  );
}
