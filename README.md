# 🚀 Interactive Resume & AI Portfolio

## **📌 Project Overview**
The **Interactive Resume & Portfolio Web App** is a modern, AI-powered personal website that showcases **resume details, projects, live data integrations, and AI demos**. Built using **Next.js, Tailwind CSS, AWS Bedrock, and ElevenLabs**, this site offers a **dynamic, interactive experience** rather than a static resume.

**🔹 Live Features:**
- 📝 **Downloadable Resume Versions** (AI/ML, Financial Services, AI Strategist)
- 🎯 **Interactive Resume with Career Timeline & Skill Visualizer**
- 🤖 **AI Chatbot Trained on My Experience** (AWS Bedrock)
- 🎙 **AI Voice Assistant** (Powered by ElevenLabs)
- 📊 **Real-Time GitHub, LinkedIn & Fitness Tracker**
- 🔍 **AI-Powered Project Idea Generator**
- 📩 **Project Submission Form for Potential Collaborators**
- 🌙 **Dark Mode / Light Mode Toggle**

---

## **⚙️ Tech Stack**
### **Frontend**
- **[Next.js 15](https://nextjs.org/)** – React-based framework for performance and scalability
- **[TypeScript](https://www.typescriptlang.org/)** – Strongly typed JavaScript for better maintainability
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling
- **[Framer Motion](https://www.framer.com/motion/)** – Smooth animations and transitions

### **Backend**
- **[AWS Bedrock](https://aws.amazon.com/bedrock/)** – AI model hosting and fine-tuning
- **[AWS SageMaker](https://aws.amazon.com/sagemaker/)** – ML model deployment
- **[Vercel](https://vercel.com/)** – Hosting and CI/CD for Next.js frontend
- **[ElevenLabs](https://elevenlabs.io/)** – AI-powered voice synthesis

### **Database & APIs**
- **[GitHub API](https://docs.github.com/en/rest)** – Fetch real-time commit & repo data
- **[LinkedIn API](https://developer.linkedin.com/)** – (If available) Pull latest LinkedIn activity
- **[Google Fit / Strava API](https://developers.google.com/fit/)** – Real-time fitness progress tracking
- **[MongoDB or PostgreSQL](https://www.mongodb.com/)** – (Optional) Storing user-submitted projects

---

## **📂 Project Structure**

```plaintext
/interactive_resume 
│── /public # Static assets (images, resume PDFs, icons) 
│── /src 
│ ├── /app # Entry point (if using Next.js app router) 
│ ├── /components # Reusable UI components 
│ ├── /pages # Next.js file-based routing 
│ ├── /styles # Global styles (Tailwind) 
│ ├── /utils # Helper functions (API calls, formatters) 
│ ├── /data # Static JSON/Markdown for resume & projects 
│ ├── /api # Server-side API routes 
│ ├── /hooks # Custom React hooks (fetching, state) 
│ ├── /context # Global state management (dark mode, chat history) 
│ ├── /config # API keys, constants, environment settings 
│ ├── /lib # Third-party service integrations (AWS, GitHub) 
│ ├── /middlewares # Security (auth, rate limiting, validation) 
│ ├── /store # Zustand/Redux global state 
│── .env # Environment variables 
│── package.json # Dependencies & scripts 
│── tailwind.config.js # Tailwind config 
│── next.config.js # Next.js settings 
│── README.md # Project documentation

```


---

## **📥 Installation & Setup**
### **Prerequisites**
- Install **[Node.js](https://nodejs.org/)** (16+ recommended)
- Install **[Yarn](https://yarnpkg.com/)** (optional but preferred over npm)
- Clone the repository:
  ```sh
  git clone https://github.com/Riffe007/interactive_resume.git
  cd interactive_resume

### 1️⃣ Install Dependencies

```sh
yarn install
# OR
npm install

```

### 2️⃣ Set Up Environment Variables
# Copy .env.example and create a .env.local file:
```sh
cp .env.example .env.local
```
# Fill in the values:
```ini
NEXT_PUBLIC_GITHUB_API_KEY=your_github_api_key
NEXT_PUBLIC_AWS_BEDROCK_API_KEY=your_aws_api_key
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_elevenlabs_api_key
NEXT_PUBLIC_STRAVA_API_KEY=your_strava_api_key
```
### 3️⃣ Run the Development Server
```sh
yarn dev
# OR
npm run dev
```
### Local URL: http://localhost:3000

### 🚀 Deployment
### 1️⃣ Deploy Frontend to Vercel
```sh
vercel
```
or connect your GitHub repo to Vercel’s automatic deployments.

### **2️⃣ Deploy AI Services (AWS Bedrock + SageMaker)**
- Set up the **AWS Bedrock endpoint** to host the LLM.
- Deploy **AI inference API** via **AWS SageMaker**.

### **3️⃣ Deploy Backend Services (MongoDB/PostgreSQL)**
- If using a database for project submissions, deploy it on **MongoDB Atlas** or **AWS RDS (PostgreSQL)**.

---

## **🎯 Features**

### **📌 1. Interactive Resume**
- 📜 **Career Timeline** – Scroll-based **parallax view** of experience & skills.
- 📊 **Skill Radar Chart** – Real-time visualization of **AI, finance, and tech expertise**.
- 📄 **Downloadable Resume Versions** *(Financial, AI/ML, AI Strategist)*.
- 🔍 **Modals for Work Experience** – Click to expand deeper descriptions.

### **🤖 2. AI Chatbot & Voice Assistant**
- 🧠 **Fine-Tuned LLM Chatbot** – AWS Bedrock-powered chatbot trained on your resume.
- 🎙 **ElevenLabs AI Voice Demo** – Users can interact via **voice-to-text AI**.

### **📈 3. Real-Time Data Integrations**
- 🏆 **GitHub Activity Feed** – Latest commits & contributions.
- 📢 **LinkedIn Posts & Engagement** *(If API access available)*.
- 💪 **Fitness Tracker** – Pulls **real-time workout progress** from **Strava/Google Fit**.

### **📩 4. AI-Powered Project Submission**
- 📝 **Companies & Individuals can submit project ideas**.
- 🔍 **AI-Assisted Filtering** – Helps categorize and rank submissions.

---

## **🛠️ Future Enhancements**
- ✅ **GraphQL API** for better data fetching.
- ✅ **AI Resume Evaluator** – Suggests optimizations.
- ✅ **Blockchain-Based Digital Resume Verification**.
- ✅ **VR Mode** – View resume in a 3D workspace.

---

## **💬 Contributing**
Interested in improving this project? Follow these steps:

1. **Fork the repo** 🍴  
2. **Create a feature branch:**  
   ```sh
   git checkout -b new-feature
## 3. Commit your changes:
```sh
git commit -m "Added new feature"

```
## 4. Push the branch to GitHub:
```sh
git push origin new-feature
```
## Open a Pull Request (PR) 🚀

## **📧 Contact**
👨‍💻 **Created by:** Timothy Riffe  
📩 **Email:** timothy.riffe@unified-software-ai.com  
🔗 **LinkedIn:** [linkedin.com/in/timothy-riffe-570b2631](https://linkedin.com/in/timothy-riffe-570b2631)  
🔗 **GitHub:** [github.com/Riffe007](https://github.com/Riffe007)  
🌐 **Website:** *(Coming soon...)*


# 📜 License
### This project is licensed under the MIT License.


