import styles from "./DetailSixman.module.css";

export default function DetailSixman() {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <div className={styles.headerLogo}></div>
        <h1 style={{ textAlign: "center" }}>
          {" "}
          Six mAn <span style={{ color: "white" }}>Project</span>
        </h1>
      </div>
      <div className={styles.detailContainer}>
        <h2 className={styles.detailTitle}>⌜Photo Preview⌟</h2>
        <div className={styles.sixmanImg_1}></div>
        <div className={styles.sixmanImg_2}></div>
        <div className={styles.sixmanImg_3}></div>
        <div className={styles.sixmanImg_4}></div>
        <div className={styles.sixmanImg_5}></div>
        <div className={styles.sixmanImg_6}></div>
        <div className={styles.sixmanImg_7}></div>
        <div className={styles.sixmanImg_8}></div>
        <div className={styles.sixmanImg_9}></div>
        <div className={styles.sixmanImg_10}></div>
      </div>
    </div>
  );
}
