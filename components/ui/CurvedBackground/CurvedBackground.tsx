import { ReactNode } from 'react';
import variables from 'styles/variables.module.scss';

interface Props {
  children?: ReactNode;
  bgColor?: string;
}

function CurvedBackground({ children, bgColor }: Props) {
  const background = bgColor ? bgColor : variables.colorBgHighlighted;

  return (
    <>
      <svg
        style={{ marginBottom: '-5px' }}
        viewBox="0 0 500 30"
        preserveAspectRatio="none">
        <path
          d="M-39.68,29.09 C184.05,-9.90 280.31,-2.90 544.06,29.09 L511.56,32.08 L-16.56,29.09 Z"
          fill={background}
        />
      </svg>

      <div style={{ backgroundColor: background }}>{children}</div>

      <svg
        style={{ marginTop: '-5px' }}
        viewBox="0 0 500 35"
        preserveAspectRatio="none">
        <path
          d="M-34.69,3.10 C199.68,36.09 272.81,38.09 549.06,2.11 L500.00,0.00 L0.00,0.00 Z"
          fill={background}
        />
      </svg>
    </>
  );
}

export default CurvedBackground;
