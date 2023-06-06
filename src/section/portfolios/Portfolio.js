import { useState } from "react";
import styles from "./Portfolio.module.css";
import SixmanPage from "../../component/portfolioPage/sixman/SixmanPage";
import AllToPage from "../../component/portfolioPage/alltou/AllToPage";
import MyPortPage from "../../component/portfolioPage/myportfolio/MyPortPage";
import KioskPage from "../../component/portfolioPage/moviekiosk/KioskPage";
import StopWatchPage from "../../component/portfolioPage/stopwatch/StopWatchPage";

export default function Portfolio() {
  const [visiblePage, setVisiblePage] = useState("mysite");

  const selectedSixman = () => {
    setVisiblePage("sixman");
  };
  const selectedAllTo = () => {
    setVisiblePage("allto");
  };
  const selectedMySite = () => {
    setVisiblePage("mysite");
  };
  const selectedKiosk = () => {
    setVisiblePage("kiosk");
  };
  const selectedStopWatch = () => {
    setVisiblePage("stopwatch");
  };

  return (
    <div className={styles.container} id="Project">
      {(() => {
        if (visiblePage === "sixman") {
          return <SixmanPage />;
        } else if (visiblePage === "allto") {
          return <AllToPage />;
        } else if (visiblePage === "mysite") {
          return <MyPortPage />;
        } else if (visiblePage === "kiosk") {
          return <KioskPage />;
        } else if (visiblePage === "stopwatch") {
          return <StopWatchPage />;
        }
      })()}
      <div className={styles.previewSelectContainer}>
        {/* sixman */}
        {visiblePage === "sixman" ? (
          <div className={styles.selectedFirstArea}>
            <div className={styles.selectedSixmanPrj}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.sixmanPrj} onClick={selectedSixman}></div>
          </div>
        )}
        {/* All To Us */}
        {visiblePage === "allto" ? (
          <div className={styles.selectedArea1}>
            <div className={styles.selectedAllTo}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.allTo} onClick={selectedAllTo}></div>
          </div>
        )}
        {/* MyPortfolio */}
        {visiblePage === "mysite" ? (
          <div className={styles.selectedArea2}>
            <div className={styles.selectedMySite}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.mySite} onClick={selectedMySite}></div>
          </div>
        )}
        {/* Kisok Main Prj */}
        {visiblePage === "kiosk" ? (
          <div className={styles.selectedArea3}>
            <div className={styles.selectedKiosk}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.kiosk} onClick={selectedKiosk}></div>
          </div>
        )}
        {/* StopWatch */}
        {visiblePage === "stopwatch" ? (
          <div className={styles.selectedLastArea}>
            <div className={styles.selectedStopWatch}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.stopWatch} onClick={selectedStopWatch}></div>
          </div>
        )}
      </div>
    </div>
  );
}
