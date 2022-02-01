import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: 10px;
  gap: 15px;
`;

export const Title = styled.h3`
  margin: 2rem 0 0 0;
`;

export const CodeExample = styled.div`
  background-color: rgb(29, 31, 39);
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
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

export const Description = styled.div`
  border: 1px solid #1a7cff;
  padding: 15px;
  border-radius: 4px;
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
`;
