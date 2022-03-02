import styled from "styled-components";
import { FaTwitterSquare } from "react-icons/fa";

const Container = styled.div`
  background-color: ${(prop) => prop.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Figure = styled.figure`
  display: flex;
  color: ${(prop) => prop.color};
  flex-direction: column;
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 1.5rem;
`;

const Button = styled.button`
  min-width: 100px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background-size: 120% auto;
  background-image: linear-gradient(
    315deg,
    #bdc3c7 0%,
    ${(prop) => prop.color} 40%
  );
  &:hover {
    background-position: right center;
  }
  &:active {
    top: 2px;
  }
`;

const Twitter = styled(FaTwitterSquare)`
  font-size: 40px;
  color: ${(prop) => prop.color};
`;

export { Container, Figure, Button, Twitter };
