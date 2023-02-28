import { Card } from "./card";
import  axios from "axios"
import React, {useEffect, useState} from "react"
import Footer from "../Footer/footer";
import "./blog.css";


export const Blog = () => {

  const [data, setData] = useState([])

  const instanse = axios.create({
    baseURL:`http://localhost:8000`
  })

  const getdata = async() =>{
    try {
      const tes = await instanse.get("/post");
      setData(tes.data.data);
      console.log(tes.data.data)
    } catch(error){}
  }
  
  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className="blogMain">
      <div className="blogContainer">
        <div className="header">
          <div className="title">Blog posts</div>
          <p>Our latest update will reach your house in 5 minutes </p>
        </div>
        <div className="miniContainer">
<<<<<<< HEAD
          <Card
            image="https://guitarvillage  .co.uk/wp-content/uploads/2022/10/Fender-Jimi-Hendrix-Stratocaster-Olympic-White-290_01-compress.jpg"
            profileImg="https://avatarfiles.alphacoders.com/123/thumb-123337.png"
            topic="Used too much barbiturate, *cough* *cough*"
            description="I need help man, bad"
            userName="Jimi hendrix"
            date="18nd of September 1970"
            // userId={}
          />
          <Card
            image="https://consequence.net/wp-content/uploads/2018/12/dean-from-hell-guitar.png"
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmbdJnOfoYWbpzMbrpX2-8Pm9ccLKH3K7gRytilHtvcLmdMQ_L9DQVykSlagUTzbszIY&usqp=CAU"
            topic="I just got shot from my deranged fan"
            description="Van Halen!"
            userName="Dimebag Darrel"
            date="8nd of December 2004"
          />
          <Card
            image="https://guitarvillage.co.uk/wp-content/uploads/2022/10/Fender-Jimi-Hendrix-Stratocaster-Olympic-White-290_01-compress.jpg"
            profileImg="https://avatarfiles.alphacoders.com/123/thumb-123337.png"
            topic="Used too much barbiturate, *cough* *cough*"
            description="I need help man, bad"
            userName="Jimi hendrix"
            date="18nd of September 1970"
          />
=======
          {
            data.map((cur)=>
            <Card
              image="https://guitarvillage.co.uk/wp-content/uploads/2022/10/Fender-Jimi-Hendrix-Stratocaster-Olympic-White-290_01-compress.jpg"
              profileImg="https://avatarfiles.alphacoders.com/123/thumb-123337.png"
              topic="Used too much barbiturate, *cough* *cough*"
              description="I need help man, bad"
              userName="Jimi hendrix"
              date="18nd of September 1970"
              _id={cur._id}
            />
            )
          }
>>>>>>> d977d82ccd0e4e28e12e7b847ad84cee8d9ddb96
        </div>
        {/* <div className="buttonContainer">
          <button className="button">Next {">"}</button>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
};