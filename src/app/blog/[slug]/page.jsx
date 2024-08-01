import Image from "next/image";
import styles from "./singPost.module.css";

const SingPostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/26934487/pexels-photo-26934487/free-photo-of-chess-pieces-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/25929075/pexels-photo-25929075/free-photo-of-a-small-animal-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
          ></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Wallabrush</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}></div>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish.
      </div>
    </div>
  );
};

export default SingPostPage;
