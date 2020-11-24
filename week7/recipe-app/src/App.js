
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SetofButtons() {
  return (
    <>
      <CoolButton text="1" color="red" />
      <CoolButton text="3" color="rebeccapurple" />
      <CoolButton text="2" color="#eee" />
    </>
  )
}


function CoolButton(props) {
  return <button style={{backgroundColor: props.color}}>{props.text}</button>;
}


function App() {
  return (
    <div className="container">
      <fieldset>
        <legend>Recipes</legend>
        <ul className="list">
          <li>Creme Brulee</li>
          <li>Toast</li>
        </ul>
        <div className="jumbotron">
          <h3>{new Date().toLocaleDateString()}</h3>
          <h3>{new Date().toLocaleTimeString()}</h3>
        </div>
        <div className="card">
          <div className="card-header bg-dark text-light">This is an example card</div>
          <div className="card-body">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat qui ex a nostrum omnis, similique necessitatibus maxime praesentium non, atque est consequuntur quasi repellendus nulla.</p>
            <SetofButtons />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
