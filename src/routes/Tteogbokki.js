import React from "react";
import Loader from "../Components/Loader";
import { tteogbokki } from "../menu";
import MenuList from "../Components/MenuList";

export default class Tteogbokki extends React.Component {
  state = {
    menus: null,
    loading: true,
  };
  async componentDidMount() {
    const menus = await tteogbokki;
    this.setState({ menus, loading: false });
  }
  componentDidUpdate() {
    const header = document.querySelector("header");
    header.innerHTML = `떡볶이`;
  }
  render() {
    const { menus, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      menus.map((menu) => <MenuList key={menu.title} id={menu.id} title={menu.title} description={menu.description} />)
    );
  }
}
