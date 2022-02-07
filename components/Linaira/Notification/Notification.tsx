import useCollapsible from '../../../hooks/useCollapsible';
import { criticalCSS } from '../code';
import * as Linaria from '../style';

const Notification = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>특이사항</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>
        <p>
          # linaria는 기본적으로 빌드 시에 <Linaria.Quotation>mini-css-extract-plugin</Linaria.Quotation>과 같은 웹팩
          플러그인을 사용하여 <Linaria.Quotation>Critical CSS</Linaria.Quotation>를 추출한다.
        </p>
        <p>
          # 우리의 예제에서는 <Linaria.Quotation>next-link</Linaria.Quotation>를 통해 이 과정이 수행되고 있다.
        </p>
        <p>
          # 다만 코드 스플리팅이 적용되어 있지 않거나 웹팩 플러그인의 도움을 받지 않는 경우에는{' '}
          <Linaria.Quotation>Critical CSS</Linaria.Quotation>추출을 위해서는{' '}
          <Linaria.Quotation>@linaria/server</Linaria.Quotation> 패키지의 지원이 필요하다.
        </p>
        <pre className='prettyprint'>{criticalCSS}</pre>
        <p>
          # <Linaria.Quotation>collect</Linaria.Quotation>는 <Linaria.Quotation>html</Linaria.Quotation>(react의 경우{' '}
          {'<App />으로 렌더되는 결과'})과 <Linaria.Quotation>css</Linaria.Quotation>를 받아 실제 HTML에서 사용된 것을{' '}
          <Linaria.Quotation>critical</Linaria.Quotation>, 그 외 나머지를 <Linaria.Quotation>other</Linaria.Quotation>로
          구분한다.
        </p>
        <p># linaria 역시 프로덕션 모드에서는 CSSOM에 관련 스타일을 삽입하는 방식을 취한다.</p>
      </Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Notification;
