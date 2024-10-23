import Image from "next/image";
import styles from "./postCard.module.css";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        src={"/hero.gif"}
                        alt="post image"
                        fill
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>title</div>
                <div className={styles.dec}>dec</div>
                <div className={styles.link}>Read More</div>
            </div>
        </div>
    );
};

export default PostCard;
