import { ReactNode } from 'react';
import { GoSync } from 'react-icons/go';

export interface ButtonProps {
    children: ReactNode,
    loading: boolean,
    onClick: () => void
}

function Button({
  children,
  loading,
  onClick
}: ButtonProps) {

  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? <GoSync /> : children}
    </button>
  );
}

export default Button;