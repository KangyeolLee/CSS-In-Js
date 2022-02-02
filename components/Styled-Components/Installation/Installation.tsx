import useCollapsible from '../../../hooks/useCollapsible';
import * as Styled from '../style';

const Installation = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>
        설치방법 (Next + Typescript)
      </Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>
        <Styled.CodeExample>
          <Styled.CodeVariable>
            npm install styled-components @types/styled-components babel-plugin-styled-components
          </Styled.CodeVariable>
          <br />
          <Styled.CodeRemark>{'// @types/styled-components : 타입스크립트 지원'}</Styled.CodeRemark>
          <br />
          <Styled.CodeRemark>{'// babel-plugin-styled-components : SSR 시 스타일 적용 지원'}</Styled.CodeRemark>
        </Styled.CodeExample>
      </Styled.CollapsibleContent>
    </Styled.Collapsible>
  );
};

export default Installation;
