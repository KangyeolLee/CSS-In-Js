import useCollapsible from '../../../hooks/useCollapsible';
import * as Stitches from '../style';

const Notification = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Stitches.Collapsible>
      <Stitches.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>특이사항</Stitches.CollapsibleHeader>
      <Stitches.CollapsibleContent open={open}>
        <p>
          # stitches에서 <Stitches.Quotation>Critical CSS</Stitches.Quotation> 추출을 위한 설정은 자체 라이브러레에서
          제공하는 함수로 비교적 간단하게 설정이 가능했다.
        </p>
        <p>
          # 이는 공식문서에서 소개된 방식을 그대로 옮겨온 것인데, 다만{' '}
          <Stitches.Quotation>_document.tsx</Stitches.Quotation>에서 {'<Head> 태그 안의 <style> 태그에'} 직접 내용을
          삽입하는 것을 볼 수 있다.
        </p>
        <p>
          # 때문에 style-components나 linaria에서와 달리 프로덕션 모드에서도 해당 스타일을 {'<style>'}태그 내에서 확인이
          가능하다.
        </p>
      </Stitches.CollapsibleContent>
    </Stitches.Collapsible>
  );
};

export default Notification;
