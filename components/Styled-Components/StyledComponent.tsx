import CodeExample from './CodeExample';
import Description from './Description';
import Installation from './Installation';
import Notification from './Notification';
import Setting from './Setting';
import * as Styled from './style';
import Usage from './Usage';

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
      <Installation />
      <Setting />
      <Usage />
      <Notification />
    </>
  );
};

export default StyledComponents;
