import Title from "./Title";
import styles from "../styles/UnderConstruction.module.css";
export function HeaderMain() {
  return (
    <section className={styles.slideInfo}>
      <Title
        title={["Hi", "I’m Sebastian", "Front-end developer"]}
        showBg={true}
      ></Title>
      <a href="#" className="btn-basic mr-32">
        View resume
      </a>
      <a href="#" className="btn-link">
        Github Projects{" "}
      </a>
    </section>
  );
}
