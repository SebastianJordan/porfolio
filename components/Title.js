import styles from "../styles/Title.module.css";

export default function Title(props) {
  return (
    <>
      <div className={styles.groupPoint}>
      </div>
      <h1 className={styles.title}>
      { props.title.map((i)=>
         <>{i}<br/></>
      )}
      </h1>
      <div className={styles.description}>
        {props.children}
      </div>
    </>
  );
}
