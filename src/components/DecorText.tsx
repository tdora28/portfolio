import React from 'react';
import { fontDisplay } from '@/utilities/font';

type DecorTextProps = {
  text: string;
};

const DecorText = (props: DecorTextProps) => {
  return <div className={`${fontDisplay} decor-text`}>{props.text}</div>;
};

export default DecorText;
