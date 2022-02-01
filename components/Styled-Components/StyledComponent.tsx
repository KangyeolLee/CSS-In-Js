import CodeExample from './CodeExample';
import * as Styled from './style';

const StyledComponents = () => {
  return (
    <>
      <Styled.Title>
        styled-components <Styled.Tag>runtime</Styled.Tag>
      </Styled.Title>
      <Styled.Container>
        <CodeExample />
        <Styled.Description>설명</Styled.Description>
      </Styled.Container>
    </>
  );
};

export default StyledComponents;
