export interface Question {
  id: number;
  text: string;
  options: string[];
  answer: number;
}

export const questions: Question[] = [
  { id: 1, text: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyperlink Text Management Language', 'Home Tool Markup Language'], answer: 0 },
  { id: 2, text: 'Which HTML tag is used to create a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], answer: 1 },
  { id: 3, text: 'Which HTML element is used to display an image?', options: ['<picture>', '<image>', '<img>', '<src>'], answer: 2 },
  { id: 4, text: 'What is TypeScript?', options: ['A database language', 'A superset of JavaScript with static typing', 'A CSS framework', 'An HTML editor'], answer: 1 },
  { id: 5, text: 'Which keyword is commonly used to define a variable that cannot be reassigned in TypeScript?', options: ['var', 'let', 'const', 'static'], answer: 2 },
  { id: 6, text: 'Which TypeScript type represents a value that is either true or false?', options: ['string', 'number', 'boolean', 'binary'], answer: 2 },
  { id: 7, text: 'What is React primarily used for?', options: ['Managing databases', 'Building user interfaces', 'Creating operating systems', 'Designing computer hardware'], answer: 1 },
  { id: 8, text: 'Which syntax is used to create a React component using a function?', options: ['function MyComponent() { return <h1>Hello</h1>; }', 'component MyComponent() {}', 'react MyComponent() {}', 'create MyComponent() {}'], answer: 0 },
  { id: 9, text: 'Which React Hook is commonly used to manage state in a functional component?', options: ['useData()', 'useState()', 'useValue()', 'useComponent()'], answer: 1 },
  { id: 10, text: 'Which language is commonly used together with React to add static typing?', options: ['PHP', 'Python', 'TypeScript', 'SQL'], answer: 2 },
];