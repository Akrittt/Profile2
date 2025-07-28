import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader, Lightbulb, Sparkles } from 'lucide-react';

const AiTechRecommender = () => {
  const [projectType, setProjectType] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeMode, setActiveMode] = useState('recommend');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectType) return;

    setLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      let prompt;
      if (activeMode === 'recommend') {
        prompt = `As a senior software architect, recommend a modern and robust tech stack for the following project idea: "${projectType}". Explain why this stack is a good choice. Provide the stack in categories: Frontend, Backend, Database, and Deployment. Keep it short and precise`;
      } else {
        prompt = `Brainstorm a creative and interesting project idea that can be built using the following technologies: "${projectType}". Provide a project name, a short description, and a list of 3-5 key features. Keep it short and precise`;
      }

      const response = await fetch('http://localhost:8080/api/gemini-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt , mode: activeMode }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
      const text = data.candidates[0].content.parts[0].text;
      setRecommendation(JSON.parse(text));
    } else {
      throw new Error("No valid response from the API.");
    }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setProjectType('');
    }
  };

  return (
    <section id="recommender" className="bg-dark/40 py-20 px-5 md:px-10 ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8 text-center flex-col" >
          <div className="flex items-center gap-3 text-white">
            <Bot size={35} className="text-purple-400" />
            <h1 className="text-3xl font-bold">AI Assistant</h1>
          </div>
          <p className="text-slate-400 text-sm">Powered by Gemini</p>
        </div>

        <div className="flex justify-center gap-2 mb-4 p-1 bg-gray-700/50 rounded-lg w-fit mx-auto">
          <button onClick={() => setActiveMode('recommend')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeMode === 'recommend' ? 'bg-purple-600 text-white' : 'text-slate-300'}`}>Recommend Stack</button>
          <button onClick={() => setActiveMode('ideas')} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeMode === 'ideas' ? 'bg-purple-600 text-white' : 'text-slate-300'}`}>Suggest Ideas ✨</button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
          <input
            type="text"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            placeholder={activeMode === 'recommend' ? "e.g., 'An AI-powered recipe generator'" : "e.g., 'React and Spring Boot'"}
            className="flex-grow bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />
          <button type="submit" className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-500 transition-colors" disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : <Send />}
          </button>
        </form>

        <AnimatePresence>
          {error && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-red-400 bg-red-900/30 p-3 rounded-lg">{error}</motion.div>}
          {recommendation && (
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 border border-purple-800/30 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {activeMode === 'recommend' ? (
                <>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{recommendation.projectType}</h3>
                  <p className="text-slate-300 italic mb-6">{recommendation.summary}</p>
                  <div className="space-y-4">
                    {recommendation.stack && Object.entries(recommendation.stack).map(([category, tools]) => (
                      <div key={category}>
                        <h4 className="font-semibold text-lg text-white mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {tools.map(tool => (
                            <span key={tool} className="bg-gray-700 text-slate-200 text-sm font-medium px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{recommendation.projectName} ✨</h3>
                  <p className="text-slate-300 italic mb-6">{recommendation.description}</p>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {recommendation.features && recommendation.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AiTechRecommender;