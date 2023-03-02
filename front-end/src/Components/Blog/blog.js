import { Card } from "./card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import "./blog.css";
import { CreatePost } from "./createPost";
import { instance } from "../../instance";

export const Blog = () => {
  const [data, setData] = useState([]);

  // const getdata = async () => {
  //   try {
  //     const tes = await instance.get("/post");
  //     setData(tes.data.data);
  //     console.log(tes.data.data);
  //   } catch (error) {}
  // };

  useEffect(() => {
    const getdata = async () => {
      try {
        const tes = await instance.get("/post");
        setData(tes.data.data);
        console.log(tes.data.data);
      } catch (error) {}
    };
    getdata();
  }, []);

  return (
    <div className="blogMain">
      <div className="blogContainer">
        <div className="header">
          <div className="title">Blog posts</div>
          <p>Our latest update will reach your house in 5 minutes </p>
        </div>
        <div className="mini">
          <div className="miniContainer">
            {data.map(
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
              // <Card
              //   image="https://guitarvillage.co.uk/wp-content/uploads/2022/10/Fender-Jimi-Hendrix-Stratocaster-Olympic-White-290_01-compress.jpg"
              //   profileImg="https://avatarfiles.alphacoders.com/123/thumb-123337.png"
              //   topic="Used too much barbiturate, *cough* *cough*"
              //   description="I need help man, bad"
              //   userName="Jimi hendrix"
              //   date="18nd of September 1970"
              //   _id={cur._id}
              // />
            )}
          </div>
        </div>
        <div className="buttonContainer">
          {/* <button className="button">Next {">"}</button> */}
          <CreatePost />
        </div>
      </div>
      <Footer />
    </div>
  );
};
