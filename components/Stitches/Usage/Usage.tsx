import useCollapsible from '../../../hooks/useCollapsible';
import { example01, example02 } from '../code';
import * as Stitches from '../style';

const Usage = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Stitches.Collapsible>
      <Stitches.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사용방법</Stitches.CollapsibleHeader>
      <Stitches.CollapsibleContent open={open}>
        <Stitches.Description>
          <Stitches.SettingsHint>
            stitches는 styled-components나 linaria와 사용방법이 살짝 다르지만 대체로 유사하다
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            가장 큰 차이는 스타일링에 있어 <Stitches.Quotation>Tagged Template</Stitches.Quotation> 방식을 사용하지 않는
            점에 있다
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            또한 내부 selector를 <Stitches.Quotation>키(문자열) : 값</Stitches.Quotation> 형태의 객체 형식으로 지정한다.
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            stitches는 앞서 말한 바와 같이 사전에 정의된 값에 한해서만 동적 스타일링이 가능한데, 이는 내부에서{' '}
            <Stitches.Quotation>variants</Stitches.Quotation>라는 프로퍼티를 통해 정의하고 동적인 스타일을 부여한다
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            <Stitches.Quotation>css</Stitches.Quotation> 모듈 역시 import 하여 사용할 수 있는데 styled-components에서
            동적 스타일링 시 컴포넌트 내부에서 스타일 조정을 위한 것과 달리{' '}
            <Stitches.Quotation>styled</Stitches.Quotation> 모듈과 동일 수준에서 스타일링을 위한 역할로 주로 사용된다
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            <Stitches.Quotation>boolean</Stitches.Quotation>값으로 동적 스타일링을 제어하는 경우 true/false를 명시해
            제어할 수 있지만 이 때 styled-components와는 달리 해당 프로퍼티를 입력하지 않았을 때 자동으로 false로
            간주되지 않는다
          </Stitches.SettingsHint>
        </Stitches.Description>
        <Stitches.CodeExample>
          <pre className='prettyprint'>{example01}</pre>
          <pre className='prettyprint'>{example02}</pre>
        </Stitches.CodeExample>
      </Stitches.CollapsibleContent>
    </Stitches.Collapsible>
  );
};

export default Usage;
