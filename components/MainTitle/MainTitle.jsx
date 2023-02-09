import styles from './MainTitle.module.scss';
import cn from 'classnames';
//=========================================================================================================================

const MainTitle = ({ color = '' }) => {
	return (
		<h1 className={cn(`${styles.title}`, `${color === 'grey' && styles.grey}`)}>Ice cream</h1>
	)
}
export default MainTitle