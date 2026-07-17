export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
}

const baseMembers: TeamMember[] = Array.from({ length: 23 }).map((_, i) => {
  const roles = [
    'Robotics Engineer',
    'AI Researcher',
    'Software Developer',
    'Hardware Specialist',
    'Project Manager',
    'Design Engineer'
  ];
  return {
    id: i + 1,
    name: `Team Member ${i + 2}`,
    role: roles[i % roles.length],
    image: `https://i.pravatar.cc/150?u=gbs-member-${i + 1}`,
    bio: `Detailed biography for Team Member ${i + 2}. They are an expert in their field with years of experience contributing to innovative projects at GBS.`,
    email: `member${i + 2}@gbsteam.com`,
  };
});

export const teamMembers: TeamMember[] = [
  {
    id: 0,
    name: "Krishna Dev Chaudhary",
    role: "Robotics and Coding Instructor",
    image: "https://i.pravatar.cc/150?u=krishna",
    bio: "Krishna Dev Chaudhary is a Robotics and Coding Instructor with over two years of dedicated training experience at academic and freelance levels, plus additional teaching exposure gained during eight years with GBS Team, where he occasionally led training and coaching sessions alongside project development work. He currently teaches robotics and coding at Durshikya Education Network, building on his prior role at Neema Academy and a period of independent freelance instruction. Holding a Master's degree in Computer Science alongside hands-on robotics training in sensors, circuits, drive systems, and robot design, Krishna combines technical depth with a genuine passion for STEM education. Known for translating complex robotics and programming concepts into engaging, learner-friendly instruction, he is committed to inspiring students at the school and college level to explore automation, electronics, and problem-solving through robotics.",
    email: "krishna@gbsteam.com",
  },
  ...baseMembers
];
