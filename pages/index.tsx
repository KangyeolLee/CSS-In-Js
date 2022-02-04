import type { NextPage } from 'next';
import StyledComponents from '../components/Styled-Components';
import LinariaComponent from '../components/Linaira/LinariaComponent';
import StitchesComponent from '../components/Stitches/StitchesComponent';
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: 'auto',
      }}>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>5st Generation: CSS-In-JS</h1>
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        5세대 (이상) CSS-In-Js 방식의 라이브러리 중 <br />
        runtime / zero-runtime / near zero-runtime 방식의 라이브러리를 <br />
        각각 간단하게 사용해보고 비교 분석해봅시다. <br />
        (Styled Components는 엄밀히 4세대지만 CSS-In-Js의 대표격으로 사용) <br />
        (각각의 영역은 해당하는 CSS-In-Js 라이브러리로 스타일 작성) <br />
        (설치/설정/사용사례들은 모두 (Next + Typescript) 기준으로 작성)
      </div>

      <div style={{ padding: '15px' }}>
        <StyledComponents />
        <LinariaComponent />
        <StitchesComponent />
      </div>
      <Script src='https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=js&skin=desert'></Script>
    </div>
  );
};

export default Home;
