import useCollapsible from '../../../hooks/useCollapsible';
import * as Linaria from '../style';
const Installation = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>설치방법</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>내용...</Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Installation;
