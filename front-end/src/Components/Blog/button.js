import './card.css'

export const Button = (props) => {
    const { onClick, text } = props
    
    return (
      <button id='button' onClick={onClick}>{text}</button>
    )
  }
  