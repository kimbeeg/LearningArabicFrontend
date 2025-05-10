import React from 'react';
import { Music, Play } from 'lucide-react';

const SONGS = [
  {
    title: 'Arabic Alphabet Song',
    duration: '2:30',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Colors in Arabic',
    duration: '3:15',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Numbers 1-10',
    duration: '2:45',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80'
  },
];

export default function SongsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Arabic Learning Songs</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Learn Arabic through catchy and fun songs
      </p>

      <div className="space-y-6">
        {SONGS.map((song) => (
          <div key={song.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-48 h-48 sm:h-auto">
                <img 
                  src={song.thumbnail} 
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <Play size={48} className="text-white fill-white" />
                </button>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Music className="text-primary" size={24} />
                  <h2 className="text-xl font-bold">{song.title}</h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{song.duration}</span>
                  <span>•</span>
                  <span>{song.level}</span>
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    Play Song
                  </button>
                  <button className="w-full border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                    View Lyrics
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}