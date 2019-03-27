/*
 * @Description:
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-03-19 23:01:39
 * @LastEditTime: 2019-03-20 23:39:09
 */
import React, { Component } from "react";
import styled from "styled-components";

interface Istate {
  num: number,
  test?: string,
}

class Header extends Component {
  state: Istate = {
    num: 0,
  }
  protected increase = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  protected decrease = () => {
    this.setState({
      num: this.state.num - 1
    });
  }
  render() {
    return (
      <div className="Header">
        <Info></Info>
        <p>{this.state.num}</p>
        <div onClick={this.increase}>+</div>
        <div onClick={this.decrease}>-</div>
      </div>
    );
  }
}

export default Header;


const Info = styled.div`
  display: flex;
  width: 100vw;
  height: 10vw;
`;
