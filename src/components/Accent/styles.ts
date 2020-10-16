import styled from "styled-components";
import { IGlobalStyles } from "../../@types/theme";

export const Accent = styled.span`
  color: ${(props: IGlobalStyles) => props.theme.colors.light.primary.base};
  background: ${(props: IGlobalStyles) => props.theme.colors.light.primary.gradient};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
`;