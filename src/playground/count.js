class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
      const json = parseFloat(localStorage.getItem('count'));
      
    
    if (json) {
      //console.log(json);
        this.setState(() => ({
          count: json
        }));
        
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)  {
      const json = this.state.count;
      localStorage.setItem('count', json);
    }
  }

  reset() {
    this.setState(() => ({
       count: 0
    }));
  }

  minus() {
    //console.log(typeof(this.state.count));
    this.setState(() => ({
      count: this.state.count - 1
    }));
  }

  add() {
    this.setState(() => ({
      count: this.state.count + 1
    }));
  }
  
  render() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />,document.getElementById('app'));