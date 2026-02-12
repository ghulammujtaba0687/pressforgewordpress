import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import { Chat } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm ForgeBot. I can help estimate your project scope or answer technical WordPress questions. How can I help today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Gemini Chat Session on mount
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    // Scroll to bottom
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoadingState(LoadingState.LOADING);

    try {
      const response = await sendMessageToGemini(chatSessionRef.current, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my brain right now. Please try again later.", isError: true }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // If no API key is set, chat session will be null. You might want to hide the component or show a warning.
  // For demo purposes, we'll keep it but it will fail gracefully in service.

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-600 hover:bg-brand-500'
          }`}
        >
          {isOpen ? <X className="text-white h-6 w-6" /> : <MessageSquare className="text-white h-6 w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-brand-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col z-40 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-800 p-4 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-brand-500/20 p-2 rounded-lg">
                <Bot className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">ForgeBot AI</h3>
                <p className="text-xs text-brand-300 flex items-center gap-1">
                  <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-white/5'
                  } ${msg.isError ? 'border-red-500/50 text-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex space-x-1 items-center">
                   <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                   <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-brand-800 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about project scope..."
                className="w-full bg-slate-900 text-white text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 border border-white/10"
              />
              <button
                onClick={handleSend}
                disabled={loadingState === LoadingState.LOADING}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-600 rounded-lg text-white hover:bg-brand-500 disabled:opacity-50 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-2">
              AI can make mistakes. Please verify important info.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;