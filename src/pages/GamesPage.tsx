import React from 'react';
import { GamepadIcon, Star } from 'lucide-react';

const GAMES = [
  {
    title: 'Letter Match',
    description: 'Match Arabic letters with their sounds',
    difficulty: 'Easy',
    players: '1 Player',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Word Builder',
    description: 'Create words from Arabic letters',
    difficulty: 'Medium',
    players: '1-2 Players',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80'
  },
  {
    title: 'Memory Cards',
    description: 'Find matching pairs of Arabic words',
    difficulty: 'Easy',
    players: '1-4 Players',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=300&q=80'
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Fun Arabic Games</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Learn Arabic while playing exciting educational games
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES.map((game) => (
          <div key={game.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary">
                {game.difficulty}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GamepadIcon className="text-primary" size={24} />
                <h2 className="text-xl font-bold">{game.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">{game.players}</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}