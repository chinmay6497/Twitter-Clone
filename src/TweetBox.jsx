import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Saakshya Devat",
      username: "sdevat",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://www.clipartkey.com/mpngs/m/107-1076987_user-staff-man-profile-person-icon-circle-png.png"
   

    });
    setTweetMessage("");
    setTweetImage("");

}
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://www.clipartkey.com/mpngs/m/107-1076987_user-staff-man-profile-person-icon-circle-png.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats gooodd"
            type="text"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          className="tweetBox_imageInput"
          placeholder="Enter image URL"
        />
        <Button 
        onClick={sendTweet} //function created to send a tweet
        type="submit" className="tweetBox_tweetButton">Hummmmm</Button>
      </form>
    </div>
  );
}

export default TweetBox;
