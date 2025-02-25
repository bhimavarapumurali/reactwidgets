import React, { useState } from 'react';
import { FileText } from 'lucide-react';

export function Notes() {
  const [note, setNote] = useState('');

  return (
    <div className="p-4">
      <div className="flex items-center mb-2">
        <FileText className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="font-semibold">Quick Notes</h3>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-32 p-2 border rounded-md resize-none"
        placeholder="Write your notes here..."
      />
    </div>
  );
}