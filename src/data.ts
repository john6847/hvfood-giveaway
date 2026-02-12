export interface Question {
  id: string;
  type: 'text' | 'select' | 'email' | 'textarea';
  label: string;
  placeholder?: string;
  options?: string[]; // For select type
}

export const giveawayQuestions: Question[] = [
  {
    id: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email address"
  },
  {
    id: "phone",
    type: "text",
    label: "Phone Number",
    placeholder: "e.g. (555) 555-5555"
  },
  {
    id: "city",
    type: "text",
    label: "What City are you located in?",
    placeholder: "e.g. New York, NY"
  },
  {
    id: "products",
    type: "textarea",
    label: "Name Four of Our Products",
    placeholder: "List four products..."
  },
  {
    id: "wanted_products",
    type: "textarea",
    label: "What products do you want to see from us?",
    placeholder: "Tell us what you'd like to see..."
  },
  {
    id: "team",
    type: "text", 
    label: "Which team are you rooting for?",
    placeholder: "e.g. Brazil, France..."
  }
];
