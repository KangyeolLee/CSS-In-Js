import useCollapsible from '../../../hooks/useCollapsible';
import { example01 } from '../codes';
import * as Styled from '../style';
const Usage = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사용방법</Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>
        <Styled.Description>
          <Styled.SettingsHint>
            동적 스타일링을 위해서는 스타일링을 제어할 값을 <Styled.Quotation>props</Styled.Quotation> 수준으로 넘겨준다
          </Styled.SettingsHint>
          <Styled.SettingsHint>
            넘겨받은 <Styled.Quotation>props</Styled.Quotation>를 통해 다양한 수준에서 동적으로 스타일링을 제어할 수
            있다.
          </Styled.SettingsHint>
          <Styled.SettingsHint>
            유효하지 않은 값 <Styled.Quotation>null</Styled.Quotation> <Styled.Quotation>undefined</Styled.Quotation>을
            반환해도 내부적으로 이를 처리하기에 에러가 발생하지 않는다 ex. 조건이 참일 때{' '}
            <Styled.Quotation>css</Styled.Quotation> 만 리턴하는 경우
          </Styled.SettingsHint>
        </Styled.Description>
        <Styled.CodeExample>
          <pre className='prettyprint'>{example01}</pre>
        </Styled.CodeExample>
      </Styled.CollapsibleContent>
    </Styled.Collapsible>
  );
};

export default Usage;
