import React from 'react';
import { Search, Mic } from 'lucide-react';
import { FocusableItem } from './FocusableItem';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onVoiceSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onVoiceSearch,
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <FocusableItem className="w-full" focusKey="search">
        <div className="relative flex items-center">
          <Search className="absolute left-6 w-8 h-8 text-gray-400" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full py-6 pl-20 pr-20 text-2xl bg-gray-800 text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500"
            placeholder="Search APKs..."
          />
          <FocusableItem
            onSelect={onVoiceSearch}
            className="absolute right-4"
            focusKey="voice-search"
          >
            <button
              className="p-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              aria-label="Voice Search"
            >
              <Mic className="w-6 h-6 text-white" />
            </button>
          </FocusableItem>
        </div>
      </FocusableItem>
    </div>
  );
};