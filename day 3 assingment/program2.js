console.log("2. Countries whose population is less than 2000:");

let countries = [
  {
    name: "India",
    capital: "Delhi",
    population: 4000,
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    population: 1800,
  },
  {
    name: "Pakistan",
    capital: "Islamabad",
    population: 3000,
  },
  {
    name: "Nepal",
    capital: "Kathmandu",
    population: 1200,
  },
  {
    name: "China",
    capital: "Beijing",
    population: 5000,
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    population: 800,
  },
];

for (let a = 0; a < countries.length; a++) {
  if (countries[a].population < 2000) {
    console.log(countries[a].name);
  }
}
