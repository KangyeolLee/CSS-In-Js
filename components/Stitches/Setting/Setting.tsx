import useCollapsible from '../../../hooks/useCollapsible';
import { config, document } from '../code';
import * as Stitches from '../style';

const Setting = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Stitches.Collapsible>
      <Stitches.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>사전설정</Stitches.CollapsibleHeader>
      <Stitches.CollapsibleContent open={open}>
        <Stitches.Description>
          <Stitches.SettingsHint>
            stitches의 경우 <Stitches.Quotation>variants</Stitches.Quotation> 프로퍼티에 동적 스타일링이 가능한 값을
            명시하는 것을 제외하면 런타임에 스타일이 생성되는 것은 동일 (다만 동적 스타일링을 명시한 값으로만 제한을
            둠으로써 최적화)
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            때문에 별도 바벨 설정이 필요 없음. styled-components의 경우엔 별도 플러그인을 통해 바벨 설정으로 SSR을
            제어했지만 stitches는 자체 설정 파일과 제공하는 함수로 제어
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            SSR 지원을 위해서는 별도로 <Stitches.Quotation>stitches.config.ts</Stitches.Quotation> 설정파일을 두는 것을
            권고 (필수아님)
          </Stitches.SettingsHint>
          <Stitches.SettingsHint>
            사용되는 스타일 시트를 분석하고 이를 가져와 <Stitches.Quotation>Head</Stitches.Quotation> 태그의{' '}
            <Stitches.Quotation>style</Stitches.Quotation> 태그에 이를 삽입하는 방식 (해당 스타일 태그의 id는
            "stitches"를 권장하나 필수는 아님)
          </Stitches.SettingsHint>
        </Stitches.Description>
        <Stitches.CodeExample>
          <Stitches.CodeRemark>{'// stitches.config.ts'}</Stitches.CodeRemark>
          <pre className='prettyprint'>{config}</pre>
          <br />
          <Stitches.CodeRemark>{'// pages/_document.tsx'}</Stitches.CodeRemark>
          <pre className='prettyprint'>{document}</pre>
        </Stitches.CodeExample>
      </Stitches.CollapsibleContent>
    </Stitches.Collapsible>
  );
};

export default Setting;
