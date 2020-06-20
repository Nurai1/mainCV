import React, {useState} from 'react';

import AccordeonBlock from './accordeon-block';
import './accordeon.css';

export default function Accordeon({ info }) {
  const [smallerFontRequirement, setSmallerFontRequirement] = useState(false);
  return (
    <div className="accordeon accordeon-wrapper">
      <h2 className="accordeon-title">Выберите услугу:</h2>
      {info.map((item, index) => {
        if (item.title.length > 25 && smallerFontRequirement === false) {
          setSmallerFontRequirement(true);
        }
        return <AccordeonBlock
            key={index}
            title = {item.title}
            text = {item.text}
            smallerFontRequirement = {smallerFontRequirement}
        />
      })}
    </div>
  );
}
