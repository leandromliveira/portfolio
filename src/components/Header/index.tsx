import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa';

import { portfolioContext } from '../../context/portfolioContext';

import styles from './styles.module.scss';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(portfolioContext);
  let storage = true;

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      storage = true;
    } else {
      storage = false;
    }
    if (!storage) {
      setDarkMode(storage);
    }
  }, []);

  useEffect(() => {
    if (!darkMode) {
      document.querySelector(':root')?.classList.add('active');
    } else {
      document.querySelector(':root')?.classList.remove('active');
    }
  }, [darkMode]);

  function handleClick() {
    if (darkMode) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }

    setDarkMode(!darkMode);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {darkMode ? (
          <img src='./images/Leandro.svg' alt='Leandro oliveira' />
        ) : (
          <img src='./images/LeandroGreen.svg' alt='Leandro oliveira' />
        )}

        <div className={styles.navContent}>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>Sobre</Link>
            <Link href='/projects'>Projetos</Link>
            <Link href='/contact'>Contato</Link>
          </nav>
          <button type='button' onClick={handleClick}>
            {darkMode ? (
              <FaRegLightbulb size='30px' />
            ) : (
              <FaRegMoon size='30px' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
