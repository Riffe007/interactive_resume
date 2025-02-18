import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Head from 'next/head';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Uncomment and set this variable once your FastAPI backend is ready
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function ChatPage() {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add the user's message to the conversation
    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setLoading(true);

    try {
      // ---------------------------------------------------------------
      // This section calls the FastAPI endpoint that connects to your
      // fine-tuned Bedrock LLM.
      //
      // When you're ready, uncomment the API_URL variable above and
      // use it here to send a POST request.
      //
      // The payload includes:
      //   - prompt: the user's input (userInput)
      //   - history: the conversation history (messages) for context.
      // ---------------------------------------------------------------
      const res = await fetch(`${/* API_URL */ ''}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, history: messages })
      });
      const data = await res.json();
      const botMessage: Message = { sender: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { sender: 'bot', text: 'Sorry, something went wrong.' };
      setMessages(prev => [...prev, errorMessage]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Chat Assistant</title>
      </Head>
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-semibold">Chat Assistant</h1>
      </header>
      <main className="flex-1 p-4 overflow-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded shadow ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="my-2 flex justify-start">
            <div className="max-w-xs px-4 py-2 rounded shadow bg-white text-gray-900">
              Loading...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>
      <footer className="p-4 bg-gray-200">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-400 rounded"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSend}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
