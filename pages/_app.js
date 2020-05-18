import { Provider } from 'react-redux'
import { store } from '../store/store';
import Head from 'next/head'
import '../styles/skeleton.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container mx-auto py-10">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};
export default App;
