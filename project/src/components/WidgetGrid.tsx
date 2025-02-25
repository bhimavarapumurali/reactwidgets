import React from 'react';
import { Clock } from './widgets/Clock';
import { Weather } from './widgets/Weather';
import { Notes } from './widgets/Notes';
import { Todo } from './widgets/Todo';
import { Widget } from '../types/widget';
import { X } from 'lucide-react';

interface WidgetGridProps {
  widgets: Widget[];
  onRemoveWidget: (id: string) => void;
}

const widgetComponents = {
  clock: Clock,
  weather: Weather,
  notes: Notes,
  todo: Todo,
};

export function WidgetGrid({ widgets, onRemoveWidget }: WidgetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {widgets.map((widget) => {
        const WidgetComponent = widgetComponents[widget.type];
        return (
          <div
            key={widget.id}
            className="bg-white rounded-lg shadow-md relative"
            style={{
              gridColumn: `span ${widget.size.width}`,
              gridRow: `span ${widget.size.height}`,
            }}
          >
            <button
              onClick={() => onRemoveWidget(widget.id)}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <WidgetComponent />
          </div>
        );
      })}
    </div>
  );
}