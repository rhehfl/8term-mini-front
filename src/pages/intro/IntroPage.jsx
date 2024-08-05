import React from 'react';
import Header from '../../components/public_components/Header';
import ReviewContainer from '../../components/page_components/review/ReviewContainer';
import MovieDetail from '../../components/page_components/intro/MovieDetail';

export default function IntroPage() {
  return (
    <>
      <Header></Header>
      <MovieDetail></MovieDetail>
      <ReviewContainer></ReviewContainer>
    </>
  );
}
