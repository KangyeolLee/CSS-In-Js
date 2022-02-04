import useCollapsible from '../../../hooks/useCollapsible';
import * as Linaria from '../style';
const Usage = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사용방법</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>내용...</Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Usage;
