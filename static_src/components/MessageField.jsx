import React from "react";
import MessageComponent from "./MessageComponent";
import "../styles/style.css";

class MessageField extends React.Component {
  state = {
    messages: [
      {
        id: 1,
        text: "Привет",
        userName: "Donald",
      },
      {
        id: 2,
        text: "Как дела?",
        userName: "Vova",
      },
    ],
    newMessage: "",
    newUserName: "",
    messageCounter: 2,
  };

  handleWriteMessage = (e) => this.setState({ newMessage: e.target.value });
  handleWriteName = (e) => this.setState({ newUserName: e.target.value });

  handleAddMessage = () => {
    const arr = [...this.state.messages];
    const id = arr[arr.length - 1].id + 1;

    arr.push({
      id: id,
      text: this.state.newMessage,
      userName: this.state.newUserName,
    });

    this.setState({ messages: arr });
  };

  componentDidUpdate() {
    const arr = [...this.state.messages];
    const lastMessage = arr[arr.length - 1];
    const userName = lastMessage.userName ? lastMessage.userName : "Аноним";
    const robotText = `Не приставай ко мне, ${userName}! Я - робот!`;

    if (this.state.messageCounter === arr.length - 1) {
      setTimeout(
        () =>
          this.setState((state) => {
            return {
              messages: [
                ...state.messages,
                {
                  id: state.messages.length + 1,
                  text: robotText,
                  userName: "Робот",
                },
              ],
              messageCounter: state.messages.length + 1,
            };
          }),
        1000
      );
    } else {
      return null;
    }
  }

  renderMessage = (message) => (
    <MessageComponent
      text={message.text}
      userName={message.userName}
      key={message.id}
    />
  );

  render() {
    const messageElements = this.state.messages.map(this.renderMessage);

    return (
      <div className="container">
        {messageElements}

        <div className="d-flex flex-column card p-3 input_block">
          <label htmlFor="newText">Введите имя пользователя</label>
          <input
            type="text"
            id="newText"
            value={this.state.value}
            onChange={this.handleWriteName}
          />

          <label htmlFor="name">Введите сообщение</label>
          <input
            type="text"
            id="name"
            value={this.state.value}
            onChange={this.handleWriteMessage}
          />

          <button className="mt-2" onClick={this.handleAddMessage}>
            Отправить
          </button>
        </div>
      </div>
    );
  }
}

export default MessageField;
