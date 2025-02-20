// scripts/generate-consulting-resume.ts
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

async function createConsultingResume() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  const fontSize = 12;
  const margin = 50;
  let y = height - margin;

  const lines = [
    "Timothy Riffe",
    "Strategic Management Consultant | AI & Business Transformation Expert",
    "Email: timothy.riffe@unified-software-ai.com | Phone: (661) 809-6450 | LinkedIn: linkedin.com/in/timothyriffe",
    "",
    "------------------------------------------------------------",
    "Professional Summary",
    "------------------------------------------------------------",
    "Results-driven Strategic Management Consultant with extensive experience in business transformation, AI strategy, and financial advisory.",
    "Proven expertise in leveraging AI, machine learning, and automation to optimize operations, drive efficiency, and improve decision-making.",
    "Adept at working with C-suite executives, financial institutions, and government agencies to align corporate strategy, technology, and data-driven insights for sustainable growth.",
    "",
    "------------------------------------------------------------",
    "Core Competencies",
    "------------------------------------------------------------",
    "• Strategic Business Transformation: Digital Strategy, Process Optimization, Change Management",
    "• AI & Emerging Technologies: AI Implementation, Cloud Strategy, Enterprise AI Automation",
    "• Financial & Risk Advisory: Investment Analysis, Risk Management, Quantitative Finance",
    "• Government & Defense Consulting: Federal Contracts, Compliance, DoD AI Applications",
    "• Operational Excellence & Leadership: Executive Advisory, Performance Improvement, Data-Driven Decision Making",
    "",
    "------------------------------------------------------------",
    "Professional Experience",
    "------------------------------------------------------------",
    "Unified Software Solutions – Bakersfield, CA",
    "Founder & Principal Consultant (2021 - Present)",
    "  - Advised Fortune 500 clients, government agencies, and institutional investors on AI-driven strategic transformation.",
    "  - Designed data-driven business frameworks integrating machine learning, predictive analytics, and cloud technologies.",
    "  - Implemented AI-based process automation reducing operational inefficiencies by up to 40%.",
    "  - Developed AI-powered decision support systems for corporate and government clients.",
    "",
    "WorldQuant – Remote",
    "Quantitative Research Consultant (2023 - Present)",
    "  - Built predictive financial models leveraging AI and statistical analysis to enhance investment strategies.",
    "  - Delivered quantitative insights for institutional asset management by applying machine learning and risk modeling.",
    "",
    "Morgan Stanley | Merrill Lynch | JP Morgan – Various Locations",
    "Financial Advisor & Business Consultant (2013 - 2017)",
    "  - Managed $35M+ in investment portfolios, advising institutional investors and high-net-worth clients.",
    "  - Developed risk-adjusted financial strategies by integrating quantitative modeling and AI-driven investment insights.",
    "",
    "U.S. Marine Corps",
    "Sergeant | Leadership & Operations (2003 - 2011)",
    "  - Led strategic operations and high-performance teams, emphasizing risk mitigation and data-driven strategy.",
    "  - Trained and mentored 3,000+ personnel in leadership development and tactical intelligence applications.",
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
    "Key Consulting Projects",
    "------------------------------------------------------------",
    "✅ Enterprise AI Integration: Led AI adoption strategy for businesses, optimizing efficiency through machine learning and automation.",
    "✅ Strategic Digital Transformation: Guided organizations through cloud migration and AI-driven operational improvements.",
    "✅ Financial & Investment Consulting: Provided quantitative risk modeling & AI-powered portfolio optimization strategies.",
    "✅ Government & Defense AI Implementation: Designed AI-powered intelligence frameworks for national security & defense agencies.",
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
  fs.writeFileSync('Consulting_Resume.pdf', pdfBytes);
  console.log('Consulting_Resume.pdf created successfully!');
}

createConsultingResume().catch((err) => {
  console.error('Error creating Consulting Resume PDF:', err);
});
