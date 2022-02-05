import useCollapsible from '../../../hooks/useCollapsible';
import * as Linaria from '../style';
const Installation = () => {
  const { open, handleClickOnCollapsibleHeader } = useCollapsible();
  return (
    <Linaria.Collapsible>
      <Linaria.CollapsibleHeader onClick={handleClickOnCollapsibleHeader}>설치방법</Linaria.CollapsibleHeader>
      <Linaria.CollapsibleContent open={open}>
        <Linaria.Description>
          <Linaria.SettingsHint>
            각 라이브러리는 모두 최신버전으로 설치 (3.0.0-beta.15), next-linaria의 경우 1.0.0-beta
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            next-link가 1.0.0 버전인 경우에는 linaria@3 버전과만 호환이 되고 별도로 @linaria/webpack-loader를 필요
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            next-link 깃허브 페이지에서는 linaria 패키지 설치도 명시되어 있지만, 1.0.0-beta 버전에서는 해당 패키지
            불필요
          </Linaria.SettingsHint>
          <Linaria.SettingsHint>
            참고: <Linaria.Link href='https://github.com/Mistereo/next-linaria'>next-link </Linaria.Link>
            <Linaria.Link href='https://github.com/callstack/linaria/issues/795'> next + linaria</Linaria.Link>
          </Linaria.SettingsHint>
        </Linaria.Description>
        <Linaria.CodeExample>
          <Linaria.CodeVariable>
            npm install @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker @linaria/webpack-loader
            next-linaria
          </Linaria.CodeVariable>
          <br />
          <Linaria.CodeRemark>
            {'// @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker : linaria 필수 라이브러리'}
          </Linaria.CodeRemark>
          <br />
          <Linaria.CodeRemark>
            {'// @linaria/webpack-loader @linaria/next-linaria : next에서 linaria 적용을 위한 라이브러리'}
          </Linaria.CodeRemark>
        </Linaria.CodeExample>
      </Linaria.CollapsibleContent>
    </Linaria.Collapsible>
  );
};

export default Installation;
