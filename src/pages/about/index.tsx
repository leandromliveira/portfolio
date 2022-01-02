import {
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { FaBriefcase } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function About() {
  return (
    <>
      <header>
        <title>About</title>
      </header>
      <div className={styles.aboutContainer}>
        <h1>
          SOBRE <span>MIM</span>
        </h1>
        <div className={styles.aboutContent}>
          <div className={styles.firstBlock}>
            <div className={styles.personal}>
              <h2>Informações pessoais</h2>
              <div className={styles.info}>
                <p>Nome:</p>
                <strong>Leandro Magalhães Oliveira</strong>
              </div>
              <div className={styles.info}>
                <p>Telefone:</p>
                <strong>+55 (61) 99816 - 4647</strong>
              </div>
              <div className={styles.info}>
                <p>Email:</p>
                <strong>leandrooliveira35@gmail.com</strong>
              </div>
              <div className={styles.info}>
                <p>Cidade:</p>
                <strong>Brasília, DF</strong>
              </div>
            </div>

            <div className={styles.professional}>
              <h2>Objetivo Profissional</h2>
              <p>
                Estou em transição de carreira para área de tecnologia, estudo
                Desenvolvimento Web na Trybe e todos os dias me encanto com as
                possibilidades que esta area apresenta. Meu objetivo é sempre
                aprender e me aprimorar nos conhecimentos de desenvolvimento de
                software
              </p>
            </div>
          </div>

          <hr />

          <div className={styles.skills}>
            <h2>Habilidades</h2>
            <div>
              <DiHtml5 size='100px' />
              <DiCss3 size='100px' />
              <DiJavascript size='100px' />
              <DiReact size='100px' />
              <DiNodejsSmall size='100px' />
              <DiGithubBadge size='100px' />
            </div>
          </div>

          <hr />

          <h2>Formação</h2>
          <div className={styles.resumeBox}>
            <div className={styles.icon}>
              <FaBriefcase size='30px' />
            </div>
            <div className={styles.formation}>
              <span>2020</span>
              <h5>Desenvolvimento web full stack - Trybe</h5>
              <p>
                O programa conta com mais de 1.500 horas de aulas presenciais e
                online e aborda introdução ao desenvolvimento de software,
                front-end, ciência da computação, engenharia de software,
                metodologias ágeis e habilidades comportamentais.
              </p>
            </div>
          </div>
          <div className={styles.resumeBox}>
            <div className={styles.icon}>
              <FaBriefcase size='30px' />
            </div>
            <div className={styles.formation}>
              <span>2021-2022</span>
              <h5>bootcamp GoStack - rocketSeat</h5>
              <p>
                Curso focado no ecossistema das tecnologias Node.js, ReactJS e
                React Native com carga horária de 160 horas
              </p>
            </div>
          </div>
          <div className={styles.resumeBox}>
            <div className={styles.icon}>
              <FaBriefcase size='30px' />
            </div>
            <div className={styles.formation}>
              <span>2011-2018</span>
              <h5>Graduação em Engenharia Elétrica - UnB</h5>
              <p>
                Curso que desenvolveu a minha capacidade de raciocínio lógico,
                resolver problemas e sempre estar estudando.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
