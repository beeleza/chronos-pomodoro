import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  noPadding?: boolean;
  className?: string;
};

export function Container({
  children,
  size = "md",
  noPadding = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
      ${styles.containerWrapper} 
      ${styles[size]}
      ${className}
    `}
    >
      <div className={`${styles.content} ${noPadding ? styles.noPadding : ""}`}>
        {children}
      </div>
    </div>
  );
}

export function ContainerFluid({
  children,
  noPadding = false,
}: ContainerProps) {
  return (
    <div className={styles.containerWrapper}>
      <div className={`${styles.fluid} ${noPadding ? styles.noPadding : ""}`}>
        {children}
      </div>
    </div>
  );
}
