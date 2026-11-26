import React from 'react';

interface SectionRailProps {
  ariaLabel: string;
  collapsed: boolean;
  toggleLabel: string;
  onToggle: () => void;
  className?: string;
  children: React.ReactNode;
}

export function SectionRail({ ariaLabel, collapsed, toggleLabel, onToggle, className, children }: SectionRailProps) {
  return (
    <aside className={`section-rail${className ? ` ${className}` : ''}${collapsed ? ' section-rail-collapsed' : ''}`} aria-label={ariaLabel}>
      <button
        type="button"
        className="section-rail-toggle"
        onClick={onToggle}
        aria-label={toggleLabel}
        title={toggleLabel}
      >
        {collapsed ? '‹' : '›'}
      </button>
      <div className="section-rail-inner">{children}</div>
    </aside>
  );
}
