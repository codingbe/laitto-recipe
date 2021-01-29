import { Link } from "react-router-dom";
import styled from "styled-components";
import routers from "../routers";

const Theader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #2f4f4f;
  color: white;
  font-size: 26px;
`;
const Ul = styled.ul``;
const Li = styled.li``;
const HomeLink = styled(Link)``;

const Header = () => (
  <Theader>
    <Ul>
      <Li>
        <HomeLink to={routers.home}>Home</HomeLink>
      </Li>
    </Ul>
  </Theader>
);

export default Header;
