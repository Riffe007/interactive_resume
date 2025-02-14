// src/pages/resume.tsx
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Resume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile.name);
      // TODO: Integrate AI resume generator (RAG, LLM, AWS Bedrock)
    }
  };

  return (
    <>
      <Head>
        <title>Resume | Timothy Riffe</title>
        <meta name="description" content="Download Timothy Riffe's resume and generate custom AI-tailored resumes." />
      </Head>

      <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg transition-colors">
        <Navbar />
        <main className="container mx-auto px-6 pt-32 pb-12 text-center"> {/* Increased top padding to avoid navbar overlap */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Download My Resume</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Select the version of my resume that best fits your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/downloads/TimothyRiffe_AI_Resume.pdf" download className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
              AI/ML Resume
            </a>
            <a href="/downloads/TimothyRiffe_Financial_Resume.pdf" download className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
              Financial Resume
            </a>
            <a href="/downloads/TimothyRiffe_Consulting_Resume.pdf" download className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition">
              Consulting Resume
            </a>
          </div>

          {/* AI Resume Generator */}
          <div className="mt-16"> {/* Added margin-top for better spacing */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">AI Resume Generator</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Upload a job description, and my AI will tailor my resume for you.</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <label htmlFor="file-upload" className="text-gray-700 dark:text-gray-300">
                Upload Job Description
              </label>
              <input 
                id="file-upload" 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange} 
                className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
              />
              <button 
                onClick={handleUpload} 
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Generate Resume
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
