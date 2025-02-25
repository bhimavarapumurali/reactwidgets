import React, { useState, useEffect } from 'react';
import { WidgetGrid } from './components/WidgetGrid';
import { WidgetPicker } from './components/WidgetPicker';
import { Widget, WidgetState } from './types/widget';
import { Layout } from 'lucide-react';

function App() {
  const [state, setState] = useState<WidgetState>(() => {
    const saved = localStorage.getItem('widgetState');
    return saved ? JSON.parse(saved) : { widgets: [] };
  });

  useEffect(() => {
    localStorage.setItem('widgetState', JSON.stringify(state));
  }, [state]);

  const addWidget = (type: string) => {
    const newWidget: Widget = {
      id: crypto.randomUUID(),
      type: type as Widget['type'],
      position: { x: 0, y: 0 },
      size: { width: 1, height: 1 },
    };
    setState(prev => ({
      ...prev,
      widgets: [...prev.widgets, newWidget],
    }));
  };

  const removeWidget = (id: string) => {
    setState(prev => ({
      ...prev,
      widgets: prev.widgets.filter(widget => widget.id !== id),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Layout className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-semibold text-gray-900">Widget Dashboard</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4">
        <WidgetPicker onAddWidget={addWidget} />
        <WidgetGrid
          widgets={state.widgets}
          onRemoveWidget={removeWidget}
        />
      </main>
    </div>
  );
}

export default App;