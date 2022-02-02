import * as Linaria from '../style';

const Description = () => {
  return (
    <Linaria.Description>
      <li>
        동적 스타일링 시 생기는 <Linaria.Quotation>runtime 오버헤드</Linaria.Quotation> 문제를 방지하고자 다시{' '}
        <Linaria.Quotation>zero runtime</Linaria.Quotation> 개념을 주장
      </li>
      <li>다만 한 가지 과제는 런타임의 동작은 없으면서 동적인 스타일링 제어를 지원해야 함</li>
      <li>
        이를 위해 <Linaria.Quotation>Linaria</Linaria.Quotation>는 <Linaria.Quotation>Babel plugin</Linaria.Quotation>과{' '}
        <Linaria.Quotation>Webpack loader</Linaria.Quotation>를 통해 사용된 css를 추출하고{' '}
        <Linaria.Quotation>빌드타임</Linaria.Quotation>에 정적인 스타일시트를 생성
      </li>
      <li>
        바벨과 웹팩의 도움을 받아 정적인 스타일시트를 생성하지만, 동적 스타일링 지원은 내부적으로{' '}
        <Linaria.Quotation>CSS Variable</Linaria.Quotation>을 이용해 변경 시 새로운 스타일시트 생성이 아닌 CSS Variable
        값만 수정하는 방식
      </li>
      <li>CSS Variable을 사용하기 때문에 IE 브라우저는 지원하지 않음</li>
      <li>
        사용방식은 <Linaria.Quotation>styled-components</Linaria.Quotation>와 대부분 동일하나{' '}
        <Linaria.Quotation>styled</Linaria.Quotation> 객체가 <Linaria.Quotation>export default</Linaria.Quotation>가
        아님
      </li>
    </Linaria.Description>
  );
};

export default Description;
