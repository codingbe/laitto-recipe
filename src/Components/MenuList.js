import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 0px 15px;
  transition: background-color 1s;
  &:hover {
    background-color: #e0d3d3;
  }
`;
const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const MenuList = ({ id, title, subTitle, description }) => (
  <Container to={id ? id : "/"}>
    <Title>{title}</Title>
    {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
    {description ? <SubTitle>{description}</SubTitle> : null}
  </Container>
);

export default MenuList;
