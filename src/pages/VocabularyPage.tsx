import React from 'react';
import { BookOpen } from 'lucide-react';

const CATEGORIES = [
  { name: 'Animals', words: ['قط', 'كلب', 'أسد'] },
  { name: 'Colors', words: ['أحمر', 'أزرق', 'أصفر'] },
  { name: 'Numbers', words: ['واحد', 'اثنان', 'ثلاثة'] },
  { name: 'Family', words: ['أب', 'أم', 'أخ'] },
  { name: 'Food', words: ['خبز', 'حليب', 'ماء'] },
  { name: 'Body Parts', words: ['رأس', 'يد', 'قدم'] },
];

export default function VocabularyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Vocabulary</h1>
      <p className="text-xl text-gray-600 text-center mb-12">
        Learn essential Arabic words through categories
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen size={32} className="text-primary" />
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
            <div className="space-y-4">
              {category.words.map((word) => (
                <div key={word} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-2xl font-arabic">{word}</span>
                  <button className="text-primary hover:text-primary-dark">
                    <span className="sr-only">Play sound</span>
                    🔊
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}