import { useRef } from 'react';
import clsx from 'clsx';
import { useButton, AriaButtonProps } from 'react-aria';
import styles from './Button.module.css';

export interface ButtonProps extends AriaButtonProps<'button'> {
  variants?: 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small';
}

export const Button = ({
  variants = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      {...buttonProps}
      className={clsx(
        styles.button,
        styles[variants],
        styles[size],
        buttonProps.className,
      )}
      ref={ref}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};
