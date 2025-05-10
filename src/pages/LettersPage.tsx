import React from 'react';

const ARABIC_LETTERS = [
  { letter: 'ا', name: 'Alif', sound: '/a/' },
  { letter: 'ب', name: 'Ba', sound: '/b/' },
  { letter: 'ت', name: 'Ta', sound: '/t/' },
  { letter: 'ث', name: 'Tha', sound: '/th/' },
  { letter: 'ج', name: 'Jim', sound: '/j/' },
  { letter: 'ح', name: 'Ha', sound: '/ḥ/' },
  // Add more letters as needed
];

export default function LettersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Arabic Letters</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Learn the Arabic alphabet through interactive exercises and fun activities
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARABIC_LETTERS.map((letter) => (
          <div key={letter.letter} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-8xl font-bold text-primary">{letter.letter}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{letter.name}</h3>
            <p className="text-gray-600">Pronunciation: {letter.sound}</p>
            <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
              Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}