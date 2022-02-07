import CodeExample from './CodeExample';
import Description from './Description';
import Installation from './Installation';
import Notification from './Notification';
import Setting from './Setting';
import * as Linaria from './style';
import Usage from './Usage';

const LinariaComponent = () => {
  return (
    <>
      <Linaria.Title>
        <Linaria.Link href='https://github.com/callstack/linaria' target='_blank'>
          Linaria
        </Linaria.Link>
        <Linaria.Tag>zero-runtime</Linaria.Tag>
      </Linaria.Title>
      <Linaria.Container>
        <CodeExample />
        <Description />
      </Linaria.Container>
      <Installation />
      <Setting />
      <Usage />
      <Notification />
    </>
  );
};

export default LinariaComponent;
