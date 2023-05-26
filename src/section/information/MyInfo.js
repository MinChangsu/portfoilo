import React, { useState } from "react";
import styles from "./MyInfo.module.css";

export default function MyInfo() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className={styles.bgColor} id="About">
      <div className={styles.container}>
        <div className={styles.photoArea}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className={styles.aboutMeHashTag}>#</span>
            <a className={styles.aboutMeTitle} href="#About">
              About Me
            </a>
          </div>
          <div className={styles.profilePhoto}></div>
          <div className={styles.porfileIcon}>
            <a className={styles.phone}></a>
            <a className={styles.email}></a>
            <a
              className={styles.gitHub}
              href="https://github.com/sweetChilee"
            ></a>
            <a
              className={styles.notion}
              href="https://flicker-pound-41e.notion.site/1c58c929fb9c4753878b9e31ec995579"
            ></a>
          </div>
          <div className={styles.btnArea}>
            <h3
              className={styles.btn}
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
            >
              More +
            </h3>
          </div>
        </div>
        {isVisible ? (
          <div className={styles.infoArea}>
            <p className={styles.infoTexts}>
              <h2>
                「 끊임없이 노력하는 」
                <span className={styles.name}> 이광규 </span>
                입니다.
              </h2>
              책임감이 강해서 맡은 일은 끝까지 완수해요! <br />
              타인으로부터 ‘성실하다’ 혹은 ‘배움이 빠르다’ 등의 말을 자주
              듣곤해요!
              <h2>🗨️ 목표를 향한 지속적인 전진</h2>
              자신만의 엄격한 기준치나 목표치를 설정해놓고 <br />
              거기에 도달하지 못했거나 만족하지 못하다고 생각이 들면 포기하지
              않고 지속적으로 목표치를 달성하려고 해요. <br />
              만약 목표치를 달성하더라도 부족한 부분은 없는지 다시 되돌아보는
              시간을 가진답니다.
              <h2>🗨️ 변화를 두려워 하지 않는 자세</h2>
              자신만의 엄격한 기준치나 목표치를 설정해놓고 <br />
              거기에 도달하지 못했거나 만족하지 못하다고 생각이 들면 포기하지
            </p>
          </div>
        ) : (
          <div className={styles.hobbyArea}>
            <div className={styles.card}>
              <h2>프로 계획러</h2>
              <div className={styles.card1Profile}></div>
              <h4 style={{ paddingRight: 30, paddingLeft: 30, lineHeight: 2 }}>
                형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서
                진술할 수 있다.
              </h4>
            </div>
            <div className={styles.card}>
              <h2>운동 중독자</h2>
              <div className={styles.card2Profile}></div>
              <h4 style={{ paddingRight: 30, paddingLeft: 30, lineHeight: 2 }}>
                형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서
                진술할 수 있다.
              </h4>
            </div>
            <div className={styles.card}>
              <h2>프로 계획러</h2>
              <div className={styles.card3Profile}></div>
              <h4 style={{ paddingRight: 30, paddingLeft: 30, lineHeight: 2 }}>
                형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서
                진술할 수 있다.
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
