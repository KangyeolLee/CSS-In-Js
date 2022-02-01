import type { NextPage } from 'next';
import StyledComponents from '../components/Styled-Components';
import LinariaComponent from '../components/Linaira/LinariaComponent';
import StitchesComponent from '../components/Stitches/StitchesComponent';

const Home: NextPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: '30px', textAlign: 'center' }}>5st Generation: CSS-In-JS</h1>
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        5세대 (이상) Css-In-Js 방식의 라이브러리 중 <br />
        runtime / zero-runtime / near zero-runtime 방식의 라이브러리를 <br />
        각각 간단하게 사용해보고 비교 분석해봅시다. <br />
        (Styled Components는 4세대지만 Css-In-Js의 대표격으로 합류)
      </div>

      <div style={{ padding: '15px' }}>
        <StyledComponents />
        <LinariaComponent />
        <StitchesComponent />
      </div>
    </div>
  );
};

export default Home;
