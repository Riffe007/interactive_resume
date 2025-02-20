// scripts/generate-ai-resume.ts
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

async function createAIResume() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  const fontSize = 12;
  const margin = 50;
  let y = height - margin;

  const lines = [
    "Timothy Riffe",
    "AI/ML Engineer | Deep Learning | NLP | Cloud Computing",
    "Email: timothy.riffe@unified-software-ai.com | Phone: (661) 809-6450 | LinkedIn: linkedin.com/in/timothyriffe",
    "",
    "------------------------------------------------------------",
    "Professional Summary",
    "------------------------------------------------------------",
    "AI/ML Engineer with 14+ years of experience in machine learning, deep learning, cloud computing, and AI-driven applications.",
    "Extensive expertise in LLMs, NLP, computer vision, reinforcement learning, and AI/ML pipelines.",
    "Adept at deploying and optimizing models in Azure, AWS, GCP, and IBM Cloud environments.",
    "Strong background in MLOps, model deployment, and AI infrastructure scaling.",
    "Passionate about advancing AI applications in enterprise, financial, and defense sectors.",
    "",
    "------------------------------------------------------------",
    "Technical Skills",
    "------------------------------------------------------------",
    "AI & Machine Learning: GPT-4, LLaMA, RAG, BERT, Transformers, Deep Learning, GANs, RL, AutoML",
    "Cloud & DevOps: Azure AI, AWS SageMaker, GCP Vertex AI, Kubernetes, Docker, Terraform",
    "Programming: Python, FastAPI, PyTorch, TensorFlow, SQL, JavaScript, C++",
    "Big Data & Data Engineering: Spark, Databricks, Snowflake, SQL, NoSQL, ETL Pipelines",
    "MLOps & Model Deployment: CI/CD, GitHub Actions, MLflow, Kubeflow, Vertex AI Pipelines",
    "",
    "------------------------------------------------------------",
    "Professional Experience",
    "------------------------------------------------------------",
    "Unified Software Solutions – Bakersfield, CA",
    "CEO & AI/ML Engineer (2021 - Present)",
    "  - Designed LLM-powered AI applications for finance, healthcare, and defense using GPT-4, RAG, and custom embeddings.",
    "  - Developed Azure AI-driven data pipelines for predictive analytics and enterprise AI automation.",
    "  - Led a team to scale AI-driven business intelligence solutions using Databricks & Snowflake.",
    "  - Built AI-enhanced NLP models for document processing and automated financial reporting.",
    "",
    "WorldQuant – Remote",
    "Quantitative Research Consultant (2023 - Present)",
    "  - Developed high-frequency trading AI models with statistical learning and reinforcement learning.",
    "  - Built risk-adjusted investment prediction models utilizing transformers and deep learning architectures.",
    "  - Integrated MLOps workflows on GCP & Azure to streamline model training and deployment.",
    "",
    "Morgan Stanley | Merrill Lynch | JP Morgan – Various Locations",
    "Financial Advisor & AI Strategist (2013 - 2017)",
    "  - Applied AI-driven portfolio optimization techniques for asset allocation & risk mitigation.",
    "  - Led data-driven trading strategy development using QuantConnect & QuantLib.",
    "",
    "------------------------------------------------------------",
    "Education",
    "------------------------------------------------------------",
    "B.S. in Business Administration & Management – University of Phoenix (2017)",
    "",
    "------------------------------------------------------------",
    "Certifications & Licenses",
    "------------------------------------------------------------",
    "AWS Cloud Practitioner & AWS AI Practitioner",
    "",
    "------------------------------------------------------------",
    "Key AI/ML Projects",
    "------------------------------------------------------------",
    "✅ LLM-Powered AI Assistant: Built a RAG-enabled chatbot for enterprise knowledge management & financial insights.",
    "✅ AI-Based Investment Strategy Engine: Designed deep learning models for automated trading & portfolio optimization.",
    "✅ MLOps Pipeline Optimization: Implemented CI/CD-driven ML pipelines for scalable AI applications.",
    "✅ Cloud-Native AI Deployments: Deployed GPT-powered AI apps on Azure Kubernetes Service (AKS) for enterprise clients.",
  ];

  for (const line of lines) {
    const words = line.split(' ');
    let lineText = '';
    const wrappedLines: string[] = [];
    for (const word of words) {
      const testLine = lineText ? `${lineText} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > width - margin * 2) {
        wrappedLines.push(lineText);
        lineText = word;
      } else {
        lineText = testLine;
      }
    }
    wrappedLines.push(lineText);
    for (const wLine of wrappedLines) {
      if (y - fontSize < margin) {
        y = height - margin;
        const newPage = pdfDoc.addPage([595.28, 841.89]);
        newPage.drawText(wLine, { x: margin, y: y, size: fontSize, font, color: rgb(0, 0, 0) });
        y -= fontSize + 5;
      } else {
        page.drawText(wLine, { x: margin, y: y, size: fontSize, font, color: rgb(0, 0, 0) });
        y -= fontSize + 5;
      }
    }
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('AI_Resume.pdf', pdfBytes);
  console.log('AI_Resume.pdf created successfully!');
}

createAIResume().catch((err) => {
  console.error('Error creating AI Resume PDF:', err);
});
