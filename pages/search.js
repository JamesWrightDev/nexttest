import Link from "next/link";
import { useRouter } from "next/router";

const Search = ({ data }) => {

  return (
    <div className="container">
      <Link href="/">
        <a>Home</a>
      </Link>
       <li>{data.title}</li>
    </div>
  );
};

Search.getInitialProps = async (ctx) => {
  const { location } = ctx.query;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${location}`
  );
  const json = await res.json();
  return { data: json };
};
export default Search;
