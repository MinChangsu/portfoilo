import PortfolioPage from "../PortfolioPage";
import KioskCarousel from "./KioskCarousel";
import styles from "../PortfolioPage.module.css";
import DetailKiosk from "../../portfolioDetail/detailKiosk/DetailKiosk";

export default function KioskPage(props) {
  return (
    <PortfolioPage
      display={"app"}
      BG_Color={"rgb(66, 66, 66)"}
      titleColor={"#a94cc0"}
      visibleCarousel={<KioskCarousel />}
      textColor={"white"}
      title={"SixMan Main Prj - Movie Kiosk Display"}
      role={"Frontend & 기획 및 디자인 설계"}
      skill={
        <>
          <div className={styles.reactNative}></div>
          <a
            className={styles._figma}
            href="https://www.figma.com/file/ZEWgTTZAIWciBlS7kVitlQ/Movie-Kiosk?type=design&node-id=0-1&t=Hm4zeNmk1ac8YFtO-0"
          ></a>
          <span className={styles.click}>← Click here</span>
        </>
      }
      explanation={
        <>
          처음으로 React Native를 독학하여 개발한 프로젝트입니다.
          <br />
          Figma를 사용하여 UI/UX 구상 후 직접 디자인 하였고, React Native라는
          프레임워크를 학습하면서 Web과 더불어 App 개발에 대한 흥미를 가질 수
          있었으며 <br />
          협업 과정에서 팀 원들 간 커뮤니케이션의 중요성을 깨닫게 해준
          프로젝트입니다.
        </>
      }
      btnStyles={<button className={styles.read_Kiosk_Btn}>✔ Preview</button>}
      visibleDetailView={<DetailKiosk />}
    ></PortfolioPage>
  );
}
