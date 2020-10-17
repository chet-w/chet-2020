import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  & img[sizes] {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(1);
    height: auto !important;
  }

  .gatsby-image-wrapper {
    width: 300px;
    margin: 3rem 1rem;
  }
`;

export const Heading = styled.div`
    width: 300px;
    margin: 3rem 1rem;
    filter: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;