import Journey from "../../Journey/journey";
import RateCalculator from "../../ratecalculator/ratecalculator";
import SeeAllSectionTable from "../../seealltable/seeallsectiontable";
import Subscribe from "../../subscribe/subscribe";
import styles from "../SeeAllPage/seeallpage.module.scss"
import { BsArrowUp } from "react-icons/bs";


const SeeAllPage = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.herosection}>
                    <h1 className={styles.herotitle}>
                        Where you can send money with Teku.
                    </h1>
                    <p className={styles.heroparagraph}>
                        Available countries you send money at an affordable rate.
                    </p>
                </div>
            </div>
            <SeeAllSectionTable />
            <RateCalculator />
            <Journey />
            <Subscribe />
            <a href="#top" className={styles.topBTn}>
                <BsArrowUp className={styles.arrowup} />
            </a>
        </div>
    );
}

export default SeeAllPage;