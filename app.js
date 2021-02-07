document.getElementById("search-food").addEventListener('click', function(){
    mealData();
})
function mealData(){
    let inputText = document.getElementById("input-text").value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then(res => res.json())
    .then(data => displayMeal(data));
    // console.log(data);
}
const displayMeal = meals =>{
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = "";
    // console.log(meals.meals);
    for (let i = 0; i < meals.meals.length; i++) {
        const meal = meals.meals[i];
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img class="image" src="${meal.strMealThumb}">
        <h2>${meal.strMeal} </h2>
        <button onclick="displayMealDetail('${meal.idMeal}')"> Details </button>
        `
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);  
    }
} 
const displayMealDetail = id =>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]));
}
const renderMealInfo = meal => {
        // console.log(meal);
        const mealDetail = document.getElementById('meal-detail');
        mealDetail.innerHTML = `
            <img class="image" src="${meal.strMealThumb}">
            <h2>${meal.strMeal}</h2>
            <h5>Ingrediants</h5>
            <p>1. ${meal.strIngredient1}</p>
            <p>2. ${meal.strIngredient2}</p>
            <p>3. ${meal.strIngredient3}</p>
            <p>4. ${meal.strIngredient4}</p>
            <p>5. ${meal.strIngredient5}</p>
            <p>6. ${meal.strIngredient6}</p>
            <p>7. ${meal.strIngredient7}</p>
            <p>8. ${meal.strIngredient8}</p>
            <p>9. ${meal.strIngredient9}</p>
            <p>10. ${meal.strIngredient10}</p>
        `
}