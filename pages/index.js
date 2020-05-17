import Head from "next/head";
import Link from "next/link";
import {wrapper} from '../store/store';
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'TICK', payload: 'foo' })
  }
  return (
    <div className="container">
      <Link href="/search">
        <a className="text-4xl">Search</a>
      </Link>
      <br/>
      <Link href="/static">
        <a>Static</a>
      </Link>
      <br/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick()}>Click</button>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default Home;

