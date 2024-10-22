import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    const stats = [
        { value: "10 K+", label: "Years of Experience" },
        { value: "500+", label: "Successful Projects" },
        { value: "300+", label: "Happy Clients" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subTitle}>About Our Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver, and
                    better.
                </h1>
                <p className={styles.desc}>
                    With a passion for innovation and a commitment to
                    excellence, our team delivers creative solutions tailored to
                    your unique needs. We believe in the power of collaboration
                    to drive success.
                </p>
                <div className={styles.boxes}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.box}>
                            <h1>{stat.value}</h1>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="About Our Agency"
                    className={styles.img}
                    fill
                />
            </div>
        </div>
    );
};

export default AboutPage;
