import PortfolioPage from "../PortfolioPage";
import MyPortCarousel from "./MyPortCarousel";
import styles from "../PortfolioPage.module.css";
import DetilaPortfolio from "../../portfolioDetail/detailPortfolio/DetilaPortfolio";

export default function MyPortPage(props) {
  return (
    <PortfolioPage
      display={"web"}
      BG_Color={"#EFF2FB"}
      titleColor={"rgb(77, 77, 77)"}
      visibleCarousel={<MyPortCarousel />}
      textColor={"black"}
      title={"Pesoanl Prj - My Portfolio Web Site"}
      role={"Frontend"}
      skill={
        <>
          <div className={styles.reactJs}></div>
          <div className={styles._figma}></div>
        </>
      }
      explanation={
        <>
          저에 대한 포트폴리오 소개 페이지입니다. <br />
          정보 소개 페이지인 만큼 기획 단계부터 보는 이가 불편함을 겪지 않도록
          해야한다는 것에 중점을 두었으며 간략하고 실속있는 페이지를 만들기 위해
          UI/UX를 고려해서 직접 디자인 후 제작하였습니다. 디자인 및 제작에 대한
          실력 상승과 더불어 기획에 대한 이해를 넓히는 계기가 되었습니다.
        </>
      }
      btnStyles={<button className={styles.read_MyPort_Btn}>✔ Preview</button>}
      visibleDetailView={<DetilaPortfolio />}
    ></PortfolioPage>
  );
}
