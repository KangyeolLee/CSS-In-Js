import { useState } from 'react';

const useCollapsible = () => {
  const [open, setOpen] = useState(false);
  const handleClickOnCollapsibleHeader = () => {
    setOpen(!open);
  };
  return {
    open,
    handleClickOnCollapsibleHeader,
  } as const;
};

export default useCollapsible;
