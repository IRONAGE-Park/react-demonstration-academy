import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

export const StyleDeleteButton = styled(ButtonBase)`
  width: 120px;
  height: 40px;

  font-size: 20px;
  color: #fff;

  background-color: ${props => props.disabled ? '#f007' : '#f00'}
`;
