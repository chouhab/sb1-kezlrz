import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ApkCard } from './components/ApkCard';
import type { APK } from './types';

// Sample data - In a real app, this would come from an API
const sampleApks: APK[] = [
  {
    id: '1',
    name: 'Netflix',
    version: '8.0.0',
    size: '58MB',
    developer: 'Netflix, Inc.',
    category: 'Entertainment',
    rating: 4.5,
    downloads: 1000000000,
    lastUpdated: '2024-03-15',
    compatible: true,
    verified: true,
    iconUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop',
  },
  {
    id: '2',
    name: 'Spotify',
    version: '8.8.0',
    size: '45MB',
    developer: 'Spotify AB',
    category: 'Entertainment',
    rating: 4.4,
    downloads: 800000000,
    lastUpdated: '2024-03-14',
    compatible: true,
    verified: true,
    iconUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=128&h=128&fit=crop',
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleVoiceSearch = () => {
    // Implement voice search functionality
    console.log('Voice search activated');
  };

  const handleApkSelect = (apk: APK) => {
    // Handle APK selection
    console.log('Selected APK:', apk);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          APK Explorer for Samsung TV
        </h1>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onVoiceSearch={handleVoiceSearch}
        />
      </header>

      <main className="max-w-7xl mx-auto">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {sampleApks.map((apk) => (
            <ApkCard key={apk.id} apk={apk} onSelect={handleApkSelect} />
          ))}
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>Use arrow keys to navigate and Enter to select</p>
      </footer>
    </div>
  );
}

export default App;