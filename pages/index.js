import Container from '../components/Container/Container';
import IceCreamHomeBlock from '../components/IceCreamHomeBlock/IceCreamHomeBlock';
import styles from '../styles/Home.module.scss';
//=========================================================================================================================

export default function Home() {
	return (
		<Container>
			<main className={styles.main}>
				<IceCreamHomeBlock />
			</main>

			<footer className={styles.footer}>
				Footer
			</footer>
		</Container>
	)
}
