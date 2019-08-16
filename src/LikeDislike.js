import React from "react";

const EMOTINOS = {
    "-1": " 👎",
    "0": "🤗",
    "1": "👍"
};

function LikeDislike() {
    const [emotion, setEmotion] = React.useState(0);
    const [count, clickCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `${EMOTINOS[emotion]} and clicked ${count}`;
    }, [emotion, count]);

    const changeEmotion = emotion => {
        setEmotion(emotion);
        clickCount(count + 1);
    }

    return (
        <div>
            <h3>What you'r reaction to above blog {EMOTINOS[emotion]}</h3>
            <div>
                <button onClick={() => changeEmotion(1)}>Like</button>{" "}
                <button onClick={() => changeEmotion(-1)}>DisLike</button>
            </div>
        </div>
    );
}

export default LikeDislike;
