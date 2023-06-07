import styles from "./DetailKiosk.module.css";
import video_1 from "./kioskvideos/kioskVideo_1.mp4";
import video_2 from "./kioskvideos/kioskVideo_2.mp4";
import video_3 from "./kioskvideos/kioskVideo_3.mp4";

export default function DetailKiosk() {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          <span style={{ color: "#a94cc0" }}>✣ Movie</span> Kiosk ✣
        </h1>
      </div>

      <div className={styles.detailContainer}>
        <h3 className={styles.detailTitle}>
          ⌜ <span style={{ color: "white" }}>Photo</span> Preview ⌟
        </h3>
        <div className={styles.kioskImg_1}></div>
        <div className={styles.kioskImg_2}></div>
        <div className={styles.kioskImg_3}></div>
        <div className={styles.kioskImg_4}></div>
        <div className={styles.kioskImg_5}></div>
        <div className={styles.kioskImg_6}></div>
        <div className={styles.kioskImg_7}></div>
        <div className={styles.kioskImg_8}></div>
        <div className={styles.kioskImg_9}></div>
        <h3 className={styles.detailTitle} style={{ marginTop: 40 }}>
          ⌜ <span style={{ color: "white" }}>Video</span> Preview ⌟
        </h3>
        <video className={styles.kisokVideo} src={video_1} controls></video>
        <video className={styles.kisokVideo} src={video_2} controls></video>
        <video className={styles.kisokVideo} src={video_3} controls></video>
      </div>
    </div>
  );
}
