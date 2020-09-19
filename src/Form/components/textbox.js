import React from "react"
const text_box = (props) => {
  return (
    props.text_box.map((val, idx)=> {
      let catId = `cat-${idx}`, ageId = `age-${idx}`
      return (
        <div style={{marginTop:"2%"}} key={idx}>
          <label htmlFor={catId}>{`TextBox ${idx + 1} : `}</label>
          <textarea
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.text_box[idx].name} 
            className="Textbox"
            maxLength={500}
            style={{display:"block", margin:"0 auto"}}
            placeholder="Enter Text upto length 500 char"
          />

        </div>
      )
    })
  )
}
export default text_box