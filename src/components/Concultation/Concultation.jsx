import styles from "./Concultation.module.sass";
import ButtonComp from "../Button/ButtonComp";
import Image from "next/image";

export default function Concultation() {
  return (
    <div className={styles.concultation}>
      <div className={styles.upperConteiner}>
        <div className={styles.upperConteinerRight}>
          <p className={styles.textOne}>ПОЛУЧИТЕ БЕСПЛАТНУЮ</p>
          <h1 className={styles.textTwo}>КОНСУТАЦИЮ</h1>
          <p className={styles.textThree}>СПЕЦИАЛИСТА В ТЕЧЕНИЕ 30 МИНУТ</p>
          <ButtonComp />
        </div>
        <div className={styles.upperConteinerlef}>
          <p className={styles.textOne}>РАБОТАЕМ С</p>
          <p className={styles.textTwo}>20</p>
          <p className={styles.textThree}>06</p>
          <p className={styles.textFour}>ГОДА</p>
        </div>
      </div>
      <div className={styles.lowerConteiner}>
        <div className="">
          <Image layout="responsive" src="./consultation/01.svg" width={328} height={244}  />
        </div>
        <div className="">
          <Image layout="responsive" src="./consultation/02.svg" width={328} height={244}  />
        </div>
        <div className="">
          <Image layout="responsive" src="./consultation/03.svg" width={328} height={244} />
        </div>
      </div>
    </div>
  );
}
