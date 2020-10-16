import { motion } from "framer-motion";
import styled from "styled-components";


export const Card = styled(motion.article)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 300px;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;