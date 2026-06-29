# Solana Narrative Pulse 📡

**An AI-Powered Ecosystem Radar & Actionable Idea Generator.**

Solana Narrative Pulse is an autonomous dashboard designed for **builders, founders, and investors** in the Solana ecosystem. It parses developer commits, on-chain transaction volumes, and social mention velocities to identify emerging fortnightly narratives and translate them into concrete product specifications.

---

## 🚀 Key Features

*   **Emerging Narratives Feed:** Filter and drill down into fortnightly trends (AI Swarms, DePIN, SVM AppChains).
*   **Build Specifications:** Each narrative card details **3-5 concrete build ideas** complete with technical stacks, architecture suggestions, and ecosystem tags.
*   **Interactive Narrative Sandbox:** Input your own project concept (e.g. escrow or billing) to calculate its ecosystem alignment score and get structural implementation recommendations.
*   **Live Telemetry Sparklines:** Visualizes active developer commit metrics, on-chain volumes, and social activity.

---

## 🛠️ Architecture & Data Sources

The dashboard leverages structural telemetry from three main pipelines:
1.  **On-Chain Metrics:** Monitors transaction spikes on specific program classes (e.g. Helium, DePIN resource providers).
2.  **Developer Velocity:** Scrapes public GitHub repository commits, stars, and pull requests relating to the Solana/SVM ecosystem.
3.  **Social/Community Sentiment:** Indexes mention velocities across X (Twitter), developer forums, and Discord servers.

---

## 💻 Local Setup & Development

This dashboard is built using **pure vanilla technologies (HTML5, CSS3, ES6 JavaScript)** for maximum execution speed, zero dependency overhead, and instant load times.

To run the application locally:
1.  Clone this repository:
    ```bash
    git clone https://github.com/mircats98gpt/solana-narratives.git
    cd solana-narratives
    ```
2.  Open `index.html` directly in any web browser, or serve it using a lightweight server:
    ```bash
    # Python 3
    python -m http.server 8000
    ```
3.  Open `http://localhost:8000` in your browser.
