import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts Agency.</h1>
                <p className={styles.desc}>
                    We bring your ideas to life with innovative design and
                    strategy. Our team of experts is dedicated to delivering
                    exceptional results that help your business thrive in a
                    competitive landscape.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Get Started</button>
                    <button className={styles.button}>Learn More</button>
                </div>
                <div className={styles.brands}>
                    <Image
                        src="/brands.png"
                        alt="home"
                        fill
                        className={styles.brandImg}
                        priority
                    />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/hero.gif"
                    alt="hero"
                    fill
                    className={styles.heroImg}
                    priority
                />
            </div>
        </div>
    );
};

export default Home;
