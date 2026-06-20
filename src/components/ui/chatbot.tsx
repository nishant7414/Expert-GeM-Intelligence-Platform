'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, Minimize2 } from 'lucide-react'

type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am Expert. How can I assist you with GeM procurement today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userText = inputValue;

    // Add user message to UI
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newUserMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      // Call our secure backend API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newUserMessage] })
      });

      const data = await response.json();

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting to the network right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-[90px] right-5 md:bottom-[100px] md:right-6 z-50 flex flex-col items-end">
            {/* Floating Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 }}
              className="mb-3 mr-2 origin-bottom-right"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative bg-white border border-slate-200 shadow-xl rounded-2xl rounded-br-sm px-6 py-3 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:border-primary/30 transition-all group"
                onClick={() => setIsOpen(true)}
              >
                <span className="text-slate-800 font-extrabold text-[15px] tracking-wide group-hover:text-primary transition-colors">Hello! 👋</span>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 right-2 w-4 h-4 bg-white border-b border-r border-slate-200 transform rotate-45 rounded-sm group-hover:border-primary/30 transition-colors"></div>
              </motion.div>
            </motion.div>

            {/* Robot Avatar Button */}
            <motion.button
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 0, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0, opacity: 0 },
                tap: { scale: 0.95 }
              }}
              onClick={() => setIsOpen(true)}
              className="relative w-20 h-20 bg-white border-4 border-white rounded-full shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.16)] transition-shadow flex items-center justify-center overflow-visible"
            >
              <div className="absolute inset-0 rounded-full bg-slate-50 overflow-hidden">
                <motion.div
                  variants={{
                    initial: { y: 12, scale: 1.2 },
                    animate: { y: 12, scale: 1.2 },
                    hover: { y: 2, scale: 1.25 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full h-full relative mix-blend-darken"
                >
                  <Image
                    src="/robot-avatar.png"
                    alt="AI Assistant"
                    fill
                    className="object-cover mix-blend-multiply"
                    priority
                  />
                </motion.div>
              </div>

              {/* Status Dot */}
              <div className="absolute top-0 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm z-10"></div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-4 bg-primary text-primary-foreground flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Expert</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs text-primary-foreground/80 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-primary-foreground/80 hover:text-white"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Today</span>
              </div>

              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-auto">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm'
                    }`}>
                    <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-slate-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-200 shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Expert anything..."
                  className="flex-1 bg-slate-100 text-slate-900 placeholder:text-slate-500 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/30"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
