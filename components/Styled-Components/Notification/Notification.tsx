import useCollapsible from '../../../hooks/useCollapsible';
import * as Styled from '../style';

const Notification = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Styled.Collapsible>
      <Styled.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>특이사항</Styled.CollapsibleHeader>
      <Styled.CollapsibleContent open={open}>
        <p>
          # 초기렌더링 최적화를 위해 현재 화면에서 필요한 CSS만 효율적으로 먼저 로딩하기 위해 이를 추출하는 것을{' '}
          <Styled.Quotation>Critical CSS</Styled.Quotation>라고 한다.
        </p>
        <p>
          # <Styled.Quotation>Critical CSS</Styled.Quotation>를 추출하기 위한 작업을 사전설정 탭에서 바벨과{' '}
          <Styled.Quotation>_document.tsx</Styled.Quotation> 파일에 작성했다.
        </p>
        <p>
          # styled-components는 dev모드에서는 DOM {'<style>'}태그에 스타일을 삽입하여 DOM을 직접 수정하는 방식을 취한다.
          그러나 production모드에서는 <Styled.Quotation>CSSStyleSheet.insertRule()</Styled.Quotation>을 사용하여 CSSOM을
          수정하는 방식으로 효율을 올린다.
        </p>
        <p>
          # DOM을 직접 수정하는 방식은 개발 시 디버깅에 확인이 좀 더 편리하지만 렌더링 트리를 형성하는 과정이 매번
          갱신되기에 프로덕션에서는 CSSOM을 직접 수정하여 DOM트리 파싱에 소요되는 시간을 최소화한 것으로 파악
        </p>
      </Styled.CollapsibleContent>
    </Styled.Collapsible>
  );
};

export default Notification;
