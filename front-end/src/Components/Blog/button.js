import './card.css'

export const Button = (props) => {
    const { onClick } = props
    
    return (
      <button id="btton" onClick={onClick}>Submit here</button>
    )
  }
  