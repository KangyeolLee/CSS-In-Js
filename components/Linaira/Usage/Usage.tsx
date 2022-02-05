import useCollapsible from '../../../hooks/useCollapsible';
import { example01, example02, example03 } from '../code';
import * as Linaria from '../style';
const Usage = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사용방법</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>
        <Linaria.Description>
          <Linaria.SettingsHint>
            styled-components와 비슷하게 스타일링을 제어할 값을 <Linaria.Quotation>props</Linaria.Quotation>로 넘겨준다
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            다만 styled-components와 달리 <Linaria.Quotation>css</Linaria.Quotation>가 반환하는 값이 다르다는 것을
            유의해야 한다. linaria에서도 <Linaria.Quotation>@linaria/core</Linaria.Quotation>로 부터{' '}
            <Linaria.Quotation>css</Linaria.Quotation>를 import 해서 사용할 수 있지만 해당 모듈이 반환하는 값은 스타일
            속성이 아닌 일련의 클래스 명을 반환받는다.
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            이는 linaria에서 스타일이 이미 빌드 타임에 추출되어 삽입되어 있기 때문에 해당 클래스명에 일치하는 스타일이
            이미 마련되어 있고, css 모듈은 그에 맞는 클래스명을 돌려주는 것이다.
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            따라서 styled-components에서와 같이 다중 스타일을 리턴하려고 할 때{' '}
            <Linaria.Quotation>css</Linaria.Quotation>로 감싸 멀티라인으로 스타일을 선언할 수 없다.
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            또한 <Linaria.Quotation>null</Linaria.Quotation>이나 <Linaria.Quotation>undefined</Linaria.Quotation>값을
            지정하는 경우 내부적인 처리를 styled-components와 같이 따로 처리하지 않기에 에러가 발생한다.
          </Linaria.SettingsHint>
        </Linaria.Description>
        <Linaria.CodeExample>
          <pre className='prettyprint'>{example01}</pre>
          <pre className='prettyprint'>{example02}</pre>
          <pre className='prettyprint'>{example03}</pre>
        </Linaria.CodeExample>
      </Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Usage;
