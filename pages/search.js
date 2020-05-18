import Link from "next/link";
import { useRouter } from "next/router";

const Search = ({ data }) => {
  return (
    <div className="container">
      <Link href="/">
        <a>Search123</a>
      </Link>
      {
        data.map(item => {
          return(
            <li key={item.id}>{item.title}</li>
          )
        })
      }
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const json = await res.json();
  return { props: {data: json} };
};
export default Search;
