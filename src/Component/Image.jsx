import React,{useState} from 'react'
import Display from './Display';

function Image(props){
  // console.log(props.ele)
  const[data,setData] = useState();
  const[value,setValue] = useState(false);
 
  function Info(e)
  {
    console.log(e)
    if(value == false)
    {
      setData(e)
      setValue(true)
    }
    else{
      setValue(false)
      setData(e)
    }
  }
return (
    <div className="itm">
      <div>
       <img src={props.ele.strMealThumb} alt="" onClick={()=>Info(props.ele.strInstructions)}></img>
      </div>
        <div className="flex-contsiner">
            <h1 className="title">{props.ele.strMeal}</h1>
             {/* <a className="view-btn"  >View Recipe</a>  */}
            
        </div>
      { (data) ? <div className='itm-data'>{data}</div>:false}
      
    </div>
   )
}

export default Image;