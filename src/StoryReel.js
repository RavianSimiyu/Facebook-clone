import React from "react";
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/4997800/pexels-photo-4997800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Ravian Simiyu"
      />
      <Story
        image="https://images.pexels.com/photos/7148670/pexels-photo-7148670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/936313/pexels-photo-936313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Kenneth Karanja"
      />
      <Story
        image="https://images.pexels.com/photos/6520079/pexels-photo-6520079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Ahmed Murat"
      />
      <Story
        image="https://images.pexels.com/photos/4557831/pexels-photo-4557831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Muhhamed Irem"
      />
      <Story
        image="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileSrc="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Demirkan coker"
      />
    </div>
  );
}

export default StoryReel;
