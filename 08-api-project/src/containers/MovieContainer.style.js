import styled from "@emotion/styled/macro";

export const StyleMovieAllCheckArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyleMovieAllCheckText = styled.p`
  font-size: 14px;
  color: ${(props) => (props.checked ? "#222" : "#999")};
`;
