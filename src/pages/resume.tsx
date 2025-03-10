import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Resume() {
  // Backend API base URL (supports both local & production)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [generatedPdfUrl, setGeneratedPdfUrl] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
    setGeneratedMessage("");
    setGeneratedPdfUrl(null);
  };

  // Upload file & generate resume
  const handleUpload = async () => {
    if (!selectedFile) {
      setGeneratedMessage("❌ Please select a file before generating a resume.");
      return;
    }

    setIsUploading(true);
    setGeneratedMessage("");
    setGeneratedPdfUrl(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to generate resume (Status: ${response.status})`);
      }

      const data = await response.json();
      setGeneratedMessage("✅ Your tailored resume has been generated and is ready for download.");
      setGeneratedPdfUrl(`${API_BASE_URL}/download/${data.resume_id}`);
    } catch (error) {
      console.error("🔥 Upload error:", error);
      setGeneratedMessage("❌ Failed to generate resume. Please try again.");
    } finally {
      setIsUploading(false);
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

        <main className="container mx-auto px-6 py-24 text-center relative">
          {/* Background video */}
          <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0">
            <source src="/videos/financial_analyst.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Download My Resume</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Select the version of my resume that best fits your needs.
            </p>

            {/* Predefined Resume Downloads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a href="/downloads/AI_ML_Resume.pdf" download className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                AI/ML Resume
              </a>
              <a href="/downloads/Finance_Resume.pdf" download className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
                Financial Resume
              </a>
              <a href="/downloads/Consulting_Resume.pdf" download className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition">
                Consulting Resume
              </a>
            </div>

            {/* AI Resume Generator Section */}
            <section className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">AI Resume Generator</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Upload a job description and let my AI tailor a resume for you.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <label htmlFor="file-upload" className="sr-only">Upload Job Description</label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
                  title="Upload Job Description"
                />
                <button
                  onClick={handleUpload}
                  disabled={isUploading || !selectedFile}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isUploading ? "Uploading..." : "Generate Resume"}
                </button>
              </div>

              {/* Upload Status Messages */}
              {generatedMessage && <p className="mt-4 text-green-600 font-semibold">{generatedMessage}</p>}

              {/* Download Button for Generated Resume */}
              {generatedPdfUrl && (
                <div className="mt-4">
                  <a href={generatedPdfUrl} download className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
                    Download Tailored Resume
                  </a>
                </div>
              )}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
