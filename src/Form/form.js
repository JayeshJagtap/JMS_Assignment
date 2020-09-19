import React from "react"
import CatInputs from "./components/CatInputs"
import RadioButton from "./components/radio_button"
import TextBox from "./components/textbox"
import './form.css'

class Form extends React.Component {
  
  
    state = {
      cats: [{name:"", age:""}],
      radiobutton:[{QuestionText:"",option1:"",option2:""}],
      owner: "",
      description: "",
      textbox:[{Textbox:""}],
      targetvalue:0,
      FormName:""
    }
    
  
handleChange = (e) => {
    if (["name", "age"].includes(e.target.className) ) {
      let cats = [...this.state.cats]
      cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ cats }, () => console.log(this.state.cats))
    } 
    if (["QuestionText"].includes(e.target.className) ) {
      let radiobutton = [...this.state.radiobutton]
      radiobutton[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ radiobutton }, () => console.log(this.state.radiobutton))
    } 
    if (["option1","option2"].includes(e.target.className) ) {
      let radiobutton = [...this.state.radiobutton]
      radiobutton[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ radiobutton }, () => console.log(this.state.radiobutton))
    } 
    if (["owner"].includes(e.target.className) ) {
      let FormName = [...this.state.FormName]
      FormName = e.target.value
      this.setState({ FormName}, () => console.log(this.state.radiobutton))
    } 
    if (["Textbox"].includes(e.target.className) ) {
      let textbox = [...this.state.textbox]
      textbox[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ textbox }, () => console.log(this.state.radiobutton))
    } 
  }
addComponent =(e)=>{
      let {targetvalue} = this.state
      console.log("targetvalue", targetvalue);
      if(targetvalue == 1){
        this.setState((prevState) => ({
          cats: [...prevState.cats, {name:"", age:""}],
        }));
      }
      else if(targetvalue == 2){
        this.setState((prevState) => ({
          radiobutton: [...prevState.radiobutton, {QuestionText:"", option1:"",option2:""}],
        }));
      }
      else if(targetvalue == 3){
        this.setState((prevState) => ({
          textbox: [...prevState.textbox, {Textbox:""}],
        }));
      }
      console.log("targetvalue", this.state);

  }

  addOption=(e)=>{
    let radio = [...this.state.radiobutton];
    let cats = [...this.state.cats]
    //radio[e.target.dataset.id] = radio[e.target.dataset.id].concat({option1:"option1"})
    console.log("addoption",e.target.dataset);
    
  }
   
  handleSelectChange=(e)=>{
    console.log("select value",e.target.value);
    this.setState({targetvalue:e.target.value});
  }

   downloadJSON = async () =>{
  const fileName = "file";
  const json = JSON.stringify(this.state);
  const blob = new Blob([json],{type:'application/json'});
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }
  resetForm = (e) =>{
    this.setState({
      cats: [{name:"", age:""}],
      radiobutton:[{QuestionText:"",option1:"",option2:""}],
      owner: "",
      description: "",
      textbox:[{Textbox:""}],
      targetvalue:0,
      FormName:""
    })
  }
handleSubmit = (e) => { e.preventDefault() }
render() {
    let {FormName, description, cats, radiobutton,textbox} = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="FormDiv">
        <label htmlFor="name">FormName : </label> 
        <input type="text" className="owner" id="owner" placeholder="Enter Form Name" value={FormName} />
        </div>
        <div className="CommonDiv">
        <select value={this.state.value} onChange={this.handleSelectChange}>
        <option value={0}>Select Component to Add</option>
        <option value={1}>Simple TextBox</option>
        <option value={2}>Radio button Component</option>
        <option value={3}>Multiline Input</option>
         </select> 
         <button onClick={this.addComponent} className="AddBtn"> Add new Component</button>
         </div>
         <div className="CommonDiv"><CatInputs cats={cats} /></div>
         
         <div className="CommonDiv"><RadioButton onadd={this.addOption} radio={radiobutton} /></div>
         <div className="CommonDiv"><TextBox text_box={textbox} /></div>
        
      </form>
      <button className="CommonBtn" onClick={this.resetForm}>Reset Form</button>
      <button className="CommonBtn" onClick={this.downloadJSON}>Download JSON</button>
      </div>
    )
  }
}
export default Form