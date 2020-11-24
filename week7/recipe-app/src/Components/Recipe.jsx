import { Component } from 'react';


class Recipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numLikes: this.props.likes
    }
  
  }

  like = e => {
    this.setState({numLikes: this.state.numLikes+1});
  }

  render() {
    return (
      <div className="col-sm-4 mb-5">
        <div className="card tall">
          <div className="card-header bg-dark text-light">{this.props.name}</div>
          <div className="card-body">
            <p>{this.props.instructions}</p>
            <p>{this.props.calories} kCal.</p>
            <ul>
              {
                this.props.ingredients.map((ing, i) => 
                  <li key={i}>{ing}</li>
                )
              }
            </ul>
            <button className="btn btn-outline-info btn-block at-bottom mt-auto mb-0" onClick={this.like}>{this.state.numLikes} Likes</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;