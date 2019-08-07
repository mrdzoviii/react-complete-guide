import React from 'react';
import style from "./Person.module.css";
const person = (props) => {

    return (<div className={style.Person} >
                <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
                <p>My hobbies :{props.children}</p>
                <input type="text" onChange={props.changed}  value={props.name}></input>
           </div>
    )
}

export default person;