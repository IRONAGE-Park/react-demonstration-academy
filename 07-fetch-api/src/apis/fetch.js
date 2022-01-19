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

// Async 함수와 Promise의 관계
export const requestAsync = async () => {
  // async 함수는 자동으로 Promise를 반환하는 함수가 됨
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "plain/text",
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
  });
  // await 키워드는 async 내에서만 사용할 수 있고, Promise에다가 사용하면 그 Promise가 끝날 때까지 기다림
  // await 키워드를 사용하면 그 뒤에 코드들은 .then 메서드에 코드가 들어가는 것과 같음
  console.log(response);
  const a = 10;
  // 여기까지 첫 번째 .then의 코드
  const data = await response.json();
  // 다시 await를 만났으므로 이 뒤에 코드들은 .then 메서드에 코드가 들어가는 것과 같아짐(중첩)
  console.log(data);
  const b = a * 2;
  console.log(b);
  // 여기까지 두 번째 .then의 코드
  const secondResponse = await fetch("https://reqres.in/api/users");
  // 세 번째 중첩
  return await secondResponse.json();
  // 네 번째 중첩 후 resolve 함수에 결과 값 넣어서 실행한 것과 같음
};

// 위 Async 함수와 같은 코드
export const requestPromise = new Promise((resolve, reject) => {
  fetch(URL, {
    headers: {
      "Content-Type": "plain/text",
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
  }).then((response) => {
    console.log(response);
    const a = 10;
    response.json().then((data) => {
      console.log(data);
      const b = a * 2;
      console.log(b);

      fetch("https://reqres.in/api/users").then((secondResponse) => {
        secondResponse.json().then((secondData) => {
          resolve(secondData);
        });
        // 마지막 소스는
        // secondResponse.json().then(resolve);
        // 와 같이 작성할 수 있음
      });
    });
  });
});

// 두 함수 모두 Promise를 반환하므로
requestAsync.then(secondData => console.log(secondData));
requestPromise.then(secondData => console.log(secondData));
// 이렇게 then을 사용하여 반환 받을 수 있음
// then 안에 들어가는 매개변수는 resolve를 내에 넣은 값이 전달
