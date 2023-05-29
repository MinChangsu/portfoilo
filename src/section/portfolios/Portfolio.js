import { useState } from "react";
import styles from "./Portfolio.module.css";
import SixmanPage from "../../component/portfolioPage/sixman/SixmanPage";
import AllToPage from "../../component/portfolioPage/alltou/AllToPage";
import MyPortPage from "../../component/portfolioPage/myportfolio/MyPortPage";
import KioskPage from "../../component/portfolioPage/moviekiosk/KioskPage";
import StopWatchPage from "../../component/portfolioPage/stopwatch/StopWatchPage";

export default function Portfolio() {
  const [selectSixman, setSelectSixman] = useState(false);
  const [selectAllTo, setSelectAllTo] = useState(false);
  const [selectMySite, setSelectMySite] = useState(true);
  const [selectKiosk, setSelectKiosk] = useState(false);
  const [selectStopWatch, setSelectStopWatch] = useState(false);

  const selectedSixman = () => {
    setSelectSixman((prev) => !prev);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedAllTo = () => {
    setSelectSixman(false);
    setSelectAllTo((prev) => !prev);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedMySite = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite((prev) => !prev);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedKiosk = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk((prev) => !prev);
    setSelectStopWatch(false);
  };
  const selectedStopWatch = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch((prev) => !prev);
  };

  return (
    <div className={styles.container} id="Portfolio">
      {(() => {
        if (selectSixman) {
          return <SixmanPage />;
        } else if (selectAllTo) {
          return <AllToPage />;
        } else if (selectMySite) {
          return <MyPortPage />;
        } else if (selectKiosk) {
          return <KioskPage />;
        } else if (selectStopWatch) {
          return <StopWatchPage />;
        }
      })()}
      <div className={styles.previewSelectContainer}>
        {/* sixman */}
        {selectSixman ? (
          <div className={styles.selectedFirstArea}>
            <div className={styles.selectedSixmanPrj}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.sixmanPrj} onClick={selectedSixman}></div>
          </div>
        )}
        {/* All To Us */}
        {selectAllTo ? (
          <div className={styles.selectedArea1}>
            <div className={styles.selectedAllTo}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.allTo} onClick={selectedAllTo}></div>
          </div>
        )}
        {/* MyPortfolio */}
        {selectMySite ? (
          <div className={styles.selectedArea2}>
            <div className={styles.selectedMySite}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.mySite} onClick={selectedMySite}></div>
          </div>
        )}
        {/* Kisok Main Prj */}
        {selectKiosk ? (
          <div className={styles.selectedArea3}>
            <div className={styles.selectedKiosk}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.kiosk} onClick={selectedKiosk}></div>
          </div>
        )}
        {/* StopWatch */}
        {selectStopWatch ? (
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
