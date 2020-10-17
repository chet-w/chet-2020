import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  & img {
    width: 300px;
    padding: 2.5rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(1);
  }

  & div {
    width: 300px;
    padding: 0;
    filter: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;