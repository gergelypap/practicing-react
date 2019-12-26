import React, { Component } from "react";
import Card from "./Card";
import "./Board.css";
import { shuffle, contains } from "../utils";

export default class Board extends Component {
  state = {
    cards: this.initCards(),
    selected: null,
    frozen: false,
    active: [],
    mismatch: [],
    found: []
  };

  initCards() {
    const cards = new Array(this.props.difficulty)
      .fill(null)
      .map((val, i) => i + 1);
    return shuffle([...cards, ...cards]);
  }

  handleClick(index) {
    if (this.state.frozen) {
      return;
    }
    let found = this.state.found;
    let selected = this.state.selected;

    if (selected === null) {
      this.setState({
        active: [index],
        selected: index
      });
      return;
    }

    if (this.isFound(index) || selected === index) {
      this.setState({
        active: [index],
        selected: null
      });
      return;
    }

    if (this.state.cards[selected] === this.state.cards[index]) {
      found = [...found, selected, index];
      this.setState({ selected: null, found, active: [] });
      this.checkWin(found);
      return;
    }

    this.setState({
      frozen: true,
      active: [selected, index],
      mismatch: [selected, index]
    });
    setTimeout(() => {
      this.setState({
        selected: null,
        frozen: false,
        active: [],
        mismatch: []
      });
    }, 500);
  }

  checkWin(found) {
    if (this.state.cards.length === found.length) {
      this.props.onWin();
      this.setState({
        cards: this.initCards(),
        found: []
      });
    }
  }

  isActive(index) {
    return contains(this.state.active, index) || this.state.selected === index;
  }

  isFound(index) {
    return contains(this.state.found, index);
  }

  isDisabled(index) {
    return this.isActive(index) || this.isFound(index);
  }

  isMismatch(index) {
    return (
      contains(this.state.mismatch, index) &&
      contains(this.state.mismatch, this.state.selected)
    );
  }

  renderCards() {
    const cards = [];
    for (let i = 0; i < this.state.cards.length; ++i) {
      cards.push(
        <Card
          key={i}
          face={this.state.cards[i]}
          onClick={() => this.handleClick(i)}
          isActive={() => this.isActive(i)}
          isFound={() => this.isFound(i)}
          isDisabled={() => this.isDisabled(i)}
          isMismatch={() => this.isMismatch(i)}
        />
      );
    }
    return cards;
  }

  render() {
    return <div className="Board">{this.renderCards()}</div>;
  }
}
