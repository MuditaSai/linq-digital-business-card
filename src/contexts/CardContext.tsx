'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CardData } from '@/types/card';

interface CardContextType {
  cardData: CardData;
  updateCardData: (
    field: keyof CardData,
    value: string | CardData['customLinks']
  ) => void;
  resetCardData: () => void;
}

const defaultCardData: CardData = {
  name: '',
  profileImage: '',
  jobTitle: '',
  company: '',
  bio: '',
  phone: '',
  email: '',
  website: '',
  location: '',
  linkedin: '',
  github: '',
  twitter: '',
  instagram: '',
  calendarLink: '',
  customLinks: [],
  templateId: 'default',
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cardData, setCardData] = useState<CardData>(defaultCardData);

  const updateCardData = (
    field: keyof CardData,
    value: string | CardData['customLinks']
  ) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetCardData = () => {
    setCardData(defaultCardData);
  };

  return (
    <CardContext.Provider value={{ cardData, updateCardData, resetCardData }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
}
