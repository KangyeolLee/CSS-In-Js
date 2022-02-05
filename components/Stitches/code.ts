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
