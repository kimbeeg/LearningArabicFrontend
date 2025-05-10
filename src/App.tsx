import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BookOpen, Music, GamepadIcon, TabletIcon as AlphabetIcon } from 'lucide-react';
import HomePage from './pages/HomePage';
import LettersPage from './pages/LettersPage';
import VocabularyPage from './pages/VocabularyPage';
import GamesPage from './pages/GamesPage';
import SongsPage from './pages/SongsPage';

export function NavButton({ icon: Icon, label, onClick }: { icon: React.ElementType; label: string; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-48 gap-3"
    >
      <Icon size={36} className="text-primary" />
      <span className="text-xl font-bold text-gray-700">{label}</span>
    </button>
  );
}

// Template configuration interface
export interface TemplateConfig {
  title: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  showLogin?: boolean;
  showNewsletter?: boolean;
}

const defaultConfig: TemplateConfig = {
  title: 'تَعَلَّم العربية',
  showLogin: true,
  showNewsletter: true,
};

// Template context
export const TemplateContext = React.createContext<TemplateConfig>(defaultConfig);

function Layout({ children, config = defaultConfig }: { children: React.ReactNode; config?: TemplateConfig }) {
  const navigate = useNavigate();

  return (
    <TemplateContext.Provider value={config}>
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate('/')} 
                className="text-3xl md:text-4xl font-bold text-primary hover:scale-105 transition-transform"
              >
                {config.title}
              </button>
              <nav className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => navigate('/letters')}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Letters
                </button>
                <button 
                  onClick={() => navigate('/vocabulary')}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Vocabulary
                </button>
                <button 
                  onClick={() => navigate('/games')}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Games
                </button>
                <button 
                  onClick={() => navigate('/songs')}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Songs
                </button>
              </nav>
              {config.showLogin && (
                <button className="bg-secondary px-6 py-2 rounded-full text-white font-semibold hover:bg-secondary-dark transition-colors">
                  تسجيل الدخول
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 mt-16 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => navigate('/letters')} className="text-gray-600 hover:text-primary">Letters</button></li>
                  <li><button onClick={() => navigate('/vocabulary')} className="text-gray-600 hover:text-primary">Vocabulary</button></li>
                  <li><button onClick={() => navigate('/games')} className="text-gray-600 hover:text-primary">Games</button></li>
                  <li><button onClick={() => navigate('/songs')} className="text-gray-600 hover:text-primary">Songs</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
                </ul>
              </div>
              {config.showNewsletter && (
                <div>
                  <h3 className="font-bold text-lg mb-4">Connect</h3>
                  <p className="text-gray-600 mb-4">Stay updated with our newsletter!</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">© 2025 Arabic Learning Platform. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </TemplateContext.Provider>
  );
}

// IframeWrapper component for embedding
export function IframeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen">
      {children}
    </div>
  );
}

function App() {
  // Example configuration - AI agents can modify this
  const config: TemplateConfig = {
    title: 'تَعَلَّم العربية',
    showLogin: true,
    showNewsletter: true,
  };

  return (
    <IframeWrapper>
      <Routes>
        <Route path="/" element={<Layout config={config}><HomePage /></Layout>} />
        <Route path="/letters" element={<Layout config={config}><LettersPage /></Layout>} />
        <Route path="/vocabulary" element={<Layout config={config}><VocabularyPage /></Layout>} />
        <Route path="/games" element={<Layout config={config}><GamesPage /></Layout>} />
        <Route path="/songs" element={<Layout config={config}><SongsPage /></Layout>} />
      </Routes>
    </IframeWrapper>
  );
}

export default App;