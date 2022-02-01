import * as Stitches from '../style';

const CodeExample = () => {
  return (
    <Stitches.CodeExample>
      <Stitches.CodeKeyword>import </Stitches.CodeKeyword>
      <Stitches.CodeVariable>{`{ styled }`} </Stitches.CodeVariable>
      <Stitches.CodeKeyword>from </Stitches.CodeKeyword>
      <Stitches.CodeVariable> &apos;@stitches/react&apos;</Stitches.CodeVariable>
      <div style={{ marginTop: '10px' }}>
        <Stitches.CodeKeyword>const</Stitches.CodeKeyword>
        <Stitches.CodeVariable>
          {' '}
          Container <Stitches.CodeProperties> = </Stitches.CodeProperties> styled(
          <Stitches.CodeProperties>&apos;section&apos;, </Stitches.CodeProperties>
          <Stitches.CodeVariable>{`{`}</Stitches.CodeVariable>
        </Stitches.CodeVariable>
      </div>
      <Stitches.CodeTabIndent>
        <Stitches.CodeProperties isBlock>
          <Stitches.CodeProperties isAttribute>display</Stitches.CodeProperties>: &apos;flex&apos;,
        </Stitches.CodeProperties>
        <Stitches.CodeProperties isBlock>
          <Stitches.CodeProperties isAttribute>marginTop</Stitches.CodeProperties>: &apos;15px&apos;,
        </Stitches.CodeProperties>
        <Stitches.CodeProperties isBlock>
          <Stitches.CodeProperties isAttribute>gap</Stitches.CodeProperties>: &apos;15px&apos;,
        </Stitches.CodeProperties>
      </Stitches.CodeTabIndent>
      <Stitches.CodeVariable>{`});`}</Stitches.CodeVariable>
    </Stitches.CodeExample>
  );
};

export default CodeExample;
