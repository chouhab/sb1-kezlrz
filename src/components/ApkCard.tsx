import React from 'react';
import { Shield, Download, Star } from 'lucide-react';
import { FocusableItem } from './FocusableItem';
import type { APK } from '../types';

interface ApkCardProps {
  apk: APK;
  onSelect: (apk: APK) => void;
}

export const ApkCard: React.FC<ApkCardProps> = ({ apk, onSelect }) => {
  return (
    <FocusableItem
      onSelect={() => onSelect(apk)}
      className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 cursor-pointer transform hover:scale-105 transition-all duration-300"
      focusKey={`apk-${apk.id}`}
    >
      <div className="flex items-start space-x-4">
        <img
          src={apk.iconUrl}
          alt={`${apk.name} icon`}
          className="w-20 h-20 rounded-xl"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{apk.name}</h3>
            {apk.verified && (
              <Shield className="w-6 h-6 text-green-400" />
            )}
          </div>
          <p className="text-gray-400 text-lg">{apk.developer}</p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-white">{apk.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 text-blue-400 mr-1" />
              <span className="text-white">{apk.downloads.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white">
              {apk.size}
            </span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white">
              {apk.category}
            </span>
            {apk.compatible && (
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">
                Compatible
              </span>
            )}
          </div>
        </div>
      </div>
    </FocusableItem>
  );
};