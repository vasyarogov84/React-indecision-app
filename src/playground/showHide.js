class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: "Show Details", Input: "test"};
        this.event = this.event.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    event() {
        if (this.state.message == "Show Details") {
            this.setState(() => {
                return { message: 'Hide detail' }
            });
        } else { 
            this.setState(() => {
                return { message: "Show Details" }
            });
        }
    }
 
    getValue(e) {
      //  e.preventDefault();
      this.setState({Input: e.target.value});
      //console.log(this.state.Input);
    }

    render() {
      var checkInput = (e) => {
          e.preventDefault();
          this.setState({Input: e.target.value});
          };
      var consoleA = () => {
          console.log(this.state.Input);
        var  inputs = document.getElementsByTagName('input')[0];
          inputs.value = "";
          var x = document.createElement("INPUT");
          x.setAttribute("type", "checkbox");
          document.body.appendChild(x);
      }
   
      return(
            <div>
               <button onClick={this.event}>{this.state.message}</button>
               <p>{this.state.message == "Show Details" ? "" : "Hello World"}</p>
               
                
               <input name="option" onChange={checkInput}/>
               <button onClick={consoleA}>Click Me</button>
               
            </div>
        );
    }
}
ReactDOM.render(<Test />, document.getElementById('app'));  