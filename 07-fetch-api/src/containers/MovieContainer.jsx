import { useState, useCallback, useEffect } from "react";

import { Movies } from "../components/Movie";
import Loading from "../components/Loading";

import { requestGetMovieList } from "../apis/fetch";
// api 요청 함수를 가져옴

const MovieContainer = () => {
  const [loading, setLoading] = useState(false);
  // 로딩 상태 state로 정의
  const [movieList, setMovieList] = useState([]);
  // 요청한 영화 리스트 state로 정의

  const callApiGetMovieList = useCallback(async () => {
    // async는 비동기 객체인 Promise를 동기처럼 사용하는 키워드
    // 비동기 객체인 Promise 앞에 await를 붙이면 동기처럼 동작
    // 함수 실행하자마자 loading 상태를 true로 변경
    setLoading(true);
    try {
      const data = await requestGetMovieList();
      // 원래라면 비동기로 실행되어야 하는데, await 키워드로
      // 해당 함수가 동기처럼 실행되어 아래 코드가 API 요청 후 순차 실행
      // requestGetMovieList 함수가 Promise를 반환하기 때문에 await 사용 가능
      setMovieList(data.items);
      // 받아온 items를 영화 리스트 state로 변경
    } catch (e) {
      // 에러 발생 시 에러 로그 출력
      console.error(e);
    }
    // 위의는 동기로 동작하는 것처럼 보이기 때문에 요청이 모두 끝나야만 loading 상태가 false가 됨
    // 따라서 요청을 보낸 후 응답 받을 때까지 loading이 true이므로 로딩 상태가 렌더링
    // try ... catch (e) ... 문으로 에러 처리를 했기 때문에
    // 반드시 loading 상태가 true가 됐다가 false로 돌아옴
    setLoading(false);
  }, []);

  useEffect(() => {
    // mount 시에만 API 요청
    callApiGetMovieList();
  }, [callApiGetMovieList]);

  return (
    <div>
      <Movies movieList={movieList} />
      <Loading isLoading={loading} />
    </div>
  );
};

export default MovieContainer;
