import { useEffect, useState } from "react";
import StackBar from "../../component/stackbar/StackBar";
import styles from "./Stack.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import StackIcon from "./StackIcon";

export default function Stack() {
  const [visibleSkillBar, setVisibleSkillBar] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className={styles.container} id="Skill">
      <div
        className={styles.barContainer}
        data-aos-anchors="#Skill"
        data-aos="flip-right"
        data-aos-duration={1000}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={styles.skillsHashTag}>#</span>
          <a className={styles.skillsTitle} href="#Skill">
            Skills
          </a>
        </div>
        {visibleSkillBar ? (
          <p className={styles.skillsSubTItle}>
            Percentage of My Skills Proficiency
          </p>
        ) : (
          <p className={styles.skillsSubTItle}>
            Languages & FrameWork & DevOps with Experience
          </p>
        )}
        {visibleSkillBar ? (
          <>
            <div className={styles.stackBarArea}>
              <div className={styles.stackIcon}>
                <div className={styles.iconHTML}></div>
                <div className={styles.iconText}>
                  HTML
                  <br />
                </div>
              </div>
              <StackBar percentage={"55%"} bgColor={"#FF651E"} />
            </div>
            <div className={styles.stackBarArea}>
              <div className={styles.stackIcon}>
                <div className={styles.iconCSS}></div>
                <div className={styles.iconText}>
                  CSS
                  <br />
                </div>
              </div>
              <StackBar percentage={"65%"} bgColor={"#0164f4"} />
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
              <StackBar percentage={"55%"} bgColor={"#60DBFB"} />
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
              <StackBar percentage={"55%"} bgColor={"#04A5D1"} />
            </div>
            <div className={styles.stackBarArea}>
              <div className={styles.stackIcon}>
                <div className={styles.iconFigma}></div>
                <div className={styles.iconText}>
                  Figma
                  <br />
                </div>
              </div>
              <StackBar percentage={"50%"} bgColor={"#03CF7F"} />
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
          </>
        ) : (
          <StackIcon />
        )}

        <button
          className={styles.skill_btn}
          onClick={() => {
            setVisibleSkillBar((prev) => !prev);
          }}
        >
          {visibleSkillBar ? "돌아가기" : " 자세히 보기"}
        </button>
      </div>
    </div>
  );
}
