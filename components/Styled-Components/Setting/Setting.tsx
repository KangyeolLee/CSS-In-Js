import useCollapsible from '../../../hooks/useCollapsible';
import { babel, setting } from '../codes';
import * as Styled from '../style';

const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사전설정</Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>
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
