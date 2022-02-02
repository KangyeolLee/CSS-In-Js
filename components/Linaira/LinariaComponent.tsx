import CodeExample from './CodeExample';
import * as Linaria from './style';

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
        <Linaria.Description>설명</Linaria.Description>
      </Linaria.Container>
    </>
  );
};

export default LinariaComponent;
