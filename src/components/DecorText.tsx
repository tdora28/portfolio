import React from 'react';
import { fontDisplay } from '@/utilities/font';

type DecorTextProps = {
  text: string;
  position: 'center' | 'right';
};

const DecorText = (props: DecorTextProps) => {
  return <div className={`${fontDisplay} decor-text ${props.position === 'center' ? 'decor-text-center' : 'decor-text-right'}`}>{props.text}</div>;
};

export default DecorText;
