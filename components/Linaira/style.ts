import { styled } from '@linaria/react';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  gap: 15px;
`;

export const Title = styled.h3`
  margin: 2rem 0 0 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    opacity: 0.65;
    text-decoration: underline;
  }
`;

export const CodeExample = styled.div`
  background-color: #cf1553;
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 250px;

  * {
    font-family: sans-serif;
  }

  .prettyprint {
    background-color: #cf1553;
  }
`;

export const CodeKeyword = styled.span`
  color: #7ee787;
`;

export const CodeVariable = styled.span`
  color: #c9d1d9;
`;

export const CodeProperties = styled.span<{ isBlock?: boolean }>`
  color: #79c0ff;
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline')};
`;

export const CodeTabIndent = styled.div`
  margin-left: 15px;
`;

export const CodeRemark = styled.span`
  color: #52fdaf;
`;

export const Description = styled.ul`
  font-size: 14px;
  border: 1px solid #cf1553;
  padding: 15px;
  margin: 0;
  border-radius: 4px;

  > li {
    margin-left: 15px;
    line-height: 25px;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #cf1553;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  margin-left: 10px;
`;

export const Quotation = styled.span`
  padding: 2px 4px;
  background-color: #ededed;
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  border-radius: 4px;
  color: #222;
`;

export const Collapsible = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const CollapsibleHeader = styled.div`
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid #cf1553;
  font-weight: bold;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const CollapsibleContent = styled.div<{ open: boolean }>`
  background-color: #cf1553;
  color: #fff;
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: ${({ open }) => (open ? 'block' : 'none')};

  .prettyprint {
    border: 1px solid #ededed;
    background-color: #cf1553;
  }
`;

export const SettingsHint = styled.li`
  color: #222;
  margin: -30px !important;
  margin-bottom: 0 !important;
  padding: 15px;
  list-style-position: inside;
  background-color: #fff;
`;
