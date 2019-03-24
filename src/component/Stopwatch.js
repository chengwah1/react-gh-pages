import React ,{Component} from 'react';
class Stopwatch extends Component {
    state={
        isRuning: false,
        elapsedTime:0,
        previousTime:0
    };
    handleStopwatch = ()=>{
        this.setState(
            {isRuning:!this.state.isRuning}
        );
        if(!this.state.isRuning){
            this.setState({previousTime: Date.now()})
        }
    }
    componentDidMount(){
        this.intervalID = setInterval(this.tick,100)
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick =()=> {
        if(this.state.isRuning){
            const now = Date.now();
            this.setState({
                previousTime:now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            })
        }
    }
    handleReset=()=>{
        this.setState({
            elapsedTime:0
        })
    }
    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime/1000)}</span>
                <div className="stopwatch-button">
                    <button onClick={this.handleStopwatch}>{this.state.isRuning?'Stop':'Start'}</button>
                    <button onClick={this.handleReset}>Restart</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch;