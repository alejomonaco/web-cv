import React from 'react';

interface DetailStatItem {
  label: string;
  value: string | number;
}

interface DetailStatGridProps {
  items: DetailStatItem[];
  className?: string;
  cardClassName?: string;
}

export function DetailStatGrid({ items, className = 'detail-stat-grid', cardClassName = 'detail-stat-card' }: DetailStatGridProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <article key={item.label} className={cardClassName}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </div>
  );
}