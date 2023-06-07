import styles from "./DetailAllToU.module.css";
import video_1 from "./videos/allto_login.mp4";
import video_2 from "./videos/allto_content.mp4";
import video_3 from "./videos/allto_portfolio.mp4";
import video_4 from "./videos/allto_investment.mp4";

export default function DetailAllToU() {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <div className={styles.headerLogo}></div>
        <h1 style={{ textAlign: "center" }}> All To U</h1>
      </div>

      <div className={styles.detailContainer}>
        <h3 style={{ textAlign: "center" }}>⌜ Photo Preview ⌟</h3>
        <div className={styles.allToImg_1}></div>
        <div className={styles.allToImg_2}></div>
        <div className={styles.allToImg_3}></div>
        <div className={styles.allToImg_4}></div>
        <div className={styles.allToImg_5}></div>
        <div className={styles.allToImg_6}></div>
        <div className={styles.allToImg_7}></div>
        <div className={styles.allToImg_8}></div>
        <h3>⌜ Video Preview ⌟</h3>
        <video className={styles.allToVideo} src={video_1} controls></video>
        <video className={styles.allToVideo} src={video_2} controls></video>
        <video className={styles.allToVideo} src={video_3} controls></video>
        <video className={styles.allToVideo} src={video_4} controls></video>
      </div>
    </div>
  );
}
