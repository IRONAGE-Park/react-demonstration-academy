import { memo } from "react";
// 불필요한 컴포넌트 재렌더 방지하는 memo 함수 가져옴
import {
  StyleMovieAnchor,
  StyleMovieContentBox,
  StyleMovieDirector,
  StyleMovieImage,
  StyleMovieImageBox,
  StyleMovieItem,
  StyleMovieList,
  StyleMovieSubtitle,
  StyleMovieTitle,
} from "./Movie.style";

const Movie = ({ title, subtitle, image, link, director }) => {
  // 영화의 정보를 출력하는 컴포넌트
  return (
    <StyleMovieItem>
      <StyleMovieImageBox>
        <StyleMovieImage src={image} alt="movie-thumbnail" />
      </StyleMovieImageBox>
      <StyleMovieContentBox>
        <StyleMovieAnchor href={link}>
          <StyleMovieTitle dangerouslySetInnerHTML={{ __html: title }} />
          <StyleMovieSubtitle>{subtitle}</StyleMovieSubtitle>
          <StyleMovieDirector>감독: {director}</StyleMovieDirector>
        </StyleMovieAnchor>
      </StyleMovieContentBox>
    </StyleMovieItem>
  );
};

const MovieList = ({ movieList }) => {
  // 영화 데이터 리스트를 반복 렌더링 하는 컴포넌트
  return (
    <StyleMovieList>
      {movieList.map((movieItem) => {
        return <Movie key={movieItem.title} {...movieItem} />;
      })}
    </StyleMovieList>
  );
};

export const Movies = memo(MovieList);
// memo 함수를 통해 불필요한 컴포넌트 재렌더 방지
// movieList 이외의 다른 값이 변경되어도 렌더링에 영향을 주지 않음

export default Movie;
