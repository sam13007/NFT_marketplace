import '../styles/globals.css';
import Link from 'next/link';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Digiverse</title>

        <link rel="icon" href="/icon.png" />
      </Head>
      <nav className="border-b p-6 sm:flex text-md space-x-15 overflow-x-scroll scrollbar-hide  justify-between items-center whitespace-nowrap">
        <p className="text-4xl font-bold ">DigiVerse</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 hover:text-rose-500 cursor-pointer transition duration-300 transform ease-in-out hover:scale-110">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 hover:text-rose-500 cursor-pointer transition duration-300 transform ease-in-out hover:scale-110">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 hover:text-rose-500 cursor-pointer transition duration-300 transform ease-in-out hover:scale-110">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6  cursor-pointer transition duration-300 transform ease-in-out hover:scale-110 hover:text-rose-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
