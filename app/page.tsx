"use client"
import { useEffect, useState } from "react";
import { Profession } from "@/types";
import { useRouter } from "next/navigation"; 
import { getProfessions } from "@/questions";
import ProfessionList from "@/components/ProfressionList";


export default function Home() {
  const [professions, setProfessions] = useState<Profession[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadProfessions() {
      try {
        const data = await getProfessions();
        setProfessions(data);
      } catch (error) {
        console.error('Error loading professions:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProfessions();
  }, []);

  const handleProfessionSelect = (profession: string) => {
    router.push(`/Interview/${profession}`);
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <main className="main">
        <div className="card">
          <h1 className="title">Tech Interview Practice</h1>
          <ProfessionList 
            professions={professions} 
            onSelect={handleProfessionSelect} 
          />
        </div>
      </main>
    </div>
  );
}