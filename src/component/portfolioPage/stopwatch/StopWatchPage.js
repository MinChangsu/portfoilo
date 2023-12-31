import PortfolioPage from "../PortfolioPage";
import StopWatchCarousel from "./StopWatchCarousel";
import styles from "../PortfolioPage.module.css";
import DetailStopWatch from "../../portfolioDetail/detailStopWatch/DetailStopWatch";

export default function StopWatchPage(props) {
  return (
    <PortfolioPage
      display={"app"}
      BG_Color={" rgb(33, 33, 33)"}
      titleColor={"#8b8ceb"}
      visibleCarousel={<StopWatchCarousel />}
      textColor={"white"}
      title={"Personal Prj - Work Out StopWatch"}
      role={"Frontend & 디자인 설계"}
      skill={
        <>
          <div key="reactNative" className={styles.reactNative}>
            React Native
          </div>
          <a
            key="figma"
            className={styles._figma}
            href="https://www.figma.com/file/JcFcji3K2eNRO7cZA28rDy/Workout-Stop-Watch?type=design&t=OSHanjUZk1NB14bt-0"
          >
            Figma
          </a>
          <span key="click" className={styles.click}>← Click here</span>
        </>
      }
      explanation={
        <>
          운동 전용 스톱워치로 기획을 시작해 React Native로 제작한
          스톱워치입니다. <br />본 프로젝트는 JS 코드 구현 및 알고리즘 해결에
          대한 학습을 주 목적으로 제작하였으며, JavaScript의 이해도 및 실질적
          구현 능력을 제고시킬 수 있었던 프로젝트입니다.
        </>
      }
      btnStyles={
        <button className={styles.read_StopWatch_Btn}>✔ Preview</button>
      }
      visibleDetailView={<DetailStopWatch />}
    ></PortfolioPage>
  );
}
