import { Foot } from '../components/Foot';
import { LinkType } from '../components/LinkType';
import styles from '../styles/home.module.scss';

export default function Home(){
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <LinkType name="Carrinho valor abaixo de 10 reais" params='cartbelow' />
          <LinkType name="Carrinho valor acima de 10 reais" params='cartabove' />
        </div>
      </main>
      <Foot />
    </>
  )
}
