import useCollapsible from '../../../hooks/useCollapsible';
import { babel } from '../code';
import * as Linaria from '../style';
const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사전설정</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>
        <Linaria.Description>
          <Linaria.SettingsHint>
            linaira는 babel과 webpack을 통해 빌드타임에 CSS를 추출하고 생성하기 때문에 바벨 설정이 별도로 필요
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            바벨 설정은 linaria 관련 패키지를 설치할 때 같이 설치한{' '}
            <Linaria.Quotation>@linaria/babel-preset</Linaria.Quotation>이 그 역할을 수행하고 바벨 설정 파일 preset
            부분에 이를 명시해주면 됨
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            다만 Next 12버전에서 <Linaria.Quotation>SWC</Linaria.Quotation>라는 러스트 기반 컴파일러 옵션을 제공하는데
            프로젝트에 바벨 설정 파일이 있다면 이를 무시. 현재까지 linaria 측에서는 SWC에 대한 지원 여부는 추후 플러그인
            형태 등으로 제공될 것으로 추측되나 아직까진 linaria를 사용한다면 Next의 SWC 컴파일러는 사용 불가
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            <Linaria.Quotation>next-linaria</Linaria.Quotation> 라이브러리는 Next의{' '}
            <Linaria.Quotation>built-in-CSS</Linaria.Quotation> 지원을 사용하여 linaria 설정을 돕는데 때문에 자체적인
            커스텀 CSS 파일을 통한 스타일링은 사용 불가 (eg. XXX.module.css 등..)
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            linaria의 경우 빌드 타임에 CSS 스타일이 추출되기 때문에 별도 서버 렌더링을 위한 설정이 다음을 만족한다면
            필요로 하지 않다
            <Linaria.CodeTabIndent>
              1. 코드 스플리팅이 적용되어 있는 경우 <br />
              2. <Linaria.Quotation>mini-css-extract-plugin</Linaria.Quotation>과 같은 웹팩 플러그인을 사용하는 경우
              (여기서는 <Linaria.Quotation>next-link</Linaria.Quotation>와{' '}
              <Linaria.Quotation>@linaria/webpack-loader</Linaria.Quotation>가 해당 역할을 수행)
            </Linaria.CodeTabIndent>
          </Linaria.SettingsHint>
        </Linaria.Description>
        <Linaria.CodeExample>
          <Linaria.CodeRemark>{'// .babelrc'}</Linaria.CodeRemark>
          <pre className='prettyprint'>{babel}</pre>
        </Linaria.CodeExample>
      </Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Setting;
