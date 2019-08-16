import React from "react";

const EMOTINOS = {
    "-1": " 👎",
    "0": "🤗",
    "1": "👍"
};

function LikeDislike() {
    const [emotion, setEmotion] = React.useState(0);

    const changeEmotion = emotion => setEmotion(emotion);

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
