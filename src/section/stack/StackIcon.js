import styles from "./StackIcon.module.css";

export default function StackIcon() {
  return (
    <div className={styles.skill_Container}>
      <div className={styles.skill_iconContainer}>
        <div className={styles.skill_iconArea_1}>
          <div className={styles.iconHTML_2}></div>
          <h3>HTML</h3>
        </div>
        <div className={styles.skill_iconArea_2}>
          <h3>CSS</h3>
          <div className={styles.iconCSS_2}></div>
        </div>
        <div className={styles.skill_iconArea_3}>
          <div className={styles.iconJS_2}></div>
          <h3>
            Java <br />
            Script
          </h3>
        </div>
      </div>

      <div className={styles.skill_iconContainer}>
        <div
          className={styles.skill_iconArea_1}
          style={{ backgroundColor: "#9AE1F7" }}
        >
          <div className={styles.iconReactJS_2}></div>
          <h3>
            React <br />
            JS
          </h3>
        </div>
        <div
          className={styles.skill_iconArea_2}
          style={{ backgroundColor: "#78C1DE" }}
        >
          <h3>
            React <br />
            Native
          </h3>
          <div className={styles.iconRN_2}></div>
        </div>
      </div>

      <div className={styles.skill_iconContainer}>
        <div
          className={styles.skill_iconArea_1}
          style={{ backgroundColor: "#7FDAAD" }}
        >
          <div className={styles.iconFigma_2}></div>
          <h3>Figma</h3>
        </div>
        <div
          className={styles.skill_iconArea_2}
          style={{ backgroundColor: "rgb(66, 66, 66)" }}
        >
          <h3 style={{ color: "white" }}>Git Hub</h3>
          <div className={styles.iconGit_2}></div>
        </div>
      </div>
    </div>
  );
}
