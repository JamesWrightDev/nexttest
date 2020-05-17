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
        <a>Search</a>
      </Link>
      <Link href="/static">
        <a>Static</a>
      </Link>
      <button onClick={() => handleClick()}>Click</button>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default wrapper.withRedux((Home));

