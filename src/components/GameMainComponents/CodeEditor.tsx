import React, { useState, ChangeEvent } from 'react';
import styles from '@/styles/GameMainStyles/CodeEditor.module.css';

export default function Home() {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  return (
    <div className={styles.CodeEditor}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
