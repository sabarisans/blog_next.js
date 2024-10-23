import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={"/contact.png"} className={styles.img} alt="contact" fill />
            </div>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <input type="text" placeholder="Username" name="" id="" />
                    <input
                        type="text"
                        placeholder="Email address"
                        name=""
                        id=""
                    />
                    <input
                        type="text"
                        placeholder="Phone number (optional)"
                        name=""
                        id=""
                    />
                    <textarea
                        name=""
                        cols={"10"}
                        rows={"10"}
                        placeholder="Message"
                        id=""
                        
                    ></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
