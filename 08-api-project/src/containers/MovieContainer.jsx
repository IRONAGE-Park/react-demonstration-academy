import { useState, useCallback, useEffect } from "react";

import { Movies } from "../components/Movie";
import Loading from "../components/Loading";

import { requestGetMovieList } from "../apis/fetch";
import AppendButton from "../components/AppendButton";
// api 요청 함수를 가져옴

const MovieContainer = () => {
  const [loading, setLoading] = useState(false);
  // 로딩 상태 state로 정의
  const [movieList, setMovieList] = useState([]);
  // 요청한 영화 리스트 state로 정의

  const callApiGetMovieList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await requestGetMovieList(movieList.length + 1);
      const newMovieList = movieList.concat(...data.items); // 배열로 넘어오므로 전개
      setMovieList(newMovieList);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [movieList]);

  useEffect(() => {
    // mount 시에만 API 요청
    callApiGetMovieList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Movies movieList={movieList} />
      <Loading isLoading={loading} />
      <AppendButton onClick={callApiGetMovieList} />
    </div>
  );
};

export default MovieContainer;
