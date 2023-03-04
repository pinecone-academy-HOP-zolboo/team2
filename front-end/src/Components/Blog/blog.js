import { Card } from "./card"; 
import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import "./blog.css";
import { CreatePost } from "./createPost";
import { PostData } from "../../axios";
import { useContext } from "react";

export const Blog = () => {
  const { postData } = useContext(PostData)

  return (
    <div className="blogMain">
      <div className="blogContainer">
        <div className="header">
          <div className="title">Blog posts</div>
          <p>Our latest update will reach your house in 5 minutes </p>
        </div>
        <div className="mini">
          <div className="miniContainer">
            {postData.map(
              (cur) => (
                <Card
                  image={cur.image}
                  profileImg="https://avatarfiles.alphacoders.com/123/thumb-123337.png"
                  topic={cur.title}
                  description="I need help man, bad"
                  userName="Jimi hendrix"
                  date="18nd of September 1970"
                  _id={cur._id}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <CreatePost />
      </div>
      <Footer />
    </div>
  );
};
