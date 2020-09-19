import React from "react"
const radio_button = (props) => {
  return (
    props.radio.map((val, idx)=> {
      let catId = `cat-${idx}`, option1 = `option1-${idx}`, option2 = `option2-${idx}`
      return (
        <div style={{marginTop:"2%"}} key={idx}>
          <label htmlFor={catId}>{`Single Choice question ${idx + 1} : `}</label>
          <input
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.radio[idx].QuestionText} 
            className="QuestionText"
            placeholder="Enter Question"
          />
          
        <div className="radio" style={{marginTop:"1%"}} >
          <label>
            <input type="radio" className="radio1" value={props.radio[idx].option1} 
            />
             <input type="text" className="option1" name={option1}
            data-id={idx}
            id={option1} value={props.radio[idx].option1} placeholder="Option 1"/>
          </label>
        </div>
        <div className="radio" style={{marginTop:"1%"}}>
          <label>
            <input type="radio" className="radio2" value={props.radio[idx].option2}
           />
            <input type="text" className="option2"   name={option2}
            data-id={idx}
            id={option2} value={props.radio[idx].option2} placeholder="Option 2"/>
            
          </label>
        </div>

        <button style={{marginTop:"1%"}} onClick={props.onadd}>Add Option</button>
        </div>
      )
    })
  )
}
export default radio_button