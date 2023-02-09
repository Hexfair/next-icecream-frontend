import Image from 'next/image';
import styles from './IceCreamHomeItem.module.scss';
//=========================================================================================================================

const IceCreamHomeItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.image}>
				<Image src="/images/header.jpg" alt="IceCream Picture" width={220} height={220} />
			</div>
			<a href='#' className={styles.icecreamName}>Berry Strawberry</a>
			<p className={styles.icecreamDescription}>Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes			ascetur ridiculus mus.</p>
			<hr className={styles.line} />
			<button className={styles.readMore}>Read More</button>
		</div>
	)
}
export default IceCreamHomeItem