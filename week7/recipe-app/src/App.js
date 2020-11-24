
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './Components/Recipe';
import Food from './images/1382539982692.jpeg';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-dark text-light">
        <h1>Recipe<span className="text-warning">Box</span></h1>
      </div>
      <div className="row">
        <Recipe 
          name="Toast" 
          instructions="Place in toaster. Heat thoroughly. Spread Avocado, and enjoy!"
          ingredients={["bread", "olive oil", "tomatoes", "avocado"]}
          calories={500}
          likes={3}
        />
        <Recipe 
          name="Creme Brulee" 
          instructions="Combine ingredients, heat in oven, allow to set, torch when ready."
          ingredients={["cream", "eggs", "sugar", "vanilla"]}
          calories={300}
          likes={8}
        />
        <Recipe 
          name="Pasta" 
          instructions="Boil in water, strain from water, and add sauce."
          ingredients={["noodles", "sauce", "parmesan"]}
          calories={600}
          likes={5}
        />
      </div>
      <img src={Food} alt="creme brulee" />
    </div>
  );
}

export default App;
