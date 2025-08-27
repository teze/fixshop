/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface GeneratePanelProps {
  onGenerateImage: (prompt: string) => void;
  isLoading: boolean;
}

const GeneratePanel: React.FC<GeneratePanelProps> = ({ onGenerateImage, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerateImage(prompt);
    }
  };
  
  const handlePresetClick = (presetPrompt: string) => {
    setPrompt(presetPrompt);
  };

  const presets = [
    'A majestic lion with a nebula-colored mane, looking out over a cosmic landscape.',
    'A hyper-realistic oil painting of a cozy library cafe on a rainy afternoon.',
    'A futuristic cyberpunk city street at night, with neon signs reflected in puddles.',
    'A serene, minimalist illustration of a single boat on a calm, misty lake at dawn.',
  ];

  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-center text-gray-200">Generate an Image from Text</h3>
      <p className="text-center text-gray-400 -mt-2">Describe anything you can imagine, and AI will create it. Generating a new image will replace your current one.</p>
      
      <div className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A cute robot tending to a garden of glowing crystal flowers..."
          className="flex-grow bg-gray-900/70 border border-gray-600 text-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-purple-500 focus:outline-none transition w-full disabled:cursor-not-allowed disabled:opacity-60 text-base min-h-[100px] resize-y"
          disabled={isLoading}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {presets.map((preset, index) => (
                <button
                    key={index}
                    onClick={() => handlePresetClick(preset)}
                    disabled={isLoading}
                    className="text-left text-sm p-3 bg-white/5 hover:bg-white/10 rounded-md transition-colors text-gray-400"
                >
                    "{preset}"
                </button>
            ))}
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-br from-purple-600 to-indigo-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-purple-800 disabled:to-indigo-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
          disabled={isLoading || !prompt.trim()}
        >
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default GeneratePanel;
