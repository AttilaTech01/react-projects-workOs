import { ReactNode } from 'react';
import { GoSync } from 'react-icons/go';

export interface ButtonProps {
    children: ReactNode,
    className?: string,
    loading?: boolean,
    onClick: () => void
}

function Button({
  children,
  className,
  loading,
  onClick
}: ButtonProps) {

  return (
    <button className={className} onClick={onClick} disabled={loading}>
      {loading ? <GoSync /> : children}
    </button>
  );
}

export default Button;