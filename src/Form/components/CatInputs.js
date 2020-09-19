import React from "react"
const CatInputs = (props) => {
  return (
    props.cats.map((val, idx)=> {
      let catId = `cat-${idx}`, ageId = `age-${idx}`
      return (
        <div style={{marginTop:"2%"}} key={idx}>
          <label htmlFor={catId}>{`Question ${idx + 1} : `}</label>
          <input
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.cats[idx].name} 
            placeholder="Enter Question"
            className="name"
          />
          <label htmlFor={ageId} style={{marginLeft:"2%"}}>Answer : </label>
          <input
            type="text"
            name={ageId}
            data-id={idx}
            id={ageId}
            value={props.cats[idx].age} 
            placeholder="Enter Answer"
            className="age"
          />
        </div>
      )
    })
  )
}
export default CatInputs