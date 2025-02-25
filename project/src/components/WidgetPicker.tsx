import React from 'react';
import { Clock, Cloud, FileText, CheckSquare } from 'lucide-react';

interface WidgetPickerProps {
  onAddWidget: (type: string) => void;
}

const widgets = [
  { type: 'clock', icon: Clock, label: 'Clock' },
  { type: 'weather', icon: Cloud, label: 'Weather' },
  { type: 'notes', icon: FileText, label: 'Notes' },
  { type: 'todo', icon: CheckSquare, label: 'Todo' },
];

export function WidgetPicker({ onAddWidget }: WidgetPickerProps) {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      {widgets.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onAddWidget(type)}
          className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Icon className="w-6 h-6 text-blue-500 mb-1" />
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}