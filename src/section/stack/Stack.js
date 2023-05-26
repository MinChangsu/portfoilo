import StackBar from "../../component/stackbar/StackBar";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <div className={styles.container} id="Stack">
      <div className={styles.barContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={styles.skillsHashTag}>#</span>
          <a className={styles.skillsTitle} href="#Stack">
            Skills
          </a>
        </div>
        <p className={styles.skillsSubTItle}>
          Languages & Frame-Work & DevOps with Experience
        </p>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconHTML}></div>
            <div className={styles.iconText}>
              HTML
              <br />
            </div>
          </div>
          <StackBar percentage={"60%"} bgColor={"#FF651E"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconCSS}></div>
            <div className={styles.iconText}>
              CSS
              <br />
            </div>
          </div>
          <StackBar percentage={"60%"} bgColor={"#0164f4"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconJS}></div>
            <div className={styles.iconText}>
              JS
              <br />
            </div>
          </div>
          <StackBar percentage={"50%"} bgColor={"#FDDD46"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconReactJS}></div>
            <div className={styles.iconText}>
              React
              <br />
              JS
            </div>
          </div>
          <StackBar percentage={"60%"} bgColor={"#60DBFB"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconRN}></div>
            <div className={styles.iconText}>
              React
              <br />
              Native
            </div>
          </div>
          <StackBar percentage={"65%"} bgColor={"#04A5D1"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconFigma}></div>
            <div className={styles.iconText}>
              Figma
              <br />
            </div>
          </div>
          <StackBar percentage={"55%"} bgColor={"#03CF7F"} />
        </div>
        <div className={styles.stackBarArea}>
          <div className={styles.stackIcon}>
            <div className={styles.iconGit}></div>
            <div className={styles.iconText}>
              Git
              <br />
              Hub
            </div>
          </div>
          <StackBar percentage={"40%"} bgColor={"black"} />
        </div>
      </div>
    </div>
  );
}
