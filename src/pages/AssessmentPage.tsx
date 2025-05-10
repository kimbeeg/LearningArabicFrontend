import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play } from 'lucide-react';

interface Question {
  question_id: string;
  title_ar: string;
  question_index: number;
  question_type_code: string;
  voice_over_media: MediaAsset | null;
  options?: QuestionOption[];
  hotspot_details?: HotspotQuestionDetails;
  matching_pairs?: MatchingPair[];
}

interface MediaAsset {
  original_ref_id: string;
  media_type: string;
  storage_path: string;
  mime_type: string | null;
  media_asset_id: number;
}

interface QuestionOption {
  option_id: string;
  option_text_ar: string;
  is_correct: boolean;
  option_order: number;
  question_id: string;
}

interface HotspotQuestionDetails {
  question_id: string;
  is_multiple_selections_allowed: boolean;
  background_media_id: number;
  background_media: MediaAsset | null;
  correct_areas: HotspotCorrectArea[];
}

interface HotspotCorrectArea {
  area_id: string;
  question_id: string;
  coordinates_json: string;
  area_order: number;
}

interface MatchingPair {
  pair_id: string;
  question_id: string;
  key_text_ar: string;
  value_text_ar: string;
}

interface UserAnswers {
  [questionId: string]: {
    selectedOptions?: string[];
    matchedPairs?: { [keyId: string]: string };
    hotspotAreas?: { x: number; y: number }[];
  };
}

export default function AssessmentPage() {
  const { id } = useParams<{ id: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/v1/assessments/${id}/questions`);
        if (!response.ok) throw new Error('Failed to fetch questions');
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchQuestions();
  }, [id]);

  const handleOptionSelect = (questionId: string, optionId: string, isMultiple: boolean) => {
    setUserAnswers(prev => {
      const currentSelected = prev[questionId]?.selectedOptions || [];
      let newSelected: string[];

      if (isMultiple) {
        newSelected = currentSelected.includes(optionId)
          ? currentSelected.filter(id => id !== optionId)
          : [...currentSelected, optionId];
      } else {
        newSelected = [optionId];
      }

      return {
        ...prev,
        [questionId]: { ...prev[questionId], selectedOptions: newSelected }
      };
    });
  };

  const handleMatchingPair = (questionId: string, keyId: string, valueId: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        matchedPairs: {
          ...(prev[questionId]?.matchedPairs || {}),
          [keyId]: valueId
        }
      }
    }));
  };

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
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-8">
        {questions.map((question, index) => (
          <div 
            key={question.question_id}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-medium">
                {index + 1}
              </span>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{question.title_ar}</h2>
                {question.voice_over_media && (
                  <button 
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                    onClick={() => {/* Play audio */}}
                  >
                    <Play size={20} />
                    <span>Play Audio</span>
                  </button>
                )}
              </div>
            </div>

            {/* Question content based on type */}
            <div className="pl-12">
              {question.question_type_code === 'multipleSelect' && question.options && (
                <div className="space-y-3">
                  {question.options.map(option => (
                    <label 
                      key={option.option_id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={userAnswers[question.question_id]?.selectedOptions?.includes(option.option_id) || false}
                        onChange={() => handleOptionSelect(question.question_id, option.option_id, true)}
                        className="h-5 w-5 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-lg">{option.option_text_ar}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.question_type_code === 'singleSelectText' && question.options && (
                <div className="space-y-3">
                  {question.options.map(option => (
                    <label 
                      key={option.option_id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-primary cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name={`question_${question.question_id}`}
                        checked={userAnswers[question.question_id]?.selectedOptions?.[0] === option.option_id}
                        onChange={() => handleOptionSelect(question.question_id, option.option_id, false)}
                        className="h-5 w-5 text-primary rounded-full focus:ring-primary"
                      />
                      <span className="text-lg">{option.option_text_ar}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Add more question types here */}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4 flex justify-end mt-8">
        <button 
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          onClick={() => {/* Submit assessment */}}
        >
          Submit Assessment
        </button>
      </div>
    </div>
  );
}