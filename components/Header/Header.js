import Container from '../Container/Container';
import MainTitle from '../MainTitle/MainTitle';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';
import Image from 'next/image';
//=========================================================================================================================

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Navbar />
				<MainTitle />
				<div className={styles.text}>IT'S A GREAT DAY FOR ICE CREAM!</div>
				<Image src='/icons/logo.png' width={208} height={60} alt='logo' />
			</Container>
		</header>
	)
};

export default Header;