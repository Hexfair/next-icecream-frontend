import '../styles/globals.scss';
import Layout from '../components/Layout';
import Head from 'next/head';
//=========================================================================================================================

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Head>
				<title>Yummy Ice Cream</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
};

export default MyApp;
