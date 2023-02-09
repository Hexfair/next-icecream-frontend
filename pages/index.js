import Container from '../components/Container/Container';
import IceCreamHomeSlider from '../components/IceCreamHomeSlider/IceCreamHomeSlider';
import styles from '../styles/Home.module.scss';
//=========================================================================================================================

export default function Home() {
	return (
		<Container>
			<div className={styles.sliderBlock}>
				<h2 className={styles.title}>Поднимите себе настроение, закажите мороженое!</h2>
				<p className={styles.subTitle}>мороженое на любой вкус</p>
				<p className={styles.phone}><span>8 (495)</span> 123 1234</p>
				<IceCreamHomeSlider />
			</div>
			<div className={styles.advantageBlock}>
				<h2 className={styles.title}>Наши преимущества</h2>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" style="enable-background:new 0 0 511.999 511.999" xml:space="preserve" width="85" height="85"><path d="M82.232 14.258h-3.753c-.761-7.234-6.896-12.891-14.328-12.891-8.431 0-16.404 6.773-20.068 10.399h-1.627C38.793 8.14 30.82 1.367 22.389 1.367c-7.432 0-13.567 5.657-14.328 12.891H2.768A2.769 2.769 0 0 0 0 17.027v18.335a2.768 2.768 0 0 0 2.768 2.768h3.876v4.967H4.173a2.768 2.768 0 0 0-2.768 2.768v17.443a2.768 2.768 0 0 0 2.768 2.768h2.471v11.739a2.768 2.768 0 0 0 2.768 2.768h21.596v.277a2.768 2.768 0 0 0 2.768 2.768h17.443a2.768 2.768 0 0 0 2.768-2.768v-.277h21.596a2.768 2.768 0 0 0 2.768-2.768V66.076h2.471a2.768 2.768 0 0 0 2.768-2.768V45.866a2.768 2.768 0 0 0-2.768-2.768h-2.469v-4.967h3.876a2.768 2.768 0 0 0 2.768-2.768V17.027a2.765 2.765 0 0 0-2.766-2.769zM64.151 6.905c3.925 0 7.262 2.562 8.429 6.102l-21.83-.103c-.001 0 7.322-5.999 13.401-5.999zM36.547 17.303h11.905v25.796H36.547V17.303zM22.388 6.905c6.149 0 13.708 6.115 13.708 6.115l-22.137-.013c1.166-3.539 4.504-6.102 8.429-6.102zm26.064 71.191H36.547V66.08h11.905v12.016zm29.605-17.553H6.943V48.637h71.115v11.905z" /></svg>
			</div>
			<footer className={styles.footer}>
				Footer
			</footer>
		</Container>
	)
}
