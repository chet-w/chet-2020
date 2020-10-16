import styled from "styled-components";
import { IGlobalStyles } from "../../@types/theme";

interface ISectionProps extends IGlobalStyles {
  centered?: boolean,
  middled?: boolean,
};

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: ${(props: ISectionProps) => props.centered ? "center" : "auto"};
  align-items: ${(props: ISectionProps) => props.middled ? "center" : "auto"};
  flex-direction: column;
`;