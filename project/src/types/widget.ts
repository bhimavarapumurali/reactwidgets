export interface Widget {
  id: string;
  type: 'clock' | 'weather' | 'notes' | 'todo';
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

export interface WidgetState {
  widgets: Widget[];
}