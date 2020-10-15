import styled from "styled-components";
import { IGlobalStyles } from "../../@types/theme";

export const StyledHeader = styled.header`
  height: 5rem;
  background: ${(props: IGlobalStyles) => props.theme.colors.light.neutrals.light};
  
`;