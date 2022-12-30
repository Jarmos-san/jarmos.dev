import Head from "next/head";

import styles from "./not-found.module.scss";

function CustomNotFoundPage() {
  return (
    <>
      <Head>
        <title>Somraj Saha | Page Not Found</title>
      </Head>
      <span className={styles.errorMessage}>404 | Page Not Found!</span>
    </>
  );
}

export default CustomNotFoundPage;
