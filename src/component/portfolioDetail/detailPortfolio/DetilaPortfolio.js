import styles from "./DetilaPortfolio.module.css";

export default function DetilaPortfolio() {
  return (
    <div className={styles.overlay}>
      <h1 className={styles.mainTitle}>
        Lee Gwang Gyu's <br />
        Portfolio Page
      </h1>
      <div className={styles.detailContainer}>
        <h2 className={styles.detailTitle}>⌜Photo Preview⌟</h2>
        <div className={styles.portfolioImg_1}></div>
        <div className={styles.portfolioImg_2}></div>
        <div className={styles.portfolioImg_3}></div>
        <div className={styles.portfolioImg_4}></div>
        <div className={styles.portfolioImg_5}></div>
        <div className={styles.portfolioImg_6}></div>
        <div className={styles.portfolioImg_6_1}></div>
        <div className={styles.portfolioImg_7}></div>
        <div className={styles.portfolioImg_7_1}></div>
        <div className={styles.portfolioImg_8}></div>
        <div className={styles.portfolioImg_8_1}></div>
        <div className={styles.portfolioImg_9}></div>
        <div className={styles.portfolioImg_9_1}></div>
        <div className={styles.portfolioImg_10}></div>
        <div className={styles.portfolioImg_10_1}></div>
      </div>
    </div>
  );
}
