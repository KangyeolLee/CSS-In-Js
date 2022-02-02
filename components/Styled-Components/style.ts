import styled, { css } from 'styled-components';

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
  background-color: rgb(29, 31, 39);
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 250px;
`;

export const CodeKeyword = styled.span`
  color: rgb(209, 148, 158);
`;

export const CodeVariable = styled.span`
  color: rgb(197, 200, 198);
`;

export const CodeProperties = styled.span<{ isBlock?: boolean }>`
  color: rgb(245, 184, 61);
  ${({ isBlock }) =>
    isBlock &&
    css`
      display: block;
    `}
`;

export const CodeTabIndent = styled.div`
  margin-left: 15px;
`;

export const Description = styled.ul`
  font-size: 14px;
  border: 1px solid #1a7cff;
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
  background-color: rgb(29, 31, 39);
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
`;
