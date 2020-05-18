import Link from "next/link";

const Static = ({ data }) => {
  return (
    <div className="container">
      <Link href="/">
        <a>Search</a>
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

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const json = await res.json();
  return { props: {data: json} };
};
export default Static;
