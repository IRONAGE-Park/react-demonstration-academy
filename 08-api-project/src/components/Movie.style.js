import styled from "@emotion/styled";

export const StyleMovieList = styled.div`
  padding: 0 80px;
  // padding이 좌/우에만 80px, 총 160px 적용됨
`; // Movie를 출력하는 리스트 스타일 컴포넌트 

export const StyleMovieItem = styled.div`
  position: relative;
  // 이 요소를 상대적인 좌표로 지정할 수 있게 해줌
  // 여기서 top, left, right, bottom 속성을 통해 값을 지정해주면 현재 위치 기준으로 이동
  // 이 요소 하위 요소(자식, 손자 요소)에 position: absolute;를 적용하면 이 요소의 위치를 기준으로 적용

  display: flex;
  align-items: center;

  width: 100%;

  border: solid 1px #777;
  // 이 요소의 테두리에 1px 짜리 #777의 색을 가지는 선을 표현함
  border-radius: 20px;
  // 이 요소의 모서리를 둥글게 함

  overflow: hidden;
  // 이 요소를 벗어나는 자식 요소를 안보이게 함

  box-shadow: 0px 3px 15px #0003;
  // 이 요소 주변에 그림자를 생성

  & + & {
    // 첫 번째 요소는 제외하고, 두 번째 요소부터 20px씩 margin-top을 주어 요소 간 거리를 조정
    margin-top: 20px;
  }
`; // Movie를 출력하는 컴포넌트 전체를 감싸는 스타일 컴포넌트

export const StyleMovieImageBox = styled.div`
  width: 40%;
  height: 100%;
`; // Movie의 Image 영역을 감싸는 스타일 컴포넌트

export const StyleMovieImage = styled.img`
  display: block; // img 태그는 기본적으로 inline-block 요소이므로 변경
  width: 100%;
`; // Movie의 Image를 보여주는 스타일 컴포넌트

export const StyleMovieContentBox = styled.div`
  width: 60%;
  padding: 12px;
`; // Movie의 정보를 보여주는 영역 박스 스타일 컴포넌트

export const StyleMovieAnchor = styled.a`
  color: #222;
  font-size: 12px;

  text-align: center;
  // 텍스트 중앙 정렬

  word-break: keep-all;
  // 글자가 범위 초과했을 경우 한 글자씩 잘리지 않고 한 단어 묶음으로 자름

  text-decoration: none;
  // 글씨 아래 밑줄 제거
  &:hover {
    // 마우스를 요소에 올렸을 때 적용되는 CSS로, 마우스를 요소에 올리면 글씨 아래 밑줄 표시
    text-decoration: underline;
  }
`; // Movie의 상세 페이지로 이동하는 a 태그 스타일 컴포넌트

export const StyleMovieTitle = styled.h3`
  color: #000;
`; // Movie의 제목 스타일 컴포넌트

export const StyleMovieSubtitle = styled.h4`
  color: #555;

  margin-top: 8px;
`; // Movie의 부제목 스타일 컴포넌트

export const StyleMovieDirector = styled.p`
  color: #999;

  margin-top: 40px;
`; // Movie의 감독 스타일 컴포넌트

export const StyleMovieCheckboxArea = styled.div`
  position: absolute;
  // absolute 요소는 position: relative; 가 적용되어 있는 가장 가까운 상위 요소를 기준으로 위치를 지정함

  top: 6px;
  right: 6px;
  // 가장 가까운 상위 요소(StyleMovieItem)의 박스 내에, 위쪽에서 6px, 오른쪽에서 6px만큼 떨어진 곳에 위치시킴
`; // Movie에서 Checkbox의 위치를 지정하기 위해 감싸는 스타일 컴포넌트
