import React, { useState } from 'react';
import Header from '@/components/GameMainComponents/Header';
import Container from '@/components/GameMainComponents/Container';
import Footer from '@/components/GameMainComponents/Footer';
import styles from '@/styles/GameMainStyles/GameMain.module.css';
import TurnContext from '@/context/TurnContext';

export default function Home() {
  const [nowTurn, setNowTurn] = useState<number>(1);

  return (
    <TurnContext.Provider value={{ nowTurn, setNowTurn }}>
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    </TurnContext.Provider>
  );
}
