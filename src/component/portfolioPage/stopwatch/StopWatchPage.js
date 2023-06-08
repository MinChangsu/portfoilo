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
      role={"Frontend & 기획 및 디자인 설계"}
      skill={
        <>
          <div className={styles.reactNative}></div>
          <div className={styles._figma}></div>
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
