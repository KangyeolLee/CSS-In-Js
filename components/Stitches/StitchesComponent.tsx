import CodeExample from './CodeExample';
import Description from './Description';
import * as Stitches from './style';

const StitchesComponent = () => {
  return (
    <>
      <Stitches.Title>
        <Stitches.Link href='https://stitches.dev/' target='_blank'>
          Stitches
        </Stitches.Link>
        <Stitches.Tag>near zero-runtime</Stitches.Tag>
      </Stitches.Title>
      <Stitches.Container>
        <CodeExample />
        <Description />
      </Stitches.Container>
    </>
  );
};

export default StitchesComponent;
