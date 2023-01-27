import {useState, useEffect} from "react";
import './App.css';
import RecipeSearch from "./RecipeSearch";
import video from './video.mp4'


function App() {

  const MY_ID="1fd2d391";
  const MY_KEY="fc6c2f607ec539e9428c14affba9f261";

  const [mySearch,setMySearch]=useState('');
  const [myRecipes,setMyRecipes]=useState([])
  const [peopleSearch,setPeopleSearch]=useState('salmon');



  

useEffect(() => {
 (async function() {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${peopleSearch}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data)
    setMyRecipes(data.hits)
  })();
 }, [peopleSearch]);


const finalSearch = (e)=>{
  e.preventDefault ();
  setPeopleSearch(mySearch)
}

const myRecipeSearch =(e)=>{
  setMySearch(e.target.value);
  console.log(e.target.value);
 
}


  return (<div className="container">
            <div className="video">
               <video autoPlay muted loop>
               < source src={video} type="video/mp4"/>
               </video>
               
             </div>
             <div className="pack">
             <h1>Find a recipe</h1>
               <form onSubmit={finalSearch}>
               <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
              </form>
              <button onClick={finalSearch}>My meal today...</button>
            </div>
            <div  >
              {myRecipes.map(element =>(
                <RecipeSearch label={element.recipe.label}
                               image={element.recipe.image}
                               ingredient={element.recipe.ingredientLines }
                               colories={element.recipe.calories }
                               weight={element.recipe.totalWeight}
                 />
              ))}

           
            </div>
   </div>
  );
}

export default App;
