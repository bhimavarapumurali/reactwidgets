import React from 'react';
import { Cloud } from 'lucide-react';

export function Weather() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Cloud className="w-8 h-8 mb-2 text-blue-500" />
      <div className="text-2xl font-bold">23°C</div>
      <div className="text-gray-600">Sunny</div>
    </div>
  );
}