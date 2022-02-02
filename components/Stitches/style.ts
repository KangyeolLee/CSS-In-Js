import { styled } from '@stitches/react';

export const Container = styled('section', {
  display: 'flex',
  alignItems: 'flex-start',
  marginTop: '10px',
  gap: '15px',
});

export const Title = styled('h3', {
  margin: '2rem 0 0 0',
});

export const Link = styled('a', {
  textDecoration: 'none',
  color: '#000',

  '&:hover': {
    textDecoration: 'underline',
    opacity: 0.65,
  },
});

export const CodeExample = styled('div', {
  border: '1px solid hsl(208 11.3% 88.9%)',
  padding: '15px',
  borderRadius: '4px',
  fontSize: '14px',
  minWidth: '250px',
});

export const CodeKeyword = styled('span', {
  color: '#006adc',
});

export const CodeVariable = styled('span', {
  color: '#0c7792',
});

export const CodeProperties = styled('span', {
  color: 'rgb(150, 150, 150)',
  variants: {
    isAttribute: { true: { color: '#222' }, false: {} },
    isBlock: { true: { display: 'block' }, false: {} },
  },
});

export const CodeTabIndent = styled('div', {
  marginLeft: '15px',
});

export const Description = styled('ul', {
  fontSize: '14px',
  border: '1px solid #1a7cff',
  padding: '15px',
  margin: 0,
  borderRadius: '4px',

  '> li': {
    marginLeft: '15px',
    lineHeight: '25px',
  },
});

export const Tag = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid hsl(208 11.3% 88.9%)',
  padding: '5px 10px',
  borderRadius: '10px',
  fontSize: '12px',
  color: '#000',
  marginLeft: '10px',
});

export const Quotation = styled('span', {
  padding: '2px 4px',
  backgroundColor: '#ededed',
  fontSize: '13px',
  fontStyle: 'italic',
  fontWeight: 700,
  borderRadius: '4px',
});
