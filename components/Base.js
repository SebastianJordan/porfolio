import styles from "../styles/Base.module.css";
export function Base(props) {
  return <main className={styles.page}>{props.children}</main>;
}
