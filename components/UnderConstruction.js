import styles from "../styles/UnderConstruction.module.css";
import { useEmail } from "../hooks/useEmail";
import Title from "./Title";

export function UnderConstruction() {
  const [btn, emailInput, loading, onChangeForm, onSendEmail] = useEmail({
    btn: "Notify me",
    emailInput: "",
    loading: false,
  });
  return (
    <section className={styles.slideInfo}>
      <Title title={["Under Construction"]} showBg={true}>
        <p>
          My website is currently undergoing .
          <br />
          Should be back shortly, thanks you for you patience.
        </p>
      </Title>
      <form onSubmit={onSendEmail}>
        <input
          required
          disabled={loading}
          type="email"
          name="email"
          placeholder="Enter your email"
          className={styles.email}
          value={emailInput || ""}
          onChange={onChangeForm}
        ></input>
        <button
          className={styles.btnEmail}
          onClick={onSendEmail}
          type="submit"
          name="btn"
        >
          {btn}
        </button>
      </form>
    </section>
  );
}
