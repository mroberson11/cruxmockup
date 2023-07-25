import styled from "styled-components";

export const ScrollButton = styled.button`
  position: fixed;
  height: 60px;
  width: 60px;
  bottom: 20px;
  right: 20px;
  background-color: var(--cruxBlue);
#   padding: 10px 15px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex:
  justify-content: center;
  align-items: center;
`;

export const ArrowUp = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #007bff;
  margin-left: 5px;
`;
