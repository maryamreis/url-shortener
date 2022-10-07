import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const Shortener = () => {
  const [input, setInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  useEffect(() => {
    let shortUrlRandomlyGenerated = Math.random().toString(36).slice(2, 7);

    setShortUrl(shortUrlRandomlyGenerated);
  }, [input]);

  const shortenUrl = () => {
    console.log("you input", input);
    addDoc(collection(db, "urls"), {
      longUrl: input,
      shortUrl: shortUrl,
      createdAt: new Date(),
    });
    setInput("");
  };

  return (
    // <div className="shortener">
    <box className="purple-box">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Shorten a link here..."
      ></input>
      <button onClick={() => shortenUrl(input)}>Shorten it!</button>
    </box>
    // </div>
  );
};
