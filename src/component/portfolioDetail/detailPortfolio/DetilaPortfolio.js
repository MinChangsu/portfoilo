import styles from "./DetilaPortfolio.module.css";

export default function DetilaPortfolio() {
  return (
    <div className={styles.overlay}>
      <h2 style={{ textAlign: "center" }}>
        Lee Gwang Gyu's <br />
        Portfolio Page
      </h2>
      <h3 style={{ textAlign: "center" }}>⌜ Photo Preview ⌟</h3>
      <div className={styles.detailContainer}>
        <div className={styles.portfolioImg_1}></div>
        <div className={styles.portfolioImg_2}></div>
        <div className={styles.portfolioImg_3}></div>
        <div className={styles.portfolioImg_4}></div>
        <div className={styles.portfolioImg_5}></div>
        <div className={styles.portfolioImg_6}></div>
        <div className={styles.portfolioImg_7}></div>
        <div className={styles.portfolioImg_8}></div>
        <div className={styles.portfolioImg_9}></div>
        <div className={styles.portfolioImg_10}></div>
      </div>
    </div>
  );
}
