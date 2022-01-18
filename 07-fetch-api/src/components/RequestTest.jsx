import { useCallback, useEffect } from "react";

const URL = "https://reqres.in/api/users";
// API를 요청할 주소

// API 요청 테스트하는 컴포넌트
const RequestTest = () => {
  // XMLHttpRequest 방식으로 요청하는 함수
  const callApiGetXhr = useCallback(() => {
    const xhr = new XMLHttpRequest();
    // XMLHttpRequest 객체 생성
    xhr.open("GET", URL, true);
    // GET 방식으로 URL에 데이터 요청하도록 설정
    // 마지막 인수가 true이면 비동기식으로 요청함

    xhr.onreadystatechange = () => {
      // 요청이 변경됐을 때 실행할 콜백 함수
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // 요청 상태가 완료됐을 때 실행할 코드
        const { status } = xhr;
        // HTTP status 코드를 가져옴
        // 이는 객체의 프로퍼티를 직접 가져오는 디스트럭처링 할당
        console.log(xhr);
        if (status === 0 || (status >= 200 && status < 400)) {
          // 오류가 나지 않았을 때 데이터 출력
          console.log(JSON.parse(xhr.responseText));
          // xhr.responseText는 string 값을 반환함
          // JSON.parse 함수는 string 타입 데이터를 JSON 타입으로 바꾸어 주는 함수
          // JSON 문법에 어긋난 string은 파싱 에러 발생
        }
      }
    };
    xhr.send();
    // 위에 설정한 XMLHttpRequest 객체로 실제 요청을 보내는 실행을 함
    // 이 코드가 없으면 요청하지 않음
  }, []);

  // fetch API 방식으로 요청하는 함수
  const callApiFetch = useCallback(() => {
    // GET 방식으로 URL에 데이터 요청
    fetch(URL)
      .then((response) => {
        // 요청이 완료됐을 때 콜백 함수의 인수 response로 응답 결과 전달함
        response.json().then((data) => console.log(data));
        // 결과 값을 JSON으로 파싱함
        // 파싱된 결과를 콜백 함수의 인수 data로 전달함
      })
      .catch((error) => {
        // 오류가 발생했을 때 오류 객체가 error로 넘어옴
        console.error(error);
      });

    // 이처럼 .then(콜백), .catch(콜백)과 같은 비동기 기능을 제공해주는 객체를 Promise라고 함
    // Promise는 완료 상태에 따라 then의 콜백을 실행할 수도 있고 catch를 실행할 수도 있음
    // fetch API의 경우 콜백 지옥이 나타나기 쉬움(async await 사용)
  }, []);

  useEffect(() => {
    // mount 시에만 API 요청
    callApiGetXhr();
  }, [callApiGetXhr]);

  useEffect(() => {
    // mount 시에만 API 요청
    callApiFetch();
  }, [callApiFetch]);

  return <></>;
};

export default RequestTest;
