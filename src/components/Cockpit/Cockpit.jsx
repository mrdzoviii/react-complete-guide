import React,{useEffect} from 'react';
import styles from './Cockpit.module.css';

const Cockpit = props => {
    useEffect(()=>console.log("Use effect")
    );
    const classes=[];
    let btnClass='';
    if(props.showPersons){
        btnClass=styles.red;
    }
    if(props.personsLength<=2){
        classes.push(styles.red);
    }
    if(props.personsLength<=1){
        classes.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This really working!!!</p>
            <button className={btnClass} onClick={props.toggle}> Show/hide persons</button>
        </div>
        
    )
}

export default Cockpit;