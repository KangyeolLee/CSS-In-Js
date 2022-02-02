import CodeExample from './CodeExample';
import * as Styled from './style';

const StyledComponents = () => {
  return (
    <>
      <Styled.Title>
        <Styled.Link href='https://styled-components.com/' target='_blank'>
          styled-components
        </Styled.Link>
        <Styled.Tag>runtime</Styled.Tag>
      </Styled.Title>
      <Styled.Container>
        <CodeExample />
        <Styled.Description>설명</Styled.Description>
      </Styled.Container>
    </>
  );
};

export default StyledComponents;
