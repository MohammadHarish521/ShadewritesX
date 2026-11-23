// Content adapted from the local thesauce project; purchase and reader flows stay on the source site.
export const SITE = {
  name: "The X Growth Playbook",
  tagline: "Grow a US audience on X, even if you're not in the US",
  description:
    "A practical X playbook for developers and builders outside the US. Clarify your profile, write about your work, and build a routine for reaching relevant US readers. By Harish (@Harish_521).",
  url: "https://thesauce-iota.vercel.app",
} as const;

export const AUTHOR = {
  name: "Harish",
  handle: "Harish_521",
  url: "https://x.com/Harish_521",
  role: "Developer and ghostwriter",
  followers: "12,500+",
} as const;

export const PROOF = {
  audienceFrom: "90% Indian",
  audienceTo: "23% US",
  octoberRevenue: "$2,392",
  octoberRevenueMonth: "Oct 2026",
} as const;

export const CASE_STUDIES = [
  {
    id: "builder-01",
    summary: "One month. 357.4K impressions and 2K new follows.",
    period: "15 Oct – 14 Nov 2026",
    stats: [
      {
        label: "Impressions",
        value: "357.4K",
        note: "↑ 11,663%",
      },
      {
        label: "Engagement rate",
        value: "11.8%",
        note: "↑ 37%",
      },
      {
        label: "Profile visits",
        value: "8.9K",
        note: "↑ 29,513%",
      },
      {
        label: "New follows",
        value: "2K",
        note: "↑ 11,535%",
      },
    ],
  },
  {
    id: "builder-02",
    summary: "One analytics window. Four hard numbers.",
    period: "October 2026",
    stats: [
      { label: "Impressions", value: "504.9K", note: "reported window" },
      { label: "Engagement rate", value: "5.8%", note: "reported window" },
      { label: "Profile visits", value: "7.6K", note: "reported window" },
      { label: "Bookmarks", value: "3.9K", note: "reported window" },
    ],
  },
] as const;

export const FOR = [
  "You build outside the US and want relevant US readers to find your work.",
  "You have projects, lessons, or a skill worth sharing.",
  "You want conversations with potential users, collaborators, or clients.",
  "You can make time to write, reply, and review what happens.",
] as const;

export const NOT_FOR = [
  "You need a guaranteed follower count or income by a deadline.",
  "You want someone else to write and run your account.",
  "Your US audience is already established and your focus is elsewhere.",
  "You cannot make time to put the exercises into practice.",
] as const;

export const CHAPTERS = [
  {
    number: "01",
    title: "Start with the right readers",
    body: "Get specific about who you want to reach, what they care about, and where your account stands today.",
    outcome: "A reader definition and an account baseline.",
  },
  {
    number: "02",
    title: "Give people a reason to follow",
    body: "Connect your bio, pinned post, and project proof so a new visitor can understand what you do.",
    outcome: "A profile checklist and a clearer first impression.",
  },
  {
    number: "03",
    title: "Positioning without pretending",
    body: "Find the overlap between what you know and what your intended readers need. Make your experience easy to understand.",
    outcome: "A positioning statement you can use in your profile and posts.",
  },
  {
    number: "04",
    title: "The 5-post system",
    body: "Give each post a purpose. Turn the work you already do into five useful ways to show up.",
    outcome: "A starting set of post ideas drawn from your own work.",
    posts: [
      {
        name: "Proof",
        body: "Show what you built and the evidence behind it.",
      },
      {
        name: "Point of view",
        body: "Explain a decision or a tradeoff you have experience with.",
      },
      {
        name: "Conversation",
        body: "Ask a specific question your intended readers can help answer.",
      },
      {
        name: "Resources",
        body: "Share a checklist, snippet, or tool that solves a small problem.",
      },
      {
        name: "Education",
        body: "Teach one useful lesson with enough context to try it.",
      },
    ],
  },
  {
    number: "05",
    title: "Make the first line count",
    body: "Lead with a recognizable problem, a concrete detail, or a useful lesson. Study 100 post formats grouped by saves, conversations, and reach, then adapt one to your own work.",
    outcome: "A rewritten post, a 100-format companion, and a prompt for three drafts grounded in your posts and notes.",
  },
  {
    number: "06",
    title: "Replies, timing, distribution",
    body: "Find relevant conversations, contribute something useful, and test a publishing schedule you can maintain.",
    outcome: "A conversation list and a weekly publishing routine.",
  },
  {
    number: "07",
    title: "Read the signals. Adjust the work.",
    body: "Review who responds, which posts bring useful conversations, and what to repeat, change, or stop.",
    outcome: "A weekly review with one clear next experiment.",
  },
  {
    number: "08",
    title: "Put your next 30 days on paper",
    body: "Bring the pieces together: prepare your profile, publish, join conversations, and review each week.",
    outcome: "An adaptable 30-day practice plan.",
  },
] as const;

export const FAQ = [
  {
    id: "refunds",
    question: "What is the refund policy?",
    answer:
      "If the playbook is not useful, email me within 7 days of purchase for a refund. After that, the purchase is non-refundable.",
  },
  {
    id: "format",
    question: "What format do I get?",
    answer:
      "A written digital playbook with eight chapters, worked examples, and exercises. Use it alongside the profile checklist, 30-day practice sheet, and 100-format writing companion. You can try the free example, browse the formats, and download the companion materials before deciding.",
  },
  {
    id: "practice",
    question: "How should I work through it?",
    answer:
      "Start with your intended reader and account baseline, then work through your profile and writing. Each chapter has something to apply to your own account. Use the 30-day plan to schedule the work and the weekly review to decide what to try next.",
  },
  {
    id: "who",
    question: "Who is this actually for?",
    answer:
      "Developers and builders outside the US who want relevant US readers to discover their work. It is most useful when you have projects, experience, or a skill to write about and can make time to put the exercises into practice.",
  },
  {
    id: "us-audience",
    question: "Can I grow a US audience if I am not in the US?",
    answer:
      "You can write for and join conversations with US readers from elsewhere. The playbook focuses on making your work understandable, finding relevant people, and testing your approach. Your niche, starting point, time, and consistency will affect the outcome.",
  },
  {
    id: "results",
    question: "How long until I see results?",
    answer:
      "The 30 days are a practice schedule. They are not a deadline for reaching a follower count or earning money. Start with a baseline, review weekly, and look for progress toward the readers and conversations you actually want.",
  },
] as const;
