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
        this.state = {nombre: this.props.start, pas: this.props}
        this.nb = null
    }

    componentDidMount() {
        window.setInterval(this.add.bind(this), 1000)
    }

    add() {
        this.setState(function (state, props) {
            return {nombre: this.state.nombre + props.step}
        });
    }

    componentwillUnmount() {
        window.clearInterval(this.nb)
    }


    render() {
        return <h2>{this.state.nombre}</h2>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}


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
        <Welcome name="Dorothée"></Welcome>
        <Welcome name="Jean"></Welcome>
        <Clock></Clock>
        <ManualIncrementer></ManualIncrementer>
    </div>
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'))