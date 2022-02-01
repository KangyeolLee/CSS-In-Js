import CodeExample from './CodeExample';
import * as Stitches from './style';

const StitchesComponent = () => {
  return (
    <>
      <Stitches.Title>
        Stitches <Stitches.Tag>near zero-runtime</Stitches.Tag>
      </Stitches.Title>
      <Stitches.Container>
        <CodeExample />
        <Stitches.Description>설명</Stitches.Description>
      </Stitches.Container>
    </>
  );
};

export default StitchesComponent;
