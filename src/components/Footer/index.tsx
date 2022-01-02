import styles from './styles.module.scss';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      Feito com <FaHeart /> por{' '}
      <Link href='https://www.linkedin.com/in/leandromliveira'>
        Leandro Oliveira
      </Link>
      <a href='http://' target='_blank' rel='noopener noreferrer'></a>
    </footer>
  );
}
