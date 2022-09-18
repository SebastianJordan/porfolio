import Image from "next/image";
import styles from "../styles/UnderConstruction.module.css";
import techApply from "../public/images/Main-Banner.svg";
import logoSvg from "../public/images/logo.svg";
import upPoint from "../public/images/up-group-point.svg";
import { useEmail } from "../hooks/useEmail";

export function UnderConstruction() {
  const [btn, emailInput, loading, onChangeForm, onSendEmail] = useEmail({
    btn: "Notify me",
    emailInput: "",
    loading: false,
  });
  return (
    <div className={styles.page}>
      <section className={styles.slideInfo}>
        <div className="pt-8">
          <Image src={logoSvg} alt="logo" />
        </div>
        <article>
          <div className={styles.groupPoint}>
            <Image src={upPoint} alt="up group point" />
          </div>
          <h1 className={styles.title}>Under Construction</h1>
          <p className={styles.description}>
            My website is currently undergoing .
            <br />
            Should be back shortly, thanks you for you patience.
          </p>
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
        </article>
      </section>
      <section>
        <div className={styles.techApply}>
          <Image src={techApply} alt="tech apply" />
        </div>
      </section>
    </div>
  );
}
