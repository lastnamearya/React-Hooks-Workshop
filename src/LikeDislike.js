import React from 'react';

const EMOTINOS = {
  '-1': ' 👎',
  '0': '🤗',
  '1': '👍',
};

class LikeDislike extends React.Component {
  state = {
    emotion: 0,
  };

  changeEmotion = emotion => {
    this.setState({ emotion });
  };

  render() {
    const { emotion } = this.state;

    return (
      <div>
        <h3>What you'r reaction to above blog {EMOTINOS[emotion]}</h3>
        <div>
          <button onClick={() => this.changeEmotion(1)}>Like</button>{' '}
          <button onClick={() => this.changeEmotion(-1)}>DisLike</button>
        </div>
      </div>
    );
  }
}

export default LikeDislike;
