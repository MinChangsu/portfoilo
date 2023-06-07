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
          <div className={styles._figma}></div>
        </>
      }
      explanation={
        <>
          장기 프로젝트로 React Native를 독학하여 사용하여 개발한
          프로젝트입니다.
          <br />
          Figma를 사용하여 UI/UX 구상 후 직접 디자인 하였으며 React Native
          프레임워크를 학습하며 App 개발에 대한 흥미를 가질 수 있었으며, 협업
          과정에 있어서 기획 단계 커뮤니케이션의 중요성을 깨닫게 해준
          프로젝트입니다.
        </>
      }
      btnStyles={<button className={styles.read_Kiosk_Btn}>✔ Preview</button>}
      visibleDetailView={<DetailKiosk />}
    ></PortfolioPage>
  );
}