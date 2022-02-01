import * as Styled from '../style';

const CodeExample = () => {
  return (
    <Styled.CodeExample>
      <Styled.CodeKeyword>import </Styled.CodeKeyword>
      <Styled.CodeVariable>styled </Styled.CodeVariable>
      <Styled.CodeKeyword>from </Styled.CodeKeyword>
      <Styled.CodeVariable> &apos;styled-components&apos;</Styled.CodeVariable>
      <div style={{ marginTop: '10px' }}>
        <Styled.CodeKeyword>const</Styled.CodeKeyword>
        <Styled.CodeVariable>
          {' '}
          Container <Styled.CodeProperties> = </Styled.CodeProperties> styled.section
          <Styled.CodeProperties>`</Styled.CodeProperties>
        </Styled.CodeVariable>
      </div>
      <Styled.CodeTabIndent>
        <Styled.CodeProperties isBlock>display: flex;</Styled.CodeProperties>
        <Styled.CodeProperties isBlock>margin-top: 15px;</Styled.CodeProperties>
        <Styled.CodeProperties isBlock>gap: 15px;</Styled.CodeProperties>
      </Styled.CodeTabIndent>
      <Styled.CodeProperties>`</Styled.CodeProperties>
    </Styled.CodeExample>
  );
};

export default CodeExample;
