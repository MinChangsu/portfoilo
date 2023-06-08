import PortfolioPage from "../PortfolioPage";
import SixmanCarousel from "./SixmanCarousel";
import styles from "../PortfolioPage.module.css";
import DetailSixman from "../../portfolioDetail/detailSixman/DetailSixman";

export default function SixmanPage() {
  return (
    <PortfolioPage
      display={"web"}
      BG_Color={"black"}
      titleColor={"#9b8649"}
      visibleCarousel={<SixmanCarousel />}
      textColor={"white"}
      title={"SixMan Mini Prj - omo Robot R1 Mini"}
      role={"Frontend"}
      skill={
        <>
          <div className={styles.html}></div>
          <div className={styles.css}></div>
          <div className={styles.js}></div>
        </>
      }
      explanation={
        <>
          처음으로 진행해본 팀 프로젝트입니다. <br />본 프로젝트를 진행하면서
          HTML, CSS, JavaScript를 사용해봄으로써 웹 개발의 기본 지식을 쌓을 수
          있었고 <br /> 프론트 엔드 분야에 매력을 느끼고 본격적으로 시작하게 된
          계기가 되었습니다.
        </>
      }
      btnStyles={
        <>
          <button className={styles.read_Sixman_Btn}>✔ Preview</button>
        </>
      }
      visibleDetailView={<DetailSixman />}
    ></PortfolioPage>
  );
}
