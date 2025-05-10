import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Music, GamepadIcon, TabletIcon as AlphabetIcon } from 'lucide-react';
import { NavButton } from '../App';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Learn Arabic in a Fun Way!
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of happy children learning Arabic through interactive games, songs, and activities
        </p>
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
            alt="Happy children learning"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
            <p className="text-2xl font-bold mb-4">Start Your Learning Journey Today!</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Learning Sections */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-8">Choose Your Learning Path</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <NavButton 
            icon={AlphabetIcon} 
            label="Letters" 
            onClick={() => navigate('/letters')} 
          />
          <NavButton 
            icon={BookOpen} 
            label="Vocabulary" 
            onClick={() => navigate('/vocabulary')} 
          />
          <NavButton 
            icon={GamepadIcon} 
            label="Games" 
            onClick={() => navigate('/games')} 
          />
          <NavButton 
            icon={Music} 
            label="Songs" 
            onClick={() => navigate('/songs')} 
          />
        </div>
      </section>

      {/* Featured Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Today's Letter: ا</h3>
          <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-8xl font-bold text-primary">ا</span>
          </div>
          <button 
            onClick={() => navigate('/letters')}
            className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            Start Learning
          </button>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Game</h3>
          <div className="aspect-video bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
            <GamepadIcon size={80} className="text-secondary" />
          </div>
          <button 
            onClick={() => navigate('/games')}
            className="w-full bg-secondary text-white py-4 rounded-xl font-semibold hover:bg-secondary-dark transition-colors"
          >
            Play Now
          </button>
        </div>
      </section>
    </>
  );
}