import './Card.css';
/*
 props.children contains all the content between the opening and closing tag of the custom component
*/ 

function Card(props){
    const classes='card '+ props.className;
   return <div className={classes}>{props.children}</div>
}
export default Card;