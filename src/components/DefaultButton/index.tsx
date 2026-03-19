import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  children?: React.ReactNode;
  color?: 'green' | 'red';
  variant?: 'default' | 'outline';
  size?: 'default' | 'small' | 'large';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  children,
  color = 'green',
  variant = 'default',
  size = 'default',
  className,
  ...props
}: DefaultButtonProps) {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[color]} 
        ${styles[variant]}
        ${styles[size]}
        ${className || ''}
      `}
      {...props}
    >
      <span className={styles.icon}>{icon}</span>
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
}