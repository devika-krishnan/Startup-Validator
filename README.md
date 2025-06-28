# Startup Validator

An AI-powered idea analysis tool that evaluates startup ideas based on feasibility, innovation, market fit, and risk. Get intelligent recommendations, risk mitigation strategies, and a beautifully packaged visual report — all from one input.

**Built with React, Recharts, and LLaMA 3 (via Ollama)**

---

## What It Does

* Breaks down your startup idea's feasibility using metrics like innovation score, demand level, and risk factors
* Suggests a tech stack tailored to your idea’s needs
* Offers actionable recommendations to improve weak areas
* Visualizes the evaluation via interactive Recharts
* Handles API errors gracefully with a fallback UI
* Provides layman-friendly explanations for tech stack choices
* Generates a downloadable PDF report of the analysis
* Displays cost/tech breakdowns via **More Details** buttons
* Allows copying of individual result/info sections to clipboard

---

## MVP Features

* AI-powered evaluation via LLaMA 3 + custom prompt engineering
* Pie chart for Success Probability Breakdown
* Bar and linear charts for Viability Score
* Clean, responsive UI with TailwindCSS
* Custom components: `ResultCard`, `MarketInova`, `Rechart`
* Instant feedback and retry mechanism on API failures

---

## Preview

![image](https://github.com/user-attachments/assets/9e858db3-bba5-4ae1-b398-fc3bbd8c10d4)
![image](https://github.com/user-attachments/assets/c454dcb0-50e8-4247-b5f3-b3a107252de3)

Print preview:
![image](https://github.com/user-attachments/assets/2640e4c4-fe07-409b-ab11-2dc7b88a6c42)

---

## Tech Stack

* Frontend: React, TailwindCSS
* Charts: Recharts
* AI: LLaMA 3 via Ollama
* Routing: React Router
* Build Tool: Vite

---

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/devika-krishnan/Startup-Validator.git
cd Startup-Validator

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Make sure Ollama with LLaMA 3 is running locally
```

---

## Upcoming Features

* Competitor and market analysis
* Idea versioning and chat history

---

## Made by

**Devika Krishnan**

---

