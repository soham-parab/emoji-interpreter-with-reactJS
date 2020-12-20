import React, { useState } from "react";
import "./styles.css";

var color: "red";

const emojiDictionary = {
  "😐": "A poker or neutral face.",
  "😬": "Grimacing Face",
  "🥴":
    "A woozy face. Meaning widely varies, but commonly conveys intoxication or infatuation. Its dazed expression may also represent such feelings or states as bewilderment, irritation, disgust, exhaustion, wackiness, or complete satisfaction. ",
  "😕": "Confused, unamused or disappointed",
  "🥺": "Pleading or infatuated",
  "😖": "Confounded",
  "🙂": "Passive aggressive",
  "😶": "A sense of speechlessness, could be sarcastic depending on context",
  "🤥": "Lying, as a reference to Pinocchio"
};

const emojis = Object.keys(emojiDictionary); //creating an array out of our emojis

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here"); //meaning - do we know the meaning? setMeaning - to set the meaning.

  function emojiInputHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(emoji); //react call to show output

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <div>
        <h1>Welcome! This is an emoji interpreter. </h1>
      </div>
      <input
        placeholder="Enter an Emoji Here"
        class="sizing"
        onChange={emojiInputHandler}
      />

      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      <h3> </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "3rem", padding: "2rem", cursor: "pointer" }}
        >
          {""}
          {emoji}
          {""}
        </span>
      ))}
    </div>
  );
}
