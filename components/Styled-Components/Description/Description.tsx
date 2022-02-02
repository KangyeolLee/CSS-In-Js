import * as Styled from '../style';

const Description = () => {
  return (
    <Styled.Description>
      <li>런타임에 동작하는 CSS-In-JS 방식</li>
      <li>
        가장 초기의 스타일링을 위한 <Styled.Quotation>style.css</Styled.Quotation> 방식은 CSS를 정적으로 분석 및
        추출하는 방식으로 사실상 <Styled.Quotation>zero runtime</Styled.Quotation> 방식
      </li>
      <li>동적으로 변경되는 스타일링을 자바스크립트로 제어하기 위해 등장</li>
      <li>
        동적으로 변경되는 특성은 자바스크립트 <Styled.Quotation>runtime</Styled.Quotation>에 발생하기 때문에 동적요소가
        있을 때 마다 런타임에 동적인 스타일 생성
      </li>
      <li>스타일 계산 비용이 큰 스타일링의 경우 런타임에 동적으로 이를 생성하기에 성능상 이슈 발생 가능</li>
    </Styled.Description>
  );
};

export default Description;
