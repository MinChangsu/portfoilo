import styles from "./DetailStopWatch.module.css";
import video from "./stopwatchvideo/stopwatchVideo.mp4";

export default function DetailStopWatch() {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          ⏱ <span style={{ color: "white" }}>Workout</span> StopWatch ⏱
        </h1>
      </div>

      <div className={styles.detailContainer}>
        <h2 className={styles.detailTitle}>
          ⌜<span style={{ color: "white" }}>Photo</span> Preview⌟
        </h2>
        <div className={styles.stopWatchImg_1}></div>
        <div className={styles.stopWatchImg_2}></div>
        <div className={styles.stopWatchImg_3}></div>
        <div className={styles.stopWatchImg_4}></div>
        <div className={styles.stopWatchImg_5}></div>
        <div className={styles.stopWatchImg_6}></div>
        <div className={styles.stopWatchImg_7}></div>
        <h2 className={styles.detailTitle} style={{ marginTop: 40 }}>
          ⌜ <span style={{ color: "white" }}>Video </span>
          Preview⌟
        </h2>
        <video className={styles.stopWatchVideo} src={video} controls></video>
      </div>
    </div>
  );
}
