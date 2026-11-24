// Ghostwriting offer for shadoWritesX. Proof figures are the supplied account and client reports.
export const SITE = {
  name: "shadoWritesX",
  tagline: "Ghostwriting for founders who want the right people reading",
  description:
    "Harish writes your X account in your voice. Profile, posts, replies, and a cadence aimed at the readers who can use what you build.",
  bookingUrl: "https://calendly.com/xharish52/30min",
  email: "xharish52@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdharish84/",
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

export const SERVICES = [
  {
    number: "01",
    title: "Posts in your voice",
    body: "I turn what you built, decided, or learned into posts that sound like you. You review every draft before it goes out.",
    includes: ["Proof from your work", "A point of view you actually hold", "A question your readers can answer"],
  },
  {
    number: "02",
    title: "A profile people understand",
    body: "Bio, pinned post, and the first impression. A new visitor should know what you do and why it is worth a follow.",
    includes: ["Bio and pinned post", "Positioning from your experience", "A clearer first impression"],
  },
  {
    number: "03",
    title: "Replies that reach the room",
    body: "I look for conversations your intended readers are already in, then draft replies that are worth adding.",
    includes: ["Relevant conversations", "Replies in your voice", "A schedule you can keep"],
  },
  {
    number: "04",
    title: "A weekly look at what worked",
    body: "We review who responded and which posts started useful conversations, then choose what to repeat.",
    includes: ["What to repeat", "What to change", "One next experiment"],
  },
] as const;

export const PROCESS = [
  {
    title: "Discovery",
    body: "A call about your work, your voice, and the readers you want. I need the real material, not a persona.",
  },
  {
    title: "Voice",
    body: "I study how you already write and talk, then draft a positioning line we can use in the profile and the posts.",
  },
  {
    title: "Drafts",
    body: "You get posts and profile copy to mark up. Nothing publishes until you approve it.",
  },
  {
    title: "Cadence",
    body: "We publish, join conversations, and review the week so the account keeps moving.",
  },
] as const;

export const FOR = [
  "You are building something and want the right readers, users, or clients to find it.",
  "You have work worth talking about and do not have time to write the account yourself.",
  "You want the posts to sound like you, and you will review them.",
  "You are building outside the US and want US readers in the conversation.",
] as const;

export const FAQ = [
  {
    id: "process",
    question: "How does the ghostwriting work?",
    answer:
      "We start with a call about your work and the readers you want. I draft the profile and posts in your voice. You review every piece before it publishes. Then we keep a cadence and look at what actually got a response.",
  },
  {
    id: "voice",
    question: "Will it sound like me?",
    answer:
      "That is the job. I write from how you already talk about your work, and you edit anything that does not. If a line would not come out of your mouth, it does not go out.",
  },
  {
    id: "confidential",
    question: "Is the work confidential?",
    answer:
      "Yes. The account stays yours. I do not announce that I write it, and the client accounts shown on this page stay unnamed.",
  },
  {
    id: "what",
    question: "What do you actually write?",
    answer:
      "The X account: profile, posts, and replies. The work is for founders and builders who want a specific audience, especially US readers, to understand what they are building.",
  },
  {
    id: "results",
    question: "What results should I expect?",
    answer:
      "The numbers on this page are from my own account and from client accounts, for the periods shown. They are not a promise. Your niche, starting point, and how often we publish will change the outcome. I do not guarantee a follower count or revenue.",
  },
  {
    id: "start",
    question: "How do we start?",
    answer:
      "Book a 30-minute call. We will look at your account, who you want reading, and whether I am the right person to write it.",
  },
] as const;
