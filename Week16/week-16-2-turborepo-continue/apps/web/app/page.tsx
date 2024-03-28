import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
    return (
        <div className={styles.main}>
            hello next js
            <Button appName="web-app" className={styles.button}>
                <span>NextJs</span>
            </Button>
        </div>
    );
}
