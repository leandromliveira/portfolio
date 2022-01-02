import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const HandleToggle = () => {
    setActive(!active);
  };

  return (
    <section
      className={
        active
          ? styles.sidebarContainer
          : `${styles.sidebarContainer} ${styles.deactivate}`
      }
    >
      <div
        className={active ? `${styles.icon} ${styles.iconActive}` : styles.icon}
        onClick={HandleToggle}
      >
        <div className={`${styles.hamburger} ${styles.childOne}`}></div>
        <div className={`${styles.hamburger} ${styles.childTwo}`}></div>
        <div className={`${styles.hamburger} ${styles.childThree}`}></div>
      </div>
      <nav>
        {/* Agenda, aula ao vivo, trybe talks, gabaritos */}
        <Link href='/'>Home</Link>
        <Link href='/about'>Sobre</Link>
        <Link href='/projects'>Projetos</Link>
        <Link href='/contact'>Contato</Link>
      </nav>
    </section>
  );
}
