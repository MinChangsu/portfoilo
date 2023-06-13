import PortfolioPage from "../PortfolioPage";
import AllToCarousel from "./AllToCarousel";
import styles from "../PortfolioPage.module.css";
import DetailAllToU from "../../portfolioDetail/detailAlltou/DetailAllToU";

export default function AllToPage(props) {
  return (
    <PortfolioPage
      display={"web"}
      BG_Color={"#5232cd"}
      titleColor={"#ffeb3a"}
      visibleCarousel={<AllToCarousel />}
      textColor={"white"}
      title={"Team Prj : All_To_U"}
      role={"Frontend"}
      skill={
        <>
          <div className={styles.reactJs}></div>
          <a
            className={styles._figma}
            href="https://www.figma.com/file/cQlOy6B7yf2dEWqFEUWaHn/All-To-U?type=design&node-id=0-1&t=OSHanjUZk1NB14bt-0"
          ></a>
          <span className={styles.click}>← Click here</span>
        </>
      }
      explanation={
        <>
          구상, 기획, 디자인, 제작까지 7일 동안 진행한 프로젝트로 진행한
          프로젝트 중 가장 짧은 시간 내에 완성한 프로젝트입니다. <br />
          주어진 시간이 짧은 만큼 팀 원들과의 협업 과정에서 커뮤니케이션을
          중점에 두고 진행하였으며 <br />
          axios 및 fetch 등을 사용해봄으로써 서버와의 REST API 통신에 대한
          이해도가 상승할 수 있었던 프로젝트였습니다.
        </>
      }
      btnStyles={<button className={styles.read_AllTo_Btn}>✔ Preview</button>}
      visibleDetailView={<DetailAllToU />}
    ></PortfolioPage>
  );
}
