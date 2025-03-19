import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDksi6vGb0mZO-uehg47t27H7HSpCxr5r4",
  authDomain: "candidate-interview-170c9.firebaseapp.com",
  projectId: "candidate-interview-170c9",
  storageBucket: "candidate-interview-170c9.firebasestorage.app",
  messagingSenderId: "322062043419",
  appId: "1:322062043419:web:18adccc312323c0a292bbe",
  measurementId: "G-8Z2XL7H8WX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addProfessions() {
  const professions = [
    { id: "frontend", name: "Frontend Engineer", description: "Specializes in client-side web development" },
    { id: "backend", name: "Backend Engineer", description: "Focuses on server-side application logic" },
    { id: "devops", name: "DevOps Engineer", description: "Manages infrastructure and deployment pipelines" },
    { id: "qa", name: "QA Engineer", description: "Ensures software quality through testing and automation" }
  ];

  for (const profession of professions) {
    await setDoc(doc(db, "professions", profession.id), {
      name: profession.name,
      description: profession.description
    });
    console.log(`Added profession: ${profession.name}`);
  }
}

async function addQuestions() {
  const questions = [
    // Frontend Questions
    {
      id: "frontend-1",
      text: "What is the virtual DOM in React and why is it important?",
      options: [
        { id: "a", text: "A lightweight copy of the actual DOM for faster updates", isCorrect: true },
        { id: "b", text: "A special DOM for mobile applications", isCorrect: false },
        { id: "c", text: "The Document Object Model API", isCorrect: false },
        { id: "d", text: "A rendering engine for JavaScript", isCorrect: false }
      ],
      profession: "frontend",
      topics: ["react"]
    },
    {
      id: "frontend-2",
      text: "Which hook would you use for side effects in React?",
      options: [
       
        { id: "a", text: "useState", isCorrect: false },
        { id: "b", text: "useContext", isCorrect: false },
        { id: "c", text: "useEffect", isCorrect: true },
        { id: "d", text: "useReducer", isCorrect: false }
      ],
      profession: "frontend",
      topics: ["react", "javascript"]
    },
    {
      id: "frontend-3",
      text: "What does the 'use client' directive do in Next.js 13+?",
      options: [
       
        { id: "a", text: "Enables access to browser APIs", isCorrect: false },
        { id: "b", text: "Marks a component to run on the client-side", isCorrect: true },
        { id: "c", text: "Optimizes the component for mobile clients", isCorrect: false },
        { id: "d", text: "Creates a client-side data store", isCorrect: false }
      ],
      profession: "frontend",
      topics: ["nextjs"]
    },
    {
      id: "frontend-4",
      text: "What is the correct way to define a typed prop in TypeScript with React?",
      options: [
       
        { id: "a", text: "function Component(@type props: {name: string}) {...}", isCorrect: false },
        { id: "b", text: "function Component(props) with string name {...}", isCorrect: false },
        { id: "c", text: "function Component<string>(props) {...}", isCorrect: false },
        { id: "d", text: "function Component(props: {name: string}) {...}", isCorrect: true },
      ],
      profession: "frontend",
      topics: ["typescript", "react"]
    },
    {
      id: "frontend-5",
      text: "What does the 'async' keyword do in JavaScript?",
      options: [
        { id: "a", text: "Makes a function return a Promise", isCorrect: true },
        { id: "b", text: "Runs the function in a separate thread", isCorrect: false },
        { id: "c", text: "Makes the function execute after all other code", isCorrect: false },
        { id: "d", text: "Automatically caches the function's result", isCorrect: false }
      ],
      profession: "frontend",
      topics: ["javascript"]
    },
    
    // Backend Questions
    {
      id: "backend-1",
      text: "What is the purpose of middleware in Express.js?",
      options: [
        { id: "a", text: "To process requests before they reach route handlers", isCorrect: true },
        { id: "b", text: "To connect to multiple databases simultaneously", isCorrect: false },
        { id: "c", text: "To implement WebSocket connections", isCorrect: false },
        { id: "d", text: "To compile Node.js code to machine code", isCorrect: false }
      ],
      profession: "backend",
      topics: ["nodejs", "express"]
    },
    {
      id: "backend-2",
      text: "Which database is NOT a NoSQL database?",
      options: [
      
        { id: "a", text: "MongoDB", isCorrect: false },
        { id: "b", text: "Cassandra", isCorrect: false },
        { id: "c", text: "Redis", isCorrect: false },
        { id: "d", text: "PostgreSQL", isCorrect: true },
      ],
      profession: "backend",
      topics: ["databases"]
    },
    {
      id: "backend-3",
      text: "What is the main purpose of an API Gateway?",
      options: [
       
        { id: "a", text: "To store API documentation", isCorrect: false },
        { id: "b", text: "To compile API code to machine language", isCorrect: false },
        { id: "c", text: "To route requests to appropriate microservices", isCorrect: true },
        { id: "d", text: "To convert REST APIs to GraphQL", isCorrect: false }
      ],
      profession: "backend",
      topics: ["architecture", "api"]
    },
    {
      id: "backend-4",
      text: "What is the primary purpose of a transaction in a database?",
      options: [
       
        { id: "a", text: "To speed up query execution", isCorrect: false },
        { id: "b", text: "To encrypt sensitive data", isCorrect: false },
        { id: "c", text: "To compress database tables", isCorrect: false },
        { id: "d", text: "To ensure data integrity by grouping operations", isCorrect: true },
      ],
      profession: "backend",
      topics: ["databases"]
    },
    {
      id: "backend-5",
      text: "What is the difference between authentication and authorization?",
      options: [
      
        { id: "a", text: "Authentication is for APIs, authorization is for web pages", isCorrect: false },
        { id: "b", text: "Authentication verifies identity, authorization checks permissions", isCorrect: true },
        { id: "c", text: "Authentication is automatic, authorization is manual", isCorrect: false },
        { id: "d", text: "They are different terms for the same concept", isCorrect: false }
      ],
      profession: "backend",
      topics: ["security"]
    },
    
    // DevOps Questions
    {
      id: "devops-1",
      text: "What is the purpose of Docker?",
      options: [
       
        { id: "a", text: "To monitor application performance", isCorrect: false },
        { id: "b", text: "To package applications and dependencies into containers", isCorrect: true },
        { id: "c", text: "To automate database migrations", isCorrect: false },
        { id: "d", text: "To test security vulnerabilities", isCorrect: false }
      ],
      profession: "devops",
      topics: ["containers", "docker"]
    },
    {
      id: "devops-2",
      text: "Which CI/CD tool is developed by Atlassian?",
      options: [
       
        { id: "a", text: "Jenkins", isCorrect: false },
        { id: "b", text: "Travis CI", isCorrect: false },
        { id: "c", text: "Bamboo", isCorrect: true },
        { id: "d", text: "CircleCI", isCorrect: false }
      ],
      profession: "devops",
      topics: ["ci-cd"]
    },
    {
      id: "devops-3",
      text: "What is Infrastructure as Code (IaC)?",
      options: [
       
        { id: "a", text: "Writing code that runs on infrastructure", isCorrect: false },
        { id: "b", text: "Coding directly on production servers", isCorrect: false },
        { id: "c", text: "Converting infrastructure diagrams to code", isCorrect: false },
        { id: "d", text: "Managing infrastructure through machine-readable definition files", isCorrect: true },
      ],
      profession: "devops",
      topics: ["infrastructure", "automation"]
    },
    {
      id: "devops-4",
      text: "What is the purpose of Kubernetes?",
      options: [
     
        { id: "a", text: "Source code version control", isCorrect: false },
        { id: "b", text: "Container orchestration and cluster management", isCorrect: true },
        { id: "c", text: "Database replication", isCorrect: false },
        { id: "d", text: "Network security monitoring", isCorrect: false }
      ],
      profession: "devops",
      topics: ["kubernetes", "containers"]
    },
    {
      id: "devops-5",
      text: "What is the purpose of a load balancer?",
      options: [
        { id: "a", text: "To distribute network traffic across multiple servers", isCorrect: true },
        { id: "b", text: "To balance CPU usage within a single server", isCorrect: false },
        { id: "c", text: "To balance database read/write operations", isCorrect: false },
        { id: "d", text: "To ensure equal storage usage across disks", isCorrect: false }
      ],
      profession: "devops",
      topics: ["networking", "infrastructure"]
    },
    
    // QA Questions
    {
      id: "qa-1",
      text: "What is the purpose of Jest in testing?",
      options: [
      
        { id: "a", text: "It's a load testing tool", isCorrect: false },
        { id: "b", text: "It's a database mocking library", isCorrect: false },
        { id: "c", text: "It's a JavaScript testing framework", isCorrect: true },
        { id: "d", text: "It's a test case management system", isCorrect: false }
      ],
      profession: "qa",
      topics: ["testing", "javascript"]
    },
    {
      id: "qa-2",
      text: "What is the main difference between unit tests and integration tests?",
      options: [
        { id: "a", text: "Unit tests focus on isolated components while integration tests check interactions", isCorrect: true },
        { id: "b", text: "Unit tests run on the server while integration tests run in the browser", isCorrect: false },
        { id: "c", text: "Unit tests are manual while integration tests are automated", isCorrect: false },
        { id: "d", text: "Unit tests are for backend code while integration tests are for frontend", isCorrect: false }
      ],
      profession: "qa",
      topics: ["testing"]
    },
    {
      id: "qa-3",
      text: "What does TDD stand for?",
      options: [
      
        { id: "a", text: "Type Definition Document", isCorrect: false },
        { id: "b", text: "Technical Design Document", isCorrect: false },
        { id: "c", text: "Test-Driven Development", isCorrect: true },
        { id: "d", text: "Total Defect Detection", isCorrect: false }
      ],
      profession: "qa",
      topics: ["methodology", "testing"]
    },
    {
      id: "qa-4",
      text: "What is a regression test?",
      options: [
   
        { id: "a", text: "Testing how the system performs under load", isCorrect: false },
        { id: "b", text: "Testing the UI/UX of an application", isCorrect: false },
        { id: "c", text: "Testing the API endpoints of an application", isCorrect: false },
        { id: "d", text: "Testing to ensure new code doesn't break existing functionality", isCorrect: true },
      ],
      profession: "qa",
      topics: ["testing"]
    },
    {
      id: "qa-5",
      text: "What is the purpose of Selenium?",
      options: [
     
        { id: "a", text: "Performance testing", isCorrect: false },
        { id: "b", text: "Automated browser testing", isCorrect: true },
        { id: "c", text: "API testing", isCorrect: false },
        { id: "d", text: "Unit testing", isCorrect: false }
      ],
      profession: "qa",
      topics: ["testing", "automation"]
    }
  ];

  for (const question of questions) {
    await setDoc(doc(db, "questions", question.id), {
      text: question.text,
      options: question.options,
      profession: question.profession,
      topics: question.topics
    });
    console.log(`Added question: ${question.id}`);
  }
}

async function seedDatabase() {
  try {
    await addProfessions();
    await addQuestions();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
export { db };