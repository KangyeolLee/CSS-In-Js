import * as Stitches from '../style';

const Description = () => {
  return (
    <Stitches.Description>
      <li>
        <Stitches.Quotation>runtime</Stitches.Quotation>과 <Stitches.Quotation>zero runtime</Stitches.Quotation>의
        중간의 포지셔닝을 주장. 즉 런타임을 아예 배제하는 것은 아니나 동적 스타일에 따른{' '}
        <Stitches.Quotation>interpolation</Stitches.Quotation>의 최소화를 추구
      </li>
      <li>
        이는 <Stitches.Quotation>styled-components</Stitches.Quotation>에서 완전한 동적 스타일링이 가능한 것과 달리
        사전에 <Stitches.Quotation>variants</Stitches.Quotation>에 정의한 값에 한해서만 동적 스타일링이 가능
      </li>
      <li>
        따라서 미리 정의한 값에 한해서만 런타임에 동적 스타일링을 허용하도록 하여 최적화를 진행해 최대한{' '}
        <Stitches.Quotation>zero runtime</Stitches.Quotation>을 표방하는 방식
      </li>
      <li>
        사용방식이 <Stitches.Quotation>styled-components</Stitches.Quotation>과 비교시 살짝 상이함
      </li>
    </Stitches.Description>
  );
};

export default Description;
