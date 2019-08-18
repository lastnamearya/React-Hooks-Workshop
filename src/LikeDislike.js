import React from 'react';

const EMOTINOS = {
  '-1': ' 👎',
  '0': '🤗',
  '1': '👍',
};

function LikeDislike(props) {
  const [emotion, setEmotion] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = EMOTINOS[emotion];
  }, [emotion]);

  const changeEmotion = emotion => {
    setEmotion(emotion);
    setCount(count + emotion);
  };

  return (
    <div>
      <h3>
        What you'r reaction to above blog {EMOTINOS[emotion]} {count}
      </h3>
      <div>
        <button onClick={() => changeEmotion(1)}>Like</button>{' '}
        <button onClick={() => changeEmotion(-1)}>DisLike</button>
      </div>
    </div>
  );
}

export default LikeDislike;
