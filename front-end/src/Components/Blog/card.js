import './card.css'
import { useNavigate } from "react-router-dom";

export const Card = (props) => {

    const { image, topic, description, profileImg, userName, date, _id } = props;

    const navigate = useNavigate()

    const jumpToOtherPosts = () => {
        navigate(`/post/${_id}`)
        console.log(_id)
    }

    return (
        <div className="cardContainer">
            <img alt="pic" className="img" src={image}></img>
            <div className="topic">{topic}</div>
            <div className="description">{description}</div>
            <div className="user">
                <img alt="pic" className="profileImg" src={profileImg} />
                <div className="userName">{userName}</div>
                <p>/</p>
                <div className="date">{date}</div>
            </div>
        </div>
    )
}