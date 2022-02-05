export const config = `
import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: { ... } // theme 외에도 utils, media 등을 설정 가능
});

// 또는 별도로 커스텀 스타일 일괄 설정이 필요 없다면 바로 getCssText를 내보내기만 해도 됨

import { createStitches } from '@stitches/react';
export const { getCssText } = createStitches();
`;

export const document = `
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
`;

export const example01 = `
import { styled } from '@stitches/react';

export const CodeProperties = styled('span', {
  color: 'rgb(150, 150, 150)',
  variants: {
    isAttribute: { true: { color: '#222' }, false: {} },
    isBlock: { true: { display: 'block' }, false: {} },
  },
});

// 이를 사용할 때
<CodeProperties isBlock /> // isBlock variants가 true 일 때의 스타일 적용
<CodeProperties /> // styled-components에선 이를 false로 인식하지만 stitches에서는 true도 false도 아님
<CodeProperties isBlock={false} /> // isBlock variants가 false 일 때의 스타일 적용
`;

export const example02 = `
// 만일 css 모듈로 스타일링을 하고 싶다면

import { css } from '@stitches/react';

export const CodeProperties = css({
  color: 'rgb(150, 150, 150)',
  variants: {
    isAttribute: { true: { color: '#222' }, false: {} },
    isBlock: { true: { display: 'block' }, false: {} },
  },
});

// 그 후 사용할 때 컴포넌트의 className에 해당 모듈을 실행 할당
<span className={CodeProperties()} />
<span className={CodeProperties({ isBlock: true })} /> // 동적 스타일링 제어
`;
