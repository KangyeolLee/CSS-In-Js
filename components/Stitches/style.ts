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
  border: '1px solid #989b9d',
  padding: '15px',
  borderRadius: '4px',
  fontSize: '14px',
  minWidth: '250px',

  '.prettyprint': {
    backgroundColor: '#989b9d',
  },

  '*': {
    fontFamily: 'sans-serif',
  },
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

export const CodeRemark = styled('span', {
  color: '#0c7c49',
});

export const Description = styled('ul', {
  fontSize: '14px',
  border: '1px solid #989b9d',
  padding: '15px',
  margin: 0,
  borderRadius: '4px',
  width: '100%',

  '> li': {
    marginLeft: '15px',
    lineHeight: '25px',
  },
});

export const Tag = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #989b9d',
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
  color: '#222',
});

export const Collapsible = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '15px',
});

export const CollapsibleHeader = styled('div', {
  padding: '15px',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
  border: '1px solid #989b9d',
  fontWeight: 'bold',

  '&:hover': {
    opacity: 0.85,
    cursor: 'pointer',
  },
});

export const CollapsibleContent = styled('div', {
  variants: {
    open: { true: { display: 'block' }, false: { display: 'none' } },
  },
  backgroundColor: '#989b9d',
  color: '#fff',
  padding: '15px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
});

export const SettingsHint = styled('li', {
  color: '#222',
  margin: '-30px !important',
  marginBottom: '0 !important',
  padding: '15px',
  listStylePosition: 'inside',
  backgroundColor: '#fff',
});
