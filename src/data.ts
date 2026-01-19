export interface Question {
  id: string;
  type: 'text' | 'select' | 'email';
  label: string;
  placeholder?: string;
  options?: string[]; // For select type
}

export const giveawayQuestions: Question[] = [
  {
    id: "snack",
    type: "select",
    label: "What's your go-to healthy match-day snack?",
    options: [
        "Fresh Fruit Slices (e.g., apples, oranges)",
        "Vegetable Sticks and Hummus",
        "Trail Mix (unsalted nuts and seeds)",
        "Popcorn (air-popped, light seasoning)",
        "Whole Wheat Crackers and Cheese",
        "Protein Bar/Energy Balls",
        "Yogurt Parfait",
        "Something else (Please describe briefly)"
    ]
  },
  {
    id: "team",
    type: "text", // Changed to text as the Google Form seems to treat it as Short Answer based on the empty options list in JSON, or we can keep it as select if we are sure of the options. Let's stick to the user's design but ensure the value sent is valid.
    label: "Which team are you rooting for?",
    placeholder: "e.g. Brazil, France..."
  },
  {
    id: "email",
    type: "email",
    label: "Your Email Address",
    placeholder: "Enter your email for victory notifications"
  }
];
