import styled from 'styled-components';

/** @모던무비로고 모던무비 로고 컴포넌트*/
export const LogoImg = styled.img`
  margin-top: 20px;
  width: 120px;
  height: 70px;
  margin-left: 59px;
`;

/** @죽기전에봐야할 모던무비 타이틀 컴포넌트 */
export const TitleDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  display: flex;
  height: 50px;
  width: 300px;
`;
export const FlexStartTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-start;
  display: inline-block;
  padding: 3px;
`;
export const FlexEndTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-end;
  display: inline-block;
  padding: 3px;
`;
/*영화 리스트의 영화이름 스타일*/
export const MovieNameDiv = styled.div`
  color: #000000;
  font-family: 'Pretendard-Regular';
`;
/*영화 개봉년도 스타일 */
export const MovieYearDiv = styled.div`
  color: #000000;
  font-family: 'Pretendard-Regular';
`;
