import * as Linaria from '../style';

const CodeExample = () => {
  return (
    <Linaria.CodeExample>
      <Linaria.CodeKeyword>import </Linaria.CodeKeyword>
      <Linaria.CodeVariable>{`{ styled }`} </Linaria.CodeVariable>
      <Linaria.CodeKeyword>from </Linaria.CodeKeyword>
      <Linaria.CodeVariable> &apos;@linaria/react&apos;</Linaria.CodeVariable>
      <div style={{ marginTop: '10px' }}>
        <Linaria.CodeKeyword>const</Linaria.CodeKeyword>
        <Linaria.CodeVariable>
          {' '}
          Container <Linaria.CodeProperties> = </Linaria.CodeProperties> styled.section
          <Linaria.CodeProperties>`</Linaria.CodeProperties>
        </Linaria.CodeVariable>
      </div>
      <Linaria.CodeTabIndent>
        <Linaria.CodeProperties isBlock>display: flex;</Linaria.CodeProperties>
        <Linaria.CodeProperties isBlock>margin-top: 15px;</Linaria.CodeProperties>
        <Linaria.CodeProperties isBlock>gap: 15px;</Linaria.CodeProperties>
      </Linaria.CodeTabIndent>
      <Linaria.CodeProperties>`</Linaria.CodeProperties>
    </Linaria.CodeExample>
  );
};

export default CodeExample;
