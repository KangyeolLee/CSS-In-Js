import Installation from './Installation';
import Usage from './Usage';
import CodeExample from './CodeExample';
import Description from './Description';
import * as Stitches from './style';
import Setting from './Setting';

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
      <Installation />
      <Setting />
      <Usage />
    </>
  );
};

export default StitchesComponent;
