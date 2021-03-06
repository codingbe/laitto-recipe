import React from "react";
import Loader from "../Components/Loader";
import { menuArray } from "../menu";
import MenuList from "../Components/MenuList";

export default class Home extends React.Component {
  state = {
    menus: null,
    loading: true,
  };
  async componentDidMount() {
    const menus = await menuArray;
    this.setState({ menus, loading: false });
  }
  componentDidUpdate() {
    const header = document.querySelector("header");
    header.innerHTML = `Home`;
  }
  render() {
    const { menus, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      menus.map((menu) => <MenuList key={menu.title} id={menu.id} title={menu.title} subTitle={menu.subTitle} />)
    );
  }
}
