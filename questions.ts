"use client"
import { collection, getDocs, query, where} from "firebase/firestore";
import { Profession, QuestionType } from "./types";
import { db } from "./firebaseConfig";

export async function getProfessions(): Promise<Profession[]> {
  const professionsCollection = collection(db, "professions");
  const professionsSnapshot = await getDocs(professionsCollection);
  
  return professionsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      description: data.description
    };
  });
}

function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

export async function getRandomQuestions(profession: string, count: number): Promise<QuestionType[]> {
  try {

    const questionsCollection = collection(db, "questions");
    const q = query(
      questionsCollection,
      where("profession", "==", profession)
    );
    
    const querySnapshot = await getDocs(q);
    
    const questions = querySnapshot.docs.map(doc => {
      const data = doc.data();
      
      return {
        id: doc.id,
        text: data.text,
        options: data.options,
        profession: data.profession,
        topics: data.topics
      };
    });
    
    const shuffledQuestions = shuffleArray(questions); 
    return shuffledQuestions.slice(0, count);
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}