import { memo } from "react";
// 불필요한 컴포넌트 재렌더 방지하는 memo 함수 가져옴

import Checkbox from "./Checkbox";

import {
  StyleMovieAnchor,
  StyleMovieCheckboxArea,
  StyleMovieContentBox,
  StyleMovieDirector,
  StyleMovieImage,
  StyleMovieImageBox,
  StyleMovieItem,
  StyleMovieList,
  StyleMovieSubtitle,
  StyleMovieTitle,
} from "./Movie.style";

const Movie = ({
  title,
  subtitle,
  image,
  link,
  director,
  checked,
  onChange,
}) => {
  // 영화의 정보를 출력하는 컴포넌트
  return (
    <StyleMovieItem>
      <StyleMovieImageBox>
        <StyleMovieImage src={image} alt="movie-thumbnail" />
      </StyleMovieImageBox>
      <StyleMovieContentBox>
        <StyleMovieAnchor href={link}>
          <StyleMovieTitle dangerouslySetInnerHTML={{ __html: title }} />
          {/* HTML 태그 형태의 문자열을 그대로 출력하면 태그의 이름이 모두 노출되므로, */}
          {/* dangerouslySetInnerHTML props로 전달 */}
          <StyleMovieSubtitle>{subtitle}</StyleMovieSubtitle>
          <StyleMovieDirector>감독: {director}</StyleMovieDirector>
        </StyleMovieAnchor>
      </StyleMovieContentBox>
      <StyleMovieCheckboxArea>
        <Checkbox checked={checked} onChange={onChange} />
      </StyleMovieCheckboxArea>
    </StyleMovieItem>
  );
};

const MovieList = ({ movieList, onChangeCheck }) => {
  // 영화 데이터 리스트를 반복 렌더링 하는 컴포넌트
  return (
    <StyleMovieList>
      {movieList.map((movieItem) => {
        return (
          <Movie
            key={movieItem.title}
            {...movieItem} // movieItem에 checked가 포함되므로 넘어감
            onChange={() => onChangeCheck(movieItem.link)}
            // onChangeCheck 함수에는 link 매개변수를 넣어주어야 하는데,
            // 클릭 이벤트로 넣을 때 link 매개변수를 전달하기 위해선 함수를 미리 만들어 놓아야 함
          />
        );
      })}
    </StyleMovieList>
  );
};

export const Movies = memo(MovieList);
// memo 함수를 통해 불필요한 컴포넌트 재렌더 방지
// movieList 이외의 다른 값이 변경되어도 렌더링에 영향을 주지 않음

export default Movie;
