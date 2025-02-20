// scripts/generate-financial-resume.ts
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

async function createFinancialResume() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();
  const fontSize = 12;
  const margin = 50;
  let y = height - margin;

  // Define the content lines
  const lines = [
    "Timothy Riffe",
    "M&A Financial Advisory | Investment Strategy | AI-Driven Financial Solutions",
    "Email: timothy.riffe@unified-software-ai.com | Phone: (661) 809-6450 | LinkedIn: linkedin.com/in/timothyriffe",
    "",
    "------------------------------------------------------------",
    "Professional Summary",
    "------------------------------------------------------------",
    "Highly skilled M&A Financial Advisor with a strong background in investment banking, corporate finance, and AI-driven financial modeling.",
    "Expertise in mergers & acquisitions, due diligence, risk assessment, and financial structuring.",
    "Adept at leveraging AI, machine learning, and data analytics to drive precision in valuation, deal execution, and investment decision-making.",
    "Proven ability to support corporate acquisitions, private equity investments, and strategic financial planning.",
    "",
    "------------------------------------------------------------",
    "Core Competencies",
    "------------------------------------------------------------",
    "• Mergers & Acquisitions: Deal Structuring, Due Diligence, Synergy Analysis",
    "• Investment Banking & Corporate Finance: Financial Modeling, Capital Markets, Valuation",
    "• AI & Quantitative Finance: Predictive Modeling, Risk Analysis, Algorithmic Trading",
    "• Private Equity & Venture Capital: Deal Sourcing, Portfolio Management, Exit Strategies",
    "• Regulatory & Compliance: SEC, FINRA, AML, Risk Governance",
    "",
    "------------------------------------------------------------",
    "Professional Experience",
    "------------------------------------------------------------",
    "Unified Software Solutions – Bakersfield, CA",
    "M&A Financial Consultant & AI Strategist (2021 - Present)",
    "  - Led M&A deal analysis using AI-driven valuation models and financial risk assessments.",
    "  - Designed automated financial forecasting systems to optimize deal pricing and investment returns.",
    "  - Conducted market and competitive analysis to identify strategic acquisition targets and synergies.",
    "",
    "WorldQuant – Remote",
    "Quantitative Research Consultant (2023 - Present)",
    "  - Developed AI-powered investment models to enhance deal evaluation and risk-adjusted return forecasting.",
    "  - Applied deep learning techniques to assess financial health and market positioning of M&A targets.",
    "",
    "Morgan Stanley | Merrill Lynch | JP Morgan – Various Locations",
    "M&A Financial Advisor & Investment Strategist (2013 - 2017)",
    "  - Managed $35M+ in institutional investments, providing strategic financial advisory for acquisitions and divestitures.",
    "  - Developed custom financial modeling tools to improve investment decision-making processes.",
    "  - Led M&A advisory engagements, identifying high-value acquisition opportunities for corporate clients.",
    "",
    "------------------------------------------------------------",
    "Education",
    "------------------------------------------------------------",
    "B.S. in Business Administration & Management – University of Phoenix (2017)",
    "",
    "------------------------------------------------------------",
    "Certifications & Licenses",
    "------------------------------------------------------------",
    "• FINRA Series 63 & 65 | SIE | Expired Series 7 & 66",
    "• AWS Cloud Practitioner & AWS AI Practitioner",
    "",
    "------------------------------------------------------------",
    "Key M&A Financial Advisory Projects",
    "------------------------------------------------------------",
    "✅ AI-Powered M&A Valuation Model: Built machine learning-based valuation tools to assess acquisition targets with real-time market data.",
    "✅ Automated Due Diligence Framework: Designed AI-driven financial risk assessment models to streamline due diligence processes.",
    "✅ Private Equity Portfolio Optimization: Developed predictive analytics systems to enhance investment selection and exit strategy planning.",
    "✅ Capital Markets Strategy Development: Advised firms on optimal capital structuring for acquisition financing and corporate growth.",
  ];

  // Helper: Draw text with basic wrapping
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
        // Add a new page if we're near the bottom
        y = height - margin;
        const newPage = pdfDoc.addPage([595.28, 841.89]);
        newPage.drawText(wLine, {
          x: margin,
          y: y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
        y -= fontSize + 5;
      } else {
        page.drawText(wLine, {
          x: margin,
          y: y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
        y -= fontSize + 5;
      }
    }
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('Financial_Resume.pdf', pdfBytes);
  console.log('Financial_Resume.pdf created successfully!');
}

createFinancialResume().catch((err) => {
  console.error('Error creating PDF:', err);
});
