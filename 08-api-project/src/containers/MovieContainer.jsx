import { useState, useCallback, useEffect, useMemo } from "react";

import Loading from "../components/Loading";
import { Movies } from "../components/Movie";
import AppendButton from "../components/AppendButton";
import Checkbox from "../components/Checkbox";

import { requestGetMovieList } from "../apis/fetch";

import {
  StyleMovieAllCheckArea,
  StyleMovieAllCheckText,
} from "./MovieContainer.style";
import DeleteButton from "../components/DeleteButton";
// api 요청 함수를 가져옴

const MovieContainer = () => {
  const [loading, setLoading] = useState(false);
  // 로딩 상태 state로 정의
  const [movieList, setMovieList] = useState([]);
  // 요청한 영화 리스트 state로 정의

  const AllChecked = useMemo(() => {
    return movieList.every((movieItem) => movieItem.checked);
  }, [movieList]);

  const callApiGetMovieList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await requestGetMovieList(movieList.length + 1);
      const newItems = data.items.map((item) => ({
        ...item,
        checked: false,
      }));
      const newMovieList = movieList.concat(...newItems); // 배열로 넘어오므로 전개
      setMovieList(newMovieList);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [movieList]);

  const handleChangeCheck = useCallback(
    (link) => {
      // link를 유일한 값이라고 생각하고 사용
      const newMovieList = movieList.map((movieItem) =>
        link === movieItem.link
          ? { ...movieItem, checked: !movieItem.checked }
          : movieItem
      );
      setMovieList(newMovieList);
    },
    [movieList]
  );

  const onChangeAllCheck = useCallback(() => {
    const newMovieList = movieList.map((movieItem) => ({
      ...movieItem,
      checked: !AllChecked,
    }));
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

  const allNoneChecked = useMemo(() => {
    return movieList.every((movieItem) => !movieItem.checked);
  }, [movieList]);

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
