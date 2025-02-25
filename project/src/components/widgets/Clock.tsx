import React from 'react';
import { Clock as ClockIcon } from 'lucide-react';
import { useTime } from '../../hooks/useTime';

export function Clock() {
  const time = useTime();
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <ClockIcon className="w-8 h-8 mb-2 text-blue-500" />
      <time className="text-2xl font-bold">{time}</time>
    </div>
  );
}