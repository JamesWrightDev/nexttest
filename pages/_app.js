import { Provider } from 'react-redux'
import { store } from '../store/store';
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      <div className="container mx-auto py-10">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};
export default App;
