import '../styles/globals.scss';
import Layout from '../components/Layout';
import Head from 'next/head';
//=========================================================================================================================

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Head>
				<title>Yummy Ice Cream</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Sonsie+One&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
};

export default MyApp;
