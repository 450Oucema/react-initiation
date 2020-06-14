function WelcomeFunc({name, children}) {
    return <h1>Bonjour, {name} - {children}</h1>
}

class Welcome extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render () {
        return <div>
                    <h1>Bonjour {this.props.name}</h1>
                    <p>{this.props.children}</p>    
                </div>
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }
    
    render() {
        const date = new Date()
        return <div>
            {this.state.date.toLocaleString()}
        </div>
    }
}

class Incrementer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nombre: this.props.start, step: this.props.step, timer: null}
    }

    componentDidMount() {
        this.play()
    }

    add() {
        this.setState(function (state, props) {
            return {nombre: this.state.nombre + props.step}
        });
    }

    componentwillUnmount() {
        window.clearInterval(this.state.timer)
    }

    pause() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.add.bind(this), 1000)
        })
    }

    toggle (){
        return this.state.timer ? this.pause() : this.play()
    }

    label () {
        console.log(this.state.timer)
        return this.state.timer ? 'Pause' : 'Play'
    }

    reset() {
        this.setState(function (state, props) {
            return {nombre: 0}
        })
    }

    render() {
        return <div>
            <h2>{this.state.nombre}</h2>
            <button className="btn btn-primary" onClick={this.toggle.bind(this)}>{this.label()}</button>
            <button className="btn btn-danger" onClick={this.reset.bind(this)}>Reset</button>
        </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
};


class ManualIncrementer extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {n: 0}
    }

    increment(e) {
        e.preventDefault()
        this.setState((state, props) => ({n: state.n + 1}))
    }

    render() {
        return <div>Valeur: {this.state.n} <button onClick={this.increment.bind(this)} className="btn btn-primary">Incrémenter</button></div>
    }
} 

function Home() {
    return <div>
        <Welcome name="Dorothée"/>
        <Clock/>
        <Incrementer/>
    </div>
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'))