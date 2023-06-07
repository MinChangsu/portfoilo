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
          운동 전용 스톱워치 어플로 기획을 시작해 제작한 스톱워치입니다. React
          Native를 사용한 두 번째 프로젝트인 만큼 디자인를 구현하는데 있어서는
          수월하게 진행할 수 있었습니다.
        </>
      }
      btnStyles={
        <button className={styles.read_StopWatch_Btn}>✔ Preview</button>
      }
      visibleDetailView={<DetailStopWatch />}
    ></PortfolioPage>
  );
}
