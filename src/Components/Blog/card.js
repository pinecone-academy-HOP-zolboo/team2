import './card.css'

export const Card = (props) => {

    const { image, topic, description, profileImg, userName, date } = props;

    return (
        <div className="cardContainer">
            <img className="img" src={image}></img>
            <div className="topic">{topic}</div>
            <div className="description">{description}</div>
            <div className="user">
                <img className="profileImg" src={profileImg} />
                <div className="userName">{userName}</div>
                <p>/</p>
                <div className="date">{date}</div>
            </div>
        </div>
    )
}