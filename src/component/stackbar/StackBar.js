import styles from "./StackBar.module.css";

export default function StackBar({ percentage, bgColor }) {
  return (
    <div className={styles.stackBar}>
      {(() => {
        if (percentage === "40%") {
          return (
            <div
              className={styles._40StackBar}
              style={{ width: percentage, backgroundColor: bgColor }}
            >
              <p className={styles.innerBarText}>{percentage}</p>
            </div>
          );
        } else if (percentage === "50%") {
          return (
            <div
              className={styles._50StackBar}
              style={{ width: percentage, backgroundColor: bgColor }}
            >
              <p className={styles.innerBarText}>{percentage}</p>
            </div>
          );
        } else if (percentage === "55%") {
          return (
            <div
              className={styles._55StackBar}
              style={{ width: percentage, backgroundColor: bgColor }}
            >
              <p className={styles.innerBarText}>{percentage}</p>
            </div>
          );
        } else if (percentage === "60%") {
          return (
            <div
              className={styles._60StackBar}
              style={{ width: percentage, backgroundColor: bgColor }}
            >
              <p className={styles.innerBarText}>{percentage}</p>
            </div>
          );
        } else if (percentage === "65%") {
          return (
            <div
              className={styles._65StackBar}
              style={{ width: percentage, backgroundColor: bgColor }}
            >
              <p className={styles.innerBarText}>{percentage}</p>
            </div>
          );
        }
      })()}
    </div>
  );
}
