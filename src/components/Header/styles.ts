import styled from "styled-components";
import { motion } from "framer-motion";
import { IGlobalStyles } from "../../@types/theme";
import { Container } from "../Container";

export const StyledHeader = styled(motion.header)`
  height: 5rem;
  background: ${(props: IGlobalStyles) => props.theme.colors.light.neutrals.lighter};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledHeaderLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  li {
    margin: 0 1rem
  }
`;