export const babel = `
{
  "presets": ["next/babel", "@linaria"],
}
`;

export const example01 = `
import { styled } from '@linaria/react';

export const CodeProperties = styled.span<{ isBlock?: boolean }>\`
  color: #79c0ff;
  display: \${({ isBlock }) => (isBlock ? 'block' : 'inline')};
\`;
`;

export const example02 = `
// linaria에서 css 모듈은 @linaria/core에 들어있는데
// styled-components에서와 같이 아래처럼 사용은 불가하다
import { css } from '@linaria/core
import { styled } from '@linaria/react';

export const CodeProperties = styled.span<{ isBlock?: boolean }>\`
  color: #79c0ff;
  display: \${({ isBlock }) => isBlock ? css\`
    display: block;
  \`};
\`;
`;

export const example03 = `
// 비슷하게 css를 이용해 멀티 스타일링을 반환하려면 아래처럼 할 수 있다
import { css, cx } from "@linaria/core";
import { styled } from "@linaria/react";

const variants = {
  primary: css\`
    color: red;
    text-transform: uppercase;
  \`,
};

const defaultClass = css\`
  background-color: pink,
\`;

const BaseText = styled(({ className, variant }) => {
  return <span className={cx(className, variants[variant] ?? defaultClass)}>;
})\`\`;
`;
