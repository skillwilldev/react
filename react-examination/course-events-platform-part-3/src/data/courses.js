const courses = [
  {
    id: 1,
    title: "React from Scratch to Junior",
    category: "Frontend",
    type: "course",
    level: "Beginner",
    duration: "8 weeks",
    price: 250,
    instructor: "Nino Kvaratskhelia",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    description:
      "Practical React course: components, hooks, routing, and state management.",
  },
  {
    id: 2,
    title: "TypeScript for Production",
    category: "Frontend",
    type: "course",
    level: "Intermediate",
    duration: "6 weeks",
    price: 220,
    instructor: "Giorgi Maisuradze",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
    description:
      "Strict typing, generics, and integrating TypeScript into real-world projects.",
  },
  {
    id: 3,
    title: "Node.js and Express API",
    category: "Backend",
    type: "course",
    level: "Intermediate",
    duration: "10 weeks",
    price: 300,
    instructor: "Luka Beridze",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    description:
      "Building REST APIs, working with databases, and authentication.",
  },
  {
    id: 4,
    title: "Hackathon: Frontend Battle",
    category: "Frontend",
    type: "event",
    level: "All levels",
    duration: "2 days",
    price: 0,
    instructor: "Skillwill Club",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    description:
      "One-day competitive event: teams build a prototype in 24 hours.",
  },
  {
    id: 5,
    title: "UI/UX Design Basics",
    category: "Design",
    type: "course",
    level: "Beginner",
    duration: "5 weeks",
    price: 180,
    instructor: "Mariam Tsuladze",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    description:
      "Fundamentals of user interface, Figma, and UI/UX research principles.",
  },
  {
    id: 6,
    title: "Meetup: State Management in 2026",
    category: "Frontend",
    type: "event",
    level: "All levels",
    duration: "3 hours",
    price: 0,
    instructor: "React Georgia Community",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
    description:
      "Open discussion meetup: Redux Toolkit, Zustand, and server-side state.",
  },
  {
    id: 7,
    title: "Python for Data Analytics",
    category: "Data",
    type: "course",
    level: "Beginner",
    duration: "8 weeks",
    price: 240,
    instructor: "Ana Khutsishvili",
    image:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&q=80",
    description:
      "Pandas, NumPy, and data visualization on real-world datasets.",
  },
  {
    id: 8,
    title: "DevOps Essentials",
    category: "Backend",
    type: "course",
    level: "Advanced",
    duration: "12 weeks",
    price: 350,
    instructor: "Davit Tsintsadze",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&q=80",
    description:
      "Docker, CI/CD pipelines, and cloud infrastructure fundamentals.",
  },
];

export function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(courses), 600);
  });
}

export default courses;
