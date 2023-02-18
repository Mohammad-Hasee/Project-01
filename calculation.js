function calculateMealCost() {
  // Get the form values
  const sandwich = document.getElementById('sandwich').value;
  const salad = document.getElementById('salad').value;
  const soup = document.getElementById('soup').value;
  const side = document.getElementById('side').value;
  
  // Calculate the cost of each item
  const sandwichCost = sandwich * 10.00;
  const saladCost = salad * 5.00;
  const soupCost = soup * 5.00;
  const sideCost = side * 2.00;
  
  // Calculate the total cost of the meal
  const totalCost = sandwichCost + saladCost + soupCost + sideCost;
  
  // Display the total cost
  document.getElementById('total-cost').innerHTML = totalCost.toFixed(2);
}