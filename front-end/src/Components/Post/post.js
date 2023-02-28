import "./Post.css";
import  axios from "axios"
import React, {useEffect , useState} from "react"
import { useParams } from 'react-router-dom';
import Ellipse from "../../assest/Ellipse.svg";
import Rectangle from "../../assest/Rectangle.svg";
import Ellipse2 from "../../assest/Ellipse2.svg";
import Footer from "../Footer/footer";
import { instance } from "../../instance";

function Post() {
  
  const { id } = useParams();
  const [data, setData] = useState([])

  const getdata = async() =>{
    try {
      const tes = await instance.get(`/post/${id}`);   //had to add instance, since its usefull for further use
      setData(tes.data.data);
      console.log(tes.data.data)
    } catch(error){}
  }
  
  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className="post-main">
      <div className="main">
        <div className="container">
          <div className="upperSection">
            <div>
              <div className="title">10 Secrets for managing a remote team</div>
              <div className="profileSection">
                <img alt="pic" className="profile" src={Ellipse}></img>
                <div className="profileSection1">
                  <div className="he">{data.AccountName}</div>
                  <div className="he">2nd January,2022</div>
                </div>
              </div>
            </div>

            <img alt="pic" src={Rectangle}></img>

            <div className="middle">
              <div className="bigOne">{data.description}</div>

              <div className="lowerProfile">
                <img alt="pic" src={Ellipse}></img>
                <div>
                  <div>
                    <div className="writtenBy">Written by</div>
                    <div className="Shedrack">Shedrack Eze</div>
                  </div>
                  <div className="Ceo">CEO Team App</div>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <hr className="hr"></hr>
          <br></br>

          <div className="lowerSection">
            <div className="join">Join the conversation</div>
            <div>
              <img alt="pic" src={Ellipse2}></img>
              <input className="input" placeHolder="comment"></input>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
