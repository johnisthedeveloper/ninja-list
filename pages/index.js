import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          aspernatur laudantium veniam amet excepturi natus dolores nisi
          similique commodi, architecto autem labore tempora quas doloribus
          minus repellendus exercitationem perspiciatis consectetur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          aspernatur laudantium veniam amet excepturi natus dolores nisi
          similique commodi, architecto autem labore tempora quas doloribus
          minus repellendus exercitationem perspiciatis consectetur?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          aspernatur laudantium veniam amet excepturi natus dolores nisi
          similique commodi, architecto autem labore tempora quas doloribus
          minus repellendus exercitationem perspiciatis consectetur?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
