import { useState, useCallback, useEffect, useMemo } from "react";

import Loading from "../components/Loading";
import { Movies } from "../components/Movie";
import AppendButton from "../components/AppendButton";
import DeleteButton from "../components/DeleteButton";
import Checkbox from "../components/Checkbox";
// 컴포넌트 가져옴

import { requestGetMovieList } from "../apis/fetch";
// api 요청 함수 가져옴

import {
  StyleMovieAllCheckArea,
  StyleMovieAllCheckText,
} from "./MovieContainer.style";

/**
 * 영화의 목록을 관리하는 컨테이너 컴포넌트
 */
const MovieContainer = () => {
  const [loading, setLoading] = useState(false);
  // 로딩 상태 state로 정의
  const [movieList, setMovieList] = useState([]);
  // 요청한 영화 리스트 state로 정의

  const AllChecked = useMemo(() => {
    return movieList.every((movieItem) => movieItem.checked);
  }, [movieList]); // movieList의 모든 요소가 갖고 있는 checked가 true인지 판단하는 useMemo
  // every 함수를 통해 모든 요소의 checked가 true이면 true를 AllChecked에 할당

  const allNoneChecked = useMemo(() => {
    return movieList.every((movieItem) => !movieItem.checked);
  }, [movieList]); // movieList의 모든 요소가 갖고 있는 checked가 false인지 판단하는 useMemo
  // every 함수를 통해 모든 요소가 checked가 false이면 true를 allNoneChecked에 할당

  const callApiGetMovieList = useCallback(async () => {
    // 영화 목록을 가져오는 API를 요청하는 함수
    setLoading(true);
    // 로딩 표시 시작
    try {
      const data = await requestGetMovieList(movieList.length + 1);
      // 현재 리스트 번호 이후의 값을 API로 요청
      const newItems = data.items.map((item) => ({
        ...item,
        checked: false,
      })); // API에서는 checked라는 정보가 넘어오지 않으므로
      // checked를 기본값인 false로 설정한 새로운 객체 배열을 만듬
      const newMovieList = movieList.concat(...newItems); // concat 함수는 배열을 전개하여 인자로 넘겨야함(,로 구분되는 매개변수)
      setMovieList(newMovieList);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
    // 로딩 표시 종료
  }, [movieList]);

  const handleChangeCheck = useCallback(
    (link) => {
      // link의 값을 가진 요소의 checked를 반대로 바꾸는 함수
      // link를 유일한 값이라고 생각하고 사용
      const newMovieList = movieList.map((movieItem) =>
        link === movieItem.link
          ? { ...movieItem, checked: !movieItem.checked }
          : movieItem
      ); // movieItem의 link가 매개변수로 넘어온 link와 같다면 그 요소의 checked를 반대로 바꾸는 로직
      setMovieList(newMovieList);
    },
    [movieList]
  );

  const onChangeAllCheck = useCallback(() => {
    // movieList의 모든 요소의 checked를 AllChecked 상태의 반대로 바꾸는 함수
    const newMovieList = movieList.map((movieItem) => ({
      ...movieItem,
      checked: !AllChecked,
    })); // movieList의 모든 요소의 checked를 AllChecked 상태의 반대로 바꾸는 로직
    setMovieList(newMovieList);
  }, [AllChecked, movieList]);

  const onDeleteChecked = useCallback(() => {
    const newMovieList = movieList.filter((movieItem) => !movieItem.checked);
    setMovieList(newMovieList);
  }, [movieList]);

  useEffect(() => {
    // mount 시에만 API 요청
    callApiGetMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <StyleMovieAllCheckArea>
        <StyleMovieAllCheckText checked={AllChecked}>
          전체 선택
        </StyleMovieAllCheckText>
        <Checkbox checked={AllChecked} onChange={onChangeAllCheck} />
        <DeleteButton disabled={allNoneChecked} onClick={onDeleteChecked} />
      </StyleMovieAllCheckArea>
      <Movies movieList={movieList} onChangeCheck={handleChangeCheck} />
      <Loading isLoading={loading} />
      <AppendButton onClick={callApiGetMovieList} />
    </div>
  );
};

export default MovieContainer;
