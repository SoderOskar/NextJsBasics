import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1> Walla </h1>
        <p>
          {" "}
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish.{" "}
        </p>

        <div className={styles.buttons}>
          <div className={styles.button}>Learn More</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.brands}>
          <Image
            className={styles.brandImg}
            src="/brands.png"
            alt=""
            fill
          ></Image>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src="/hero.gif" alt="" fill></Image>
      </div>
    </div>
  );
};

export default Home;
