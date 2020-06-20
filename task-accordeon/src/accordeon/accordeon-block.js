import React, {useState} from 'react';

export default function AccordeonBlock(props) {
  const [visibility, setVisibility] = useState(false);

  function getClassesForTextBlock() {
    if (visibility){
      if (props.text.length < 290){
        return "accordeon-block__animatedText visible-small"
      }
      else if (props.text.length >= 290){
        return "accordeon-block__animatedText visible-medium"
      }
      else {
        return "accordeon-block__animatedText visible-high"
      }
    }
    else {
      return "accordeon-block__animatedText hidden"
    }
  }

  return (
    <div className="accordeon-block">
      <button
        className={props.smallerFontRequirement ? "accordeon-btn smallerFont" : "accordeon-btn"}
        onClick={() => setVisibility(!visibility)}
      >{props.title}</button>
      <p className={getClassesForTextBlock()}>
        <span className="padding_styled">{props.text}</span>
      </p>
    </div>
  )
}
