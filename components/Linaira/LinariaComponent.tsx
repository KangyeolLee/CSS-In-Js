import CodeExample from './CodeExample';
import * as Linaria from './style';

const LinariaComponent = () => {
  return (
    <>
      <Linaria.Title>
        Linaira <Linaria.Tag>zero-runtime</Linaria.Tag>
      </Linaria.Title>
      <Linaria.Container>
        <CodeExample />
        <Linaria.Description>설명</Linaria.Description>
      </Linaria.Container>
    </>
  );
};

export default LinariaComponent;
