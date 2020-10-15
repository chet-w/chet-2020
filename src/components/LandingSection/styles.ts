import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  /* padding-top: 5rem; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PrimarySectionArea = styled(motion.div)`
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