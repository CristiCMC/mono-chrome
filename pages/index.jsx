import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MonoChrome</title>
      </Head>

      <header className="header">
        Hello
        <img src="/images/banner.png" alt=""></img>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram-square"></i>
      </header>

      <main className="main"></main>

      <footer className="footer"></footer>
    </div>
  );
}
