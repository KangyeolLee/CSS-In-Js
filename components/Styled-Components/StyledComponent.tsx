import CodeExample from './CodeExample';
import Description from './Description';
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
        <Description />
      </Styled.Container>
    </>
  );
};

export default StyledComponents;
