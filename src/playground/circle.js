function appear() {

    class GameOver extends React.Component {
        render() {
            var style = {
                color: "red",
                marginTop: '300px',
                marginLeft: '500px',
                fontSize: '40px'
            }
            var styles = {
                color: "green",
                marginTop: '40px',
                marginLeft: '420px',
                fontSize: '40px'
            }
            let reload = () => {
                return location.reload();
            }
            return (

                <div>
                    <p style={style}>Game Over</p>
                    <p style={styles}>Your Best result: {Math.min.apply(null, bestResult)}</p>
                    <button onClick={reload} style={{ marginLeft: '550px' }}>Play Again</button>
                </div>
            );
        }
    }

    var test = [];
    var bestResult = [];
    class Timer extends React.Component {
        render() {
            return (
                <p style={{ fontSize: '25px' }}>Timer: {this.props.time} <br /> Clicks: {this.props.clicks}</p>
            );
        }

    }

    class Circle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                width: '50px',
                height: '50px',
                backgroundColor: 'green',
                borderRadius: '5%',
                display: 'block',
                marginTop: '300px',
                marginLeft: '300px',
                time: [new Date().getTime()],
                clicks: 0
            };

            this.newCircle = this.newCircle.bind(this);
            this.newColor = this.newColor.bind(this);
        }

        newColor() {
            let characters = "1234567890ABCDEF";
            var color = "#";

            for (var i = 0; i < 6; i++) {
                let ch = characters[Math.floor(Math.random() * 16)];

                color += ch;
            }

            return color;
        }

        newCircle() {
            console.log(this.state.clicks);
            if (this.state.clicks < 6) {

                test.pop();
                test.push((new Date().getTime() - this.state.time) / 1000);
                bestResult.push((new Date().getTime() - this.state.time) / 1000);
                this.setState(() => {

                    return {
                        width: Math.floor(Math.random() * 50 + 25) + 'px',
                        height: Math.floor(Math.random() * 50 + 25) + 'px',
                        borderRadius: Math.floor(Math.random() * 25) + 'px',
                        marginTop: Math.floor(Math.random() * 600 + 25) + 'px',
                        marginLeft: Math.floor(Math.random() * 600 + 25) + 'px',
                        backgroundColor: this.newColor(),
                        time: new Date().getTime(),
                        clicks: this.state.clicks + 1

                    }
                });
            } else {
                ReactDOM.render(<GameOver result={this.sortArray} />, document.getElementById('app'));

            }

        }




        render() {

            let style = {
                width: this.state.width,
                height: this.state.height,
                backgroundColor: this.state.backgroundColor,
                borderRadius: this.state.borderRadius,
                display: this.state.display,
                marginTop: this.state.marginTop,
                marginLeft: this.state.marginLeft
            };

            return (
                <div>
                    <Timer time={test[0]} clicks={this.state.clicks} />
                    <div style={style}
                        onClick={this.newCircle}
                    >
                    </div>
                </div>
            );
        }

    }



    ReactDOM.render(<Circle />, document.getElementById('app'));


}

class Presentation extends React.Component {
   
    render() {
        var style = {
            color: "green",
            marginTop: '340px',
            marginLeft: '320px',
            fontSize: '30px'
        }
        var startgame = () => {
            setTimeout(appear, 1000);
        }

        var styles = {
            width: Math.floor(Math.random() * 50 + 25) + 'px',
            height: Math.floor(Math.random() * 50 + 25) + 'px',
            borderRadius: Math.floor(Math.random() * 25) + 'px',
            marginTop: Math.floor(Math.random() * 40 + 25) + 'px',
            marginLeft: Math.floor(Math.random() * 600 + 25) + 'px',
            backgroundColor: "red",
            zIndex: 99999
        }

      
        return (
            <div style={style}>
                Rules: when item will appear,<br/>
                click it as soon as possible, after 6 click<br/>
                you will see how fast you are! Have Fun:)<br/>
               <button style={{ marginLeft: '200px', marginTop: '25px' }} onClick={startgame}>Gtart Game</button>
                <p style={styles}></p>
               

            </div >
        );
    }
}

ReactDOM.render(<Presentation />, document.getElementById('app'));



