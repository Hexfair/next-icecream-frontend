import styles from './Navbar.module.scss';
//=========================================================================================================================

const menuLinks = ['Главная', 'Продукты', 'Услуги', 'Контакты'];

//=========================================================================================================================
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.list}>
				{menuLinks.map(link =>
					<li key={link} className={styles.link}>{link}</li>
				)}
			</ul>


		</nav>
	)
};

export default Navbar;