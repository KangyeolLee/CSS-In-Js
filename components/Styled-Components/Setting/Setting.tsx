import useCollapsible from '../../../hooks/useCollapsible';
import { babel, setting } from '../codes';
import * as Styled from '../style';

const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사전설정</Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>
        <Styled.Description>
          <Styled.SettingsHint>
            Next는 전체 애플리케이션 생명주기에서 서버 사이드와 클라이언트 사이드가 일정 영역에 공존하기 때문에 단순
            런타임에서만 <Styled.Quotation>styled-components</Styled.Quotation>를 적용하는 경우 CSS가 제대로 적용되지
            않는 이슈가 있음 <Styled.Quotation>(Warning: Prop {'className'} did not match)</Styled.Quotation>
          </Styled.SettingsHint>
          <Styled.SettingsHint>
            따라서 서버 사이드에서 사용되는 CSS를 미리 추출하여 스타일을 적용하기 위한 바벨 설정과{' '}
            <Styled.Quotation>_document.tsx</Styled.Quotation> 파일 오버라이딩이 필요
          </Styled.SettingsHint>
        </Styled.Description>
        <Styled.CodeExample>
          <Styled.CodeRemark>{'// .babelrc'}</Styled.CodeRemark>
          <pre className='prettyprint'>{babel}</pre>
          <br />
          <Styled.CodeRemark>{'// pages/_document.tsx'}</Styled.CodeRemark>
          <pre className='prettyprint'>{setting}</pre>
        </Styled.CodeExample>
      </Styled.CollapsibleContent>
    </Styled.Collapsible>
  );
};

export default Setting;
