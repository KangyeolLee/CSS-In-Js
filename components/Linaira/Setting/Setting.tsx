import useCollapsible from '../../../hooks/useCollapsible';
import * as Linaria from '../style';
const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사전설정</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>내용...</Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Setting;
