import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PrimarySectionArea = styled.div`
  display: flex;

  span {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const SecondarySectionArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;