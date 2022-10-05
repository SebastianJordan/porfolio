import Image from "next/image";
import upPoint from "../public/images/up-group-point.svg";
import styles from "../styles/Title.module.css";

export default function Title(props) {
  return (
    <>
      <div className={styles.groupPoint}>
        <Image src={upPoint} alt="up group point" />
      </div>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.description}>
        {props.children}
      </div>
    </>
  );
}
