// live cicles method
// componentDidMount() {}; 
// componentDidUpdate() {};
//componentWillUnmount() {};



class Jsx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Indecision",
            subtitle: "Put your life in the hands of computer",
            option: []
        };
        this.pick = this.pick.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.addValue = this.addValue.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }
   
    componentDidMount() {
        
        try {
          const json = localStorage.getItem('option');
          const option = JSON.parse(json);

          if (option) {
              this.setState(() => ({
                  option: option
              }));
          }
        } catch(error) {
            console.log(error);
        }
        
        
    }
    

    

    componentDidUpdate(prevProps,prevState) {
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option)
            localStorage.setItem('option', json);
        }
    }
       

    removeOption(option) {
        //let itemToRemovePosition = this.state.option.indexOf(option);
        var array = this.state.option;
        //array.splice(itemToRemovePosition, 1);
        this.setState((prevState) => ({
                        option: prevState.option.filter((el) =>  option !== el) 
                    }));
    }

    removeAll() {
        this.setState(() => ({ option: [] }));
    }

    pick() {
        let arrayLength = this.state.option.length;
        var randomChoice = this.state.option[Math.floor(Math.random() * arrayLength)];
        alert(randomChoice);
    }

    addValue(option) {


        if (!option) {
            return "Enter Valid Value to add item";
        } else if (this.state.option.indexOf(option) !== -1) {
            return "This option already exists";
        }

        this.setState({ option: [...this.state.option, option] });

    }

    render() {
        return (
            <div>
                <Header title={this.state.title} sub={this.state.subtitle} />
                <WhatToDO pickOne={this.pick} functionality={this.state.option.length > 0} />
                <RemoveAll remove={this.removeAll} />
                <InputField getValue={this.addValue} />
                <Options
                    choice={this.state.option}
                    removeOption={this.removeOption}
                />
                <SingleOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.sub && <h3>{this.props.sub}</h3>}
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'New Indecision'
}

class WhatToDO extends React.Component {
    render() {
        return (
            <button onClick={this.props.pickOne} disabled={!this.props.functionality}>What to Do</button>
        );
    }
}

class RemoveAll extends React.Component {
    render() {
        return (
            <button onClick={this.props.remove}>Remove All</button>
        );
    }
}

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
        this.getValue = this.getValue.bind(this);
    }

    getValue(e) {
        e.preventDefault();
        const option = e.target.elements.inputForm.value.trim();
        const error = this.props.getValue(option);

        this.setState(() => ({ error: error }));

        if (option) {
            e.target.elements.inputForm.value = '';
            this.props.getValue(option);
        }
    }



    render() {
        var style = {
            color: "red"
        }
        return (
            <div>
                <br />
                {this.state.error && <p style={style}>{this.state.error}</p>}
                <form onSubmit={this.getValue} >
                    <input name="inputForm" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Options = (props) => {
    return (
        <ol>
            {props.choice.map((el, index) => {
                return <li key={index}><SingleOption singleElement={el} removeOption={props.removeOption} /></li>
            })}
        </ol>
    );
}





const SingleOption = (props) => {
    return (
        <div>
            {props.singleElement}
            {props.singleElement && <button style={{ marginLeft: '10px', borderRadius: '10%' }}
                onClick={(e) => {
                    props.removeOption(props.singleElement);
                }}
            >
                remove
            </button>}
        </div>
    );
}






ReactDOM.render(<Jsx name="Viktor Grom" />, document.getElementById('app'));

