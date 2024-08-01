import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SmackersDev</div>
      <div className={styles.text}>Smackers inc</div>
    </div>
  );
};

export default Footer;
