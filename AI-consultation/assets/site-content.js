/* Edit this file for routine updates. Dates use YYYY-MM-DD. */
window.SITE_CONTENT = {
  consultant: {
    name: "",
    email: "",
    appointmentUrl: "https://calendar.app.google/r34zb8MHSVuo8jrk6",
    appointmentNote: "You will answer a short survey when making the appointment.",
    term: "",
    officeHours: [
      { day: "Wednesday", detail: "10 AM–12 PM · By appointment", location: "EH 1846" },
      { day: "Thursday", detail: "3–5 PM · By appointment", location: "EH 1846" },
      { day: "Friday", detail: "1–3 PM · No appointment necessary", location: "EH 1846" }
    ]
  },

news: [
  {
    date: "September 22, 2026",
    title: "Marco Trombetti introduces ProofForum for reviewing AI-generated mathematics",
    summary: "ProofForum aims to make checking, correcting, and attributing AI-generated mathematics a public collaborative process. Trombetti cautions that its initial claimed solutions have not all been checked.",
    url: "https://proofsandprompts.com/2026/09/22/proofforum-keeping-ai-generated-mathematics-human/"
  },
  {
    date: "September 21, 2026",
    title: "Independent mathematics advisory group announces its formation",
    summary: "Nine researchers, including Timothy Gowers and Melanie Matchett Wood, will advise AI companies on research and responsible publication. Its initial task concerns OpenAI's reported results; the group's formation does not certify those claims.",
    url: "https://terrytao.wordpress.com/2026/09/21/advisory-group-on-mathematics-and-artificial-intelligence/"
  },
  {
    date: "September 17, 2026",
    title: "David Glickenstein proposes graduate training centered on mathematical judgment",
    summary: "Glickenstein's paper argues that graduate programs should emphasize evaluating mathematical claims, proofs, definitions, and research directions as generative AI changes how mathematics is learned and assessed.",
    url: "https://arxiv.org/abs/2609.21132"
  }
],

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
    {
      speaker: "Gokul Nair",
      date: "September 09, 2026",
      duration: "50 minutes",
      title: "AI consultations: Intro meeting",
      description: "First zoom meeting on AI consultations.",
      url: "https://drive.google.com/file/d/1pdni3oLI4dAQVgAjhLmWs-bD3zoyBcwM/view?usp=drive_link",
      materials: [
      {
        label: "PowerPoint slides",
        url: "https://docs.google.com/presentation/d/1HM8e-ABE_Yt5TZPiNm2zOXEnuOej3aPQvLZtWp2Smfc/edit?usp=sharing"
      }
      ]
    },
    {
      speaker: "Zaher Hani and Gokul Nair",
      date: "Wednesday, September 16, 2026",
      time: "4:00–5:00 PM",
      title: "Student AIM Seminar: An Informal Discussion on the Evolving Role of AI in Mathematics: Perspectives on PDEs and Beyond",
      type: "In-person",
      location: "EH 3088",
      url: "https://lsa.umich.edu/math/news-events/all-events.detail.html/152053-21912770.html"
    },
    {
      speaker: "Ethan Huffman",
      date: "Wednesday, September 23, 2026",
      time: "1:00–2:00 PM",
      title: "Efficient use of AI for research",
      type: "Online/Zoom presentation",
      location: "Online/Zoom",
      url: "https://umich.zoom.us/rec/share/U4qO0kwHhQQhm0aLow7lHrkYylDZBywIMCGMbEnCzNBtIx2dLQYVVG3dNOBiwRsY.lmBSd2OGEavLrFOW",
      materials: [
        {
          label: "Slides",
          url: "https://drive.google.com/file/d/1FOx9DobMn3upDNC7g5Qw_GLitxPo3uda/view?usp=sharing"
        }
      ]
    }
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
