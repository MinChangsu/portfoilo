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
      role={"Frontend & 디자인 설계"}
      skill={
        <>
          <div className={styles.reactJs}></div>
          <a
            className={styles._figma}
            href="https://www.figma.com/file/W87oiHKzYsFuZoiZKBGXH8/My-Portfolio-Site?type=design&node-id=0-1&t=e1xVLuWN7D7XEmyQ-0"
          ></a>
          <span className={styles.click}>← Click here</span>
        </>
      }
      explanation={
        <>
          저에 대한 포트폴리오 소개 페이지입니다. <br />
          정보 소개 페이지인 만큼 기획 단계부터 보는 이가 불편함을 겪지 않도록
          해야한다는 것에 중점을 두었으며 간략하고 실속있는 페이지를 만들기 위해
          UI/UX를 고려해서 직접 디자인 후 제작하였습니다. <br />
          효율적인 화면 구성, 사용자가 보기 편한 디자인, UI/UX에 대해 학습하며
          이해를 넓힐 수 있는 계기가 되었습니다.
        </>
      }
      btnStyles={<button className={styles.read_MyPort_Btn}>✔ Preview</button>}
      visibleDetailView={<DetilaPortfolio />}
    ></PortfolioPage>
  );
}
