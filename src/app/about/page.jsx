"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    const stats = [
        { value: 10000, label: "Years of Experience" },
        { value: 500, label: "Successful Projects" },
        { value: 300, label: "Happy Clients" },
    ];

    const [animatedValues, setAnimatedValues] = useState(
        stats.map((stat) => ({ ...stat, displayValue: 0 }))
    );

    useEffect(() => {
        const animateStats = () => {
            const duration = 2000;
            const frames = 60;
            const totalFrames = Math.round((duration / 1000) * frames);
            const increments = stats.map((stat) =>
                Math.ceil(stat.value / totalFrames)
            );

            let frame = 0;
            const interval = setInterval(() => {
                if (frame < totalFrames) {
                    setAnimatedValues((prev) =>
                        prev.map((stat, index) => ({
                            ...stat,
                            displayValue: Math.min(
                                stat.displayValue + increments[index],
                                stat.value
                            ),
                        }))
                    );
                    frame++;
                } else {
                    clearInterval(interval);
                }
            }, duration / totalFrames);
        };

        animateStats();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Our Agency</h2>
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
                    {animatedValues.map((stat, index) => (
                        <div key={index} className={styles.box}>
                            <h1>
                                {stat.displayValue.toLocaleString()}{" "}
                                {index === 0 ? "+" : "+"}
                            </h1>
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
