import styled from 'styled-components';
import mainscreen from '/mainscreen.jpg';

/** MainScreen 스타일 컴포넌트 */
export const mainScreenDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainscreen});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TitleContainerDiv = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  display: flex;
  height: 59px;
  width: 300px;
`;
export const FlexStartTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-start;
  display: inline-block;
  padding: 3px;
  font-size: 20px;
`;
export const FlexEndTextDiv = styled.div`
  color: #000000;
  background-color: #f7f9f3;
  align-self: flex-end;
  display: inline-block;
  padding: 3px;
  font-size: 20px;
`;
export const TitleDiv = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
/*MovieContainer 스타일 컴포넌트 */

export const MovieContainerDiv = styled.div`
  height: 600px;
`;

/*MovieContent 스타일 컴포넌트 */
export const ItemImg = styled.img`
  height: 85%;
  object-fit: cover;
  max-width: 100%;
`;
export const MovieItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  margin: 10px;
`;
export const ItemInfoDiv = styled.div`
  height: 15%;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
`;
export const ItemDesDiv = styled.div`
  padding: 7px;
  font-family: 'Pretendard-Regular';
  font-weight: 600;
  line-height: 20px;
`;
export const FavoriteButtonImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
// /**  @로그인버튼 로그인버튼 컴포넌트*/

// /* 좋아요버튼 스타일 props로 true/false 받아서 색 바뀌게 */
// export const LikeButtonDiv = styled.div``;
// import styled from 'styled-components';

// /** @모던무비로고 모던무비 로고 컴포넌트*/
// export const LogoImg = styled.img`
//   margin-top: 20px;
//   width: 120px;
//   height: 70px;
//   margin-left: 59px;
// `;

// /*영화 리스트의 영화이름 스타일*/
// export const MovieNameDiv = styled.div`
//   color: #000000;
// `;
// /*영화 개봉년도 스타일 */
// export const MovieYearDiv = styled.div`
//   color: #000000;
// `;
// export const LoginDiv = styled.div`
//   font-family: countach, sans-serif;
//   font-size: 25px;
//   line-height: 42px;
//   font-weight: 400;
//   color: #f7f9f3;
//   margin-right: 50px;
//   display: inline-block;
// `;
// /** @검색버튼 검색버튼 컴포넌트 */
// export const SearchDiv = styled.div`
//   font-family: countach, sans-serif;
//   display: inline-block;
//   font-size: 25px;
//   line-height: 42px;
//   font-weight: 400;
//   margin-right: 80px;

//   color: #f7f9f3;
// `;
// import styled from 'styled-components';

// export const MoviePhotoImg = styled.img`
//   height: 430px;
//   object-fit: cover;
//   max-width: 100%;
// `;
// import styled from 'styled-components';

// export const LoginSearchDiv = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// export const MovieNameYearDiv = styled.div`
//   font-family: 'Pretendard-Regular';
//   font-weight: 600;
//   display: flex;
//   flex-direction: column;
//   line-height: 24px;
// `;
// import styled from 'styled-components';
// export const HeaderDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
// export const MovieContentDiv = styled.div`
//   display: flex;
//   background-color: white;
//   justify-content: space-between;
//   padding-left: 20px;
// `;
// export const MovieInfoDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0;
//   margin: 10px;
//   width: 300px;
//   flex-grow: 1;
//   margin-bottom: 100px;
// `;
// import mainscreen from '/mainscreen.jpg';
// import styled from 'styled-components';
// export const MainScreenDiv = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-image: url(${mainscreen});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;
// export const MovieContainerDiv = styled.div`
//   padding-left: 10px;
//   padding-right: 10px;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;
