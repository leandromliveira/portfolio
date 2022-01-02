import type { NextPage } from 'next';
import { usePortfolio } from '../context/usePortfolio';

import styles from './home.module.scss';

const Home: NextPage = () => {
  const { darkMode } = usePortfolio();
  return (
    <>
      <header>
        <title>Home</title>
      </header>
      <div className={styles.homeContainer}>
        {darkMode ? (
          <img src='./images/manCoding.svg' alt='Homem programando' />
        ) : (
          <img src='./images/manCodingGreen.svg' alt='Homem programando' />
        )}
        <div className={styles.homeContent}>
          <h1>
            <span>EU SOU LEANDRO OLIVEIRA.</span>
            <br />
            PROGRAMADOR WEB
          </h1>
          <br />
          <br />
          <p>
            Sou um programador web em formação, estudo na escola escola de
            programação Trybe, sempre em busca de aprimorar meus conhencimentos
            fiz outros cursos, bootcamps e projetos fora da aula.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
