import Head from 'next/head'
import Link from 'next/link'

export default function staticpage() {
  return (
    <div className="container">
      <Link href="/search">
        Search
      </Link>
      <h1>Static</h1>
    </div>
  )
}
