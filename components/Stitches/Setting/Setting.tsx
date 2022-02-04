import useCollapsible from '../../../hooks/useCollapsible';
import * as Stitches from '../style';

const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Stitches.Collapsible>
      <Stitches.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>설치방법</Stitches.CollapsibleHeader>
      <Stitches.CollapsibleContent open={open}>내용...</Stitches.CollapsibleContent>
    </Stitches.Collapsible>
  );
};

export default Setting;
