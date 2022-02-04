import useCollapsible from '../../../hooks/useCollapsible';
import * as Styled from '../style';
const Usage = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사용방법</Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>ㅎㅎ</Styled.CollapsibleContent>
    </Styled.Collapsible>
  );
};

export default Usage;
