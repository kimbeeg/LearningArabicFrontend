import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AssessmentPage from './pages/AssessmentPage';

// Types based on the API documentation
interface Assessment {
  assessment_id: string;
  assessment_name: string;
  target_audience: string;
  description: string | null;
  source_filename: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface Question {
  question_id: string;
  title_ar: string;
  question_index: number;
  question_type_code: string;
  voice_over_media: MediaAsset | null;
}

interface MediaAsset {
  original_ref_id: string;
  media_type: string;
  storage_path: string;
  mime_type: string | null;
  media_asset_id: number;
}

function App() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await fetch('/api/v1/assessments');
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', errorText);
          throw new Error(`Failed to fetch assessments: ${response.status} ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(`Expected JSON response but got ${contentType}`);
        }

        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setAssessments(data);
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError);
          console.error('Response Text:', text);
          throw new Error('Failed to parse response as JSON');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg max-w-lg">
          <h2 className="font-semibold mb-2">Error Loading Assessments</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="max-w-4xl mx-auto p-4">
              <h1 className="text-3xl font-bold mb-8 text-gray-800">Available Assessments</h1>
              <div className="grid gap-6">
                {assessments.map((assessment) => (
                  <div 
                    key={assessment.assessment_id}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <h2 className="text-xl font-semibold mb-2">{assessment.assessment_name}</h2>
                    {assessment.description && (
                      <p className="text-gray-600 mb-4">{assessment.description}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Target Audience: {assessment.target_audience}
                      </span>
                      <a 
                        href={`/assessment/${assessment.assessment_id}`}
                        className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
                      >
                        Start Assessment
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } 
        />
        <Route path="/assessment/:id" element={<AssessmentPage />} />
      </Routes>
    </div>
  );
}

export default App;