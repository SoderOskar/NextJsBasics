import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We do shit</h1>
          <p className={styles.desc}>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish.{" "}
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>20K?</h1>
              <p>Imagine that..</p>
            </div>
            <div className={styles.box}>
              <h1>20K?</h1>
              <p>Imagine that..</p>
            </div>
            <div className={styles.box}>
              <h1>20K?</h1>
              <p>Imagine that..</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/about.png"
            alt="About image"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
