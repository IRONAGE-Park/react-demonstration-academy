const URL = "/api/v1/search/movie.json?query=어벤져스";
// 요청할 URL과 query
// query는 질의어로, 어떠한 정보를 검색하여 반환 받을 것인지 전달하는 것

export const requestGetMovieList = async () => {
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "plain/text",
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
  });
  // fetch의 두 번째 인자는 옵션을 전달하는 객체로, HTTP 요청에 필요한 추가 정보를 전달
  // fetch는 Promise를 반환하므로 await를 사용할 수 있음
  // awiat를 사용하면 기존 .then(response 콜백)에서의 response 인자가 반환

  return await response.json();
  // 응답 객체를 JSON으로 변환하는 작업 비동기로 또한 Promise를 반환하므로 await 사용 가능
};
