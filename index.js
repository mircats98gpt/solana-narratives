const narrativesData = [
    {
        id: "narrative-1",
        title: "Autonomous AI Agent Swarms & On-Chain Wallets",
        category: "AI",
        tag: "hot",
        reward: "$3,500 USDG",
        description: "AI agents are transitioning from stateless chat interfaces to autonomous on-chain actors. These agents require multi-agent coordination, delegated wallet execution, and self-custody logic to manage capital and pay for API services directly on Solana.",
        ideas: [
            {
                title: "SwarmSafe Multisig",
                desc: "A multi-signature wallet wrapper designed for cooperative AI swarms, requiring consensus signatures from separate specialized agent nodes to release project funds.",
                tags: ["Rust", "Anchor", "Access Control"]
            },
            {
                title: "Agent-to-Agent Stream Engine",
                desc: "A micro-payment streaming protocol (utilizing SVM speed) that lets agents stream fractions of USDC to other agents per API query or compute cycle.",
                tags: ["SVM", "Microtransactions", "Solana CLI"]
            },
            {
                title: "Self-Staking Improvement Daemon",
                desc: "An agent contract that stakes a portion of its rewards into Solana LSTs to fund its own continuous model fine-tuning and hosting cycles.",
                tags: ["Staking", "DePIN", "LSTs"]
            }
        ]
    },
    {
        id: "narrative-2",
        title: "DePIN Decentralized Resource Allocation & Dynamic Billing",
        category: "DePIN",
        tag: "emerging",
        reward: "$5,000 USDG",
        description: "Physical infrastructure networks (compute, storage, sensors) are expanding on Solana. They require trustless, low-overhead resource scheduling, proof-of-physical-work verification, and usage-based billing models that scale dynamically.",
        ideas: [
            {
                title: "Helium-Mesh Router Billing",
                desc: "An on-chain subscription engine that manages mesh network connections, enabling real-time micro-billing based on data throughput verified via PDAs.",
                tags: ["Subscription", "PDA Derivation", "Helium"]
            },
            {
                title: "GPU Cluster Escrow Scheduler",
                desc: "A double-sided escrow contract that locks developer funds and releases them to GPU providers once hardware proof-of-work is validated on-chain.",
                tags: ["Escrow", "Rust", "Anchor"]
            },
            {
                title: "DePIN SLA Oracle",
                desc: "An on-chain rate-limiting and performance logger that dynamically penalizes underperforming nodes by slashing their staked collateral.",
                tags: ["SLA", "Slashing", "Oracles"]
            }
        ]
    },
    {
        id: "narrative-3",
        title: "SVM AppChains & High-Performance Execution Infra",
        category: "Infra",
        tag: "stable",
        reward: "$1,000 USDC",
        description: "Projects are seeking dedicated throughput by deploying SVM AppChains or using zk-compression. The main challenge is translating traditional backend patterns (API limits, queuing, order matching) into efficient parallelized account structures.",
        ideas: [
            {
                title: "On-Chain Rate Limiter",
                desc: "An Anchor program that uses sliding-window token bucket state accounts to rate-limit client dApp requests directly on-chain with minimal gas overhead.",
                tags: ["Rate Limiter", "Anchor", "Performance"]
            },
            {
                title: "High-Frequency Order Matcher",
                desc: "A parallelized order book engine that matching transaction orders in-memory across isolated PDA accounts to maximize SVM parallel execution.",
                tags: ["Order Book", "Parallel SVM", "Rust"]
            },
            {
                title: "Solana Job Queue Daemon",
                desc: "A decentralized scheduler that lets projects enqueue background tasks on-chain, rewarding external 'keeper' bots for executing them upon trigger conditions.",
                tags: ["Scheduler", "Keeper Bots", "Anchor"]
            }
        ]
    }
];

// Initialize Dashboard
document.addEventListener("DOMContentLoaded", () => {
    renderNarratives(narrativesData);
});

// Render Narrative Cards
function renderNarratives(data) {
    const grid = document.getElementById("narrative-grid");
    grid.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "narrative-card";
        card.id = item.id;
        card.onclick = () => toggleCard(item.id);

        let tagClass = "tag-hot";
        if (item.tag === "emerging") tagClass = "tag-emerging";
        if (item.tag === "stable") tagClass = "tag-stable";

        // Generate Ideas HTML
        const ideasHTML = item.ideas.map(idea => `
            <div class="idea-card">
                <div class="idea-title">${idea.title}</div>
                <div class="idea-desc">${idea.desc}</div>
                <div class="idea-features">
                    ${idea.tags.map(t => `<span class="feat-badge">${t}</span>`).join("")}
                </div>
            </div>
        `).join("");

        card.innerHTML = `
            <div class="card-header-row">
                <div class="card-meta">
                    <span class="tag ${tagClass}">${item.tag.toUpperCase()}</span>
                    <span class="card-category">${item.category} Category</span>
                </div>
                <div class="card-reward">${item.reward} Pool</div>
            </div>
            <h4>${item.title}</h4>
            <p class="card-desc">${item.description}</p>
            
            <div class="ideas-panel">
                <div class="ideas-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    <span>Actionable Build Recommendations</span>
                </div>
                <div class="ideas-grid">
                    ${ideasHTML}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Toggle Card Expansion
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle("expanded");
}

// Category Filter
function filterCategory(category) {
    // Update active tab button styling
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "all") {
        renderNarratives(narrativesData);
    } else {
        const filtered = narrativesData.filter(item => item.category === category);
        renderNarratives(filtered);
    }
}

// Interactive Sandbox Analysis Logic (Rule-based AI simulator)
function analyzeIdea() {
    const input = document.getElementById("sandbox-input").value.trim();
    const resultDiv = document.getElementById("sandbox-result");

    if (!input) {
        resultDiv.innerHTML = `<div class="placeholder-result"><p style="color: #ff5555;">Please enter a concept first.</p></div>`;
        return;
    }

    resultDiv.innerHTML = `<div class="placeholder-result"><p>Analyzing signal alignment...</p></div>`;

    setTimeout(() => {
        let score = 50;
        let alignment = "Moderate";
        let feedback = "";
        let primaryCategory = "General";

        const lower = input.toLowerCase();

        // Check keyword matches
        if (lower.includes("agent") || lower.includes("swarm") || lower.includes("llm") || lower.includes("ai")) {
            score += 35;
            primaryCategory = "AI & Autonomous Agents";
            feedback = "High alignment with Narrative 1. The concept exploits Solana's fast transaction finality and micro-pennies fee structure to enable agent-to-agent autonomous execution. Storing swarmed configurations in PDAs is recommended.";
        } else if (lower.includes("depin") || lower.includes("gpu") || lower.includes("storage") || lower.includes("billing") || lower.includes("subscription")) {
            score += 30;
            primaryCategory = "DePIN Resource Allocation";
            feedback = "High alignment with Narrative 2. Usage-based dynamic billing requires low state overhead. Your concept can be implemented as an Anchor program holding escrow states for physical contributors.";
        } else if (lower.includes("rate limit") || lower.includes("limiter") || lower.includes("queue") || lower.includes("escrow") || lower.includes("lock")) {
            score += 25;
            primaryCategory = "SVM Infrastructure & Patterns";
            feedback = "Good alignment with Narrative 3. Adapting common Web2 server components (like sliding-window rate limiters) to Solana's Account Model provides highly reusable infrastructure for other dApp developers.";
        } else {
            score = 65;
            feedback = "General ecosystem alignment. The concept is viable but may not directly target a high-velocity fortnightly narrative category. Focus on outlining its Solana account mapping clearly in the proposal.";
        }

        if (score > 80) alignment = "Excellent (Hot)";
        else if (score > 70) alignment = "Strong (Emerging)";

        resultDiv.innerHTML = `
            <div class="result-card">
                <div class="score-row">
                    <span>Ecosystem Category: <strong>${primaryCategory}</strong></span>
                    <span class="score-badge">${score}/100</span>
                </div>
                <h4>Narrative Alignment: ${alignment}</h4>
                <p class="result-feedback">${feedback}</p>
            </div>
        `;
    }, 800);
}
