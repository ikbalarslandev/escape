import { Smartphone, Users, Clock, Gift } from "lucide-react";

const faqData = [
  {
    question: "What is Nikapolis?",
    answer:
      "Nikapolis is an outdoor escape game that transforms Istanbul into a living, breathing adventure. It's a mix of an escape room and an interactive city tour. As you play, you'll uncover hidden stories, solve creative puzzles, and explore the city's landmarks in a completely new way.",
  },
  {
    question: "How does it work?",
    answer: `• Choose your route and start the game directly on your smartphone.\n• Follow the storyline: each stop reveals part of Istanbul's history through puzzles and clues.\n• Visit real locations, observe your surroundings, and solve the tasks together.\n• Each correct answer unlocks the next chapter of the story.\n• There's no need to download an app, everything works in your browser.`,
  },
  {
    question: "Who is it for?",
    answer: `Nikapolis is perfect for:\n• Travelers who want to explore Istanbul in a more interactive way.\n• Friends, families, and teams looking for a fun and meaningful group activity.\n• Locals who want to rediscover their city from a new perspective.\n• You can play alone or with a group: it's designed for 1–6 players per team.`,
  },
  {
    question: "How much does it cost?",
    answer:
      "Nikapolis runs on a tip-based system. You decide how much to contribute after playing. We believe great experiences should be accessible to everyone, so there's no fixed ticket price. If you enjoyed the game, you can support our team with a tip to help us create more adventures!",
  },
  {
    question: "How long does the game take?",
    answer:
      "On average, 1.5 to 2 hours – depending on your pace and how long you spend exploring. You can pause anytime, take a coffee break, or stop to take photos before continuing.",
  },
  {
    question: "What do I need to play?",
    answer:
      "You only need a smartphone with internet access. We also recommend bringing a power bank and a pen for notes.",
  },
  {
    question: "What do participants get afterward?",
    answer:
      "After completing the adventure, participants receive a PDF file containing all the information, stories, and discoveries they unlocked during the game.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes, children can join with adults. Some puzzles may be challenging, but there are many moments where kids can help and enjoy exploring the city. We're also developing a special route designed specifically for a younger audience.",
  },
  {
    question: "Can we play at night?",
    answer:
      "You can play anytime, but we recommend daytime for the best experience, because some clues depend on visible details like signs or sculptures.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes, the game takes place entirely outdoors, in public and safe areas. You'll play with your own group, and no interaction with strangers is required.",
  },
  {
    question: "What languages are available?",
    answer: "Currently available in English.",
  },
  {
    question: "What happens if we get stuck?",
    answer:
      "No worries! Nikapolis includes a built-in hint system. If you're stuck, you can ask for a clue. Each puzzle offers multiple hints before revealing the full solution, so you can still enjoy the challenge.",
  },
];

const features = [
  {
    icon: Smartphone,
    title: "No App Needed",
    description: "Play directly in your browser",
  },
  {
    icon: Users,
    title: "1-6 Players",
    description: "Perfect for solo or group adventures",
  },
  {
    icon: Clock,
    title: "1.5-2 Hours",
    description: "Flexible pacing with pause feature",
  },
  {
    icon: Gift,
    title: "Tip-Based",
    description: "Pay what you want after playing",
  },
];

export { faqData, features };
