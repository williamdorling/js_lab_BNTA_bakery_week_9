const Cake = ({cakeName, ingredients, price, rating}) => {

  const showList= (listOfIngredients) => {
    let output = "";
    let ingredient;
    for(ingredient of listOfIngredients){
      output += ingredient + ", ";
    }
    return output.slice(0, -2)+ ".";
  }


  return (
    <>
        <h2>{cakeName}</h2>
        <p>Ingredients: {showList(ingredients)}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
    </>
  )
}

export default Cake;