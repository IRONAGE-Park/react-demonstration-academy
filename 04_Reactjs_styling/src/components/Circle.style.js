import styled from "@emotion/styled/macro";

export const StyleCircleText = styled.p((props) => ({
  color: props.red && "#f00",
}));

export const StyleCircleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  background-color: ${(props) => props.color || "#06f"};

  border-radius: 50%;

  box-shadow: 0px 3px 15px #0001;

  ${StyleCircleText} {
    font-size: 40px;
  }
`;
