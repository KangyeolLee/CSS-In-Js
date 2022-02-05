import useCollapsible from '../../../hooks/useCollapsible';
import * as Stitches from '../style';
const Installation = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Stitches.Collapsible>
      <Stitches.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>설치방법</Stitches.CollapsibleHeader>
      <Stitches.CollapsibleContent open={open}>
        <Stitches.CodeExample>
          <Stitches.CodeVariable>npm install @stitches/react</Stitches.CodeVariable>
        </Stitches.CodeExample>
      </Stitches.CollapsibleContent>
    </Stitches.Collapsible>
  );
};

export default Installation;
