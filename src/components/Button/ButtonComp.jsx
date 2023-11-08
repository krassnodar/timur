import styles from "./ButtonComp.module.sass";

export default function ButtonComp() {

  return (
    <div className={styles.buttonBox}>
      <div className={styles.buttonCall}>
        <p className={styles.textOne}>ЗАКАЗАТЬ ЗВОНОК</p>
      </div>
        <p className={styles.textTwo}>годы безупречной репутации</p>
    </div>
  );
}