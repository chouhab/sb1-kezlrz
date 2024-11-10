import React, { useRef, useEffect } from 'react';

interface FocusableItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  className?: string;
  focusKey?: string;
}

export const FocusableItem: React.FC<FocusableItemProps> = ({
  children,
  onSelect,
  className = '',
  focusKey,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement === itemRef.current) {
        if (e.key === 'Enter' && onSelect) {
          onSelect();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelect]);

  return (
    <div
      ref={itemRef}
      tabIndex={0}
      data-focus-key={focusKey}
      onClick={onSelect}
      className={`focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-lg transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
};