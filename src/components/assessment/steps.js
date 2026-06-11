export const stepTitles = [
  'Skill Level',
  'Learning Goals',
  'Interests',
  'Study Hours',
  'Learning Style',
]

export const stepContent = {
  1: {
    title: 'Where are you starting?',
    description:
      "We'll calibrate your initial curriculum based on your current comfort level.",
    options: [
      {
        value: 'beginner',
        icon: 'child_care',
        title: 'Beginner',
        description: "I'm just starting out and need the fundamentals.",
      },
      {
        value: 'intermediate',
        icon: 'hiking',
        title: 'Intermediate',
        description: 'I know the basics and want to deepen my knowledge.',
      },
      {
        value: 'expert',
        icon: 'rocket_launch',
        title: 'Expert',
        description: "I'm experienced and looking for advanced challenges.",
      },
    ],
  },
  2: {
    title: "What's your primary goal?",
    description: 'This helps us focus your learning path on what matters most.',
    options: [
      {
        value: 'career',
        icon: 'work',
        title: 'Career Switch',
        description: 'I want to transition into a new role or industry.',
      },
      {
        value: 'skillup',
        icon: 'trending_up',
        title: 'Skill Up',
        description: 'I want to get better at my current job.',
      },
      {
        value: 'hobby',
        icon: 'palette',
        title: 'Hobby / Interest',
        description: "I'm learning for fun and personal growth.",
      },
      {
        value: 'academic',
        icon: 'school',
        title: 'Academic Support',
        description: 'I need help with my formal studies.',
      },
    ],
  },
  3: {
    title: 'What topics interest you?',
    description: 'Select up to 3 core areas to shape your initial curriculum.',
    options: [
      { value: 'tech', icon: 'terminal', title: 'Technology' },
      { value: 'design', icon: 'brush', title: 'Design' },
      { value: 'business', icon: 'storefront', title: 'Business' },
      { value: 'science', icon: 'science', title: 'Science' },
      { value: 'humanities', icon: 'menu_book', title: 'Humanities' },
      { value: 'languages', icon: 'language', title: 'Languages' },
    ],
  },
  4: {
    title: 'How much time can you commit?',
    description: 'Consistency is key. Be realistic about your daily availability.',
    options: [
      {
        value: 'casual',
        icon: 'local_cafe',
        title: 'Casual',
        description: '15-30 mins / day',
      },
      {
        value: 'regular',
        icon: 'menu_book',
        title: 'Regular',
        description: '1-2 hours / day',
      },
      {
        value: 'intensive',
        icon: 'local_fire_department',
        title: 'Intensive',
        description: '3+ hours / day',
      },
    ],
  },
  5: {
    title: 'How do you learn best?',
    description: "We'll tailor the content formats to match your preference.",
    options: [
      {
        value: 'visual',
        icon: 'visibility',
        title: 'Visual',
        description: 'Videos, diagrams, and infographics.',
      },
      {
        value: 'practical',
        icon: 'construction',
        title: 'Practical',
        description: 'Interactive exercises and projects.',
      },
      {
        value: 'reading',
        icon: 'article',
        title: 'Reading',
        description: 'Articles, documentation, and text.',
      },
    ],
  },
}
