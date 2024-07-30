import { Link } from 'react-router-dom';
import * as S from './publicStyled';
import logo2 from '/logo2.png';
/** @헤더 헤더 컴포넌트 */
export default function Header() {
  //로그인 페이지로 링크
  return (
    <>
      <S.HeaderDiv>
        <S.HeaderImg src={logo2}></S.HeaderImg>
        <S.LoginSerchDiv>
          <Link to="#">
            <S.HeaderTextDiv>LOGIN / SIGN IN</S.HeaderTextDiv>
          </Link>
          <Link to="#">
            <S.HeaderTextDiv>SEARCH</S.HeaderTextDiv>
          </Link>
        </S.LoginSerchDiv>
      </S.HeaderDiv>
    </>
  );
}
