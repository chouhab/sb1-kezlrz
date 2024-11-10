import React from 'react';
import { FocusableItem } from './FocusableItem';

const categories = [
  'All',
  'Games',
  'Social',
  'Entertainment',
  'Productivity',
  'Tools',
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
      {categories.map((category) => (
        <FocusableItem
          key={category}
          onSelect={() => onSelect(category)}
          focusKey={`category-${category}`}
        >
          <div
            className={`px-6 py-4 rounded-xl text-xl transition-all duration-300 ${
              selected === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </div>
        </FocusableItem>
      ))}
    </div>
  );
};