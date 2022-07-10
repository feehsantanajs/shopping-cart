import { LinkType } from '../components/LinkType';
import styles from '../styles/home.module.scss';

export default function Home(){
  return (
    <main className={styles.container}>
      <LinkType name="Carrinho valor abaixo de 10 reais" params='cartabove' />
      <LinkType name="Carrinho valor acima de 10 reais" params='cartbelow' />
    </main>
  )
}
