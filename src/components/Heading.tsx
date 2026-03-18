import styles from './Heading.module.css'

interface HeadingProps {
    primaryTitle?: string;
    secondTitle?: string
}

export default function Heading({ primaryTitle, secondTitle }: HeadingProps) {
    return (
        <div className={styles.container}>
            <h1>{primaryTitle}</h1>
            <h1>{secondTitle}</h1>
        </div>
    );
}
