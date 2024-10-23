import Image from "next/image";
import styles from "./single.module.css";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" className={styles.img} fill alt="post" />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{"title"}</h1>
                <div className={styles.detail}>
                    <Image
                        src="/hero.gif"
                        className={styles.avatar}
                        height={50}
                        width={50}
                        alt="post image"
                    />
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>fad</div>
                        <span className={styles.detailValue}>dfsafda</span>
                    </div>
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>fdsa</div>
                        <span className={styles.detailValue}>rew</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum in distinctio, doloremque fugit, sequi aut alias
                    dolor ullam animi consectetur et deleniti, nisi ea
                    voluptates tenetur blanditiis fugiat deserunt! Hic.
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
