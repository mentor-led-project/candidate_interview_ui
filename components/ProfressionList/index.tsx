import React from 'react';
import { Profession } from '@/types';

interface ProfessionListProps {
  professions: Profession[];
  onSelect: (professionId: string) => void;
}

const ProfessionList: React.FC<ProfessionListProps> = ({ professions, onSelect }) => {
  return (
    <div className="profession-list">
      <h2 className="subtitle">Select a profession:</h2>
      <div className="grid">
        {professions.map((profession) => (
          <button
            key={profession.id}
            className="profession-button"
            onClick={() => onSelect(profession.id)}
          >
            {profession.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfessionList;