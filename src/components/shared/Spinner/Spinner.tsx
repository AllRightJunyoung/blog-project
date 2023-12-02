import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );
};
export default Spinner;
