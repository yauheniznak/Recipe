function RecipeSearch({label,image,ingredient,colories,weight}){
    return(
        <div className="list">
            <div className="listLeft">
           <h2>{label}</h2>
           <img src={image} alt="food"/>
           </div>
           <div className="listRight">
               <ul>
                   {ingredient.map(components=>(
                       <li>{components}</li>
                   ))}
               </ul>
               <h4>{colories.toFixed()} Calories</h4>
               <h5>{weight.toFixed()} total weight</h5>
           </div>
        </div>

    )
}


export default RecipeSearch