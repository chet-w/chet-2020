import { motion } from "framer-motion";
import styled from "styled-components";


export const Card = styled(motion.article)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

`;