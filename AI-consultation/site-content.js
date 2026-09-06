/* Edit this file for routine updates. Dates use YYYY-MM-DD. */
window.SITE_CONTENT = {
  consultant: {
    name: "",
    email: "",
    appointmentUrl: "https://calendar.app.google/r34zb8MHSVuo8jrk6",
    appointmentNote: "You will answer a short survey when making the appointment.",
    term: "",
    officeHours: [
      { day: "Wednesday", detail: "10 AM–12 PM · By appointment (tentative)", location: "EH 1846" },
      { day: "Thursday", detail: "3–5 PM · By appointment (tentative)", location: "EH 1846" },
      { day: "Friday", detail: "1–3 PM · No appointment necessary (tentative)", location: "EH 1846" }
    ]
  },

  news: [],

  events: [
    /* Example:
    {
      date: "2026-10-02",
      time: "2:00–3:00 PM",
      title: "AI coffee hour",
      type: "Coffee hour",
      location: "East Hall · Room 3096",
      description: "Bring a question, example, or recent discovery.",
      url: "https://events.umich.edu/event/..."
    }
    */
  ],

  recordings: [
    /* Example:
    {
      date: "August 28, 2026",
      duration: "52 minutes",
      title: "Getting started with U-M GPT",
      description: "A department walkthrough and Q&A.",
      url: "https://umich.zoom.us/rec/..."
    }
    */
  ],

  resources: [
    { category: "tools", title: "U-M GPT", description: "Access to models such as ChatGPT Sol 5.6, and Claude for faculty.", url: "https://umgpt.umich.edu/" },
    { category: "tools", title: "Google Gemini", description: "Available through the Google suite; switch to your U-M account.", url: "https://gemini.google.com/app" },
    { category: "tools", title: "Codex", description: "Agentic AI assistant from OpenAI.", url: "https://its.umich.edu/computing/ai/codex-gpt-toolkit" },
    { category: "tools", title: "Claude Code", description: "Agentic AI from Anthropic; currently available only to faculty and staff.", url: "https://its.umich.edu/computing/ai/claude-code-gpt-toolkit" },
    { category: "tools", title: "Other U-M AI resources", description: "Additional U-M generative AI information and services.", url: "https://genai.umich.edu/" }
  ],

  umgptAdvantages: [
    "Free",
    "Quotas reset every hour, unlike paid subscriptions' five-hour reset",
    "No weekly limits",
    "Data handling and privacy follow U-M guidelines"
  ],

  umgptDisadvantages: [
    "No internet access, so it cannot search the web",
    "No access to features such as projects or work"
  ],

  paidTools: [
    { vendor: "OpenAI", product: "ChatGPT", free: "Free", eight: "Go", twenty: "Plus", hundred: "Pro 10x", twoHundred: "Pro 20x" },
    { vendor: "Anthropic", product: "Claude", free: "Free", eight: "—", twenty: "Pro", hundred: "Max 10x", twoHundred: "Max 20x" }
  ],

  researcherOptions: [
    { title: "Accelerating scientific discovery with ChatGPT for Academic Researchers", url: "https://openai.com/index/chatgpt-for-academic-researchers/" },
    { title: "Putting Claude in the hands of scientists", url: "https://claude.com/programs/team-plan-for-scientists" }
  ]
};
