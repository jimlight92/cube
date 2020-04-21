import React from 'react'
import './square.scss'

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();

        const minPosition = 300
        const maxPosition = 1000
        const size = 25;
        
        this.state = {
            min: minPosition,
            max: maxPosition,
            target: {
                position: this.randomIntFromInterval(minPosition, maxPosition - size),
                size: size,
                inner: {
                    style: null
                },
                outer: {
                    style: null
                }
            },
            square: {
                style: null
            }
        }
    }

    randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    componentDidMount() {
        this.setState({
            wrapper: {
                height: this.wrapper.current.clientHeight,
                width: this.wrapper.current.clientWidth
            }
        })

        setTimeout(() => { 
            this.setState(state => ({
                ...state,
                target: {
                    ...state.target,
                    inner: {
                        style: {
                            ...state.target.inner.style,
                            ...this.getTargetStyles(state.target.position - state.target.size)
                        }
                    },
                    outer: {
                        style: {
                            ...state.target.outer.style,
                            ...this.getTargetStyles(state.target.position + state.target.size)
                        }
                    }
                }
            }))
        }, 1)

        this.onSpacePressed(this.start.bind(this))
    }

    getHeight = (factor) => this.state.wrapper.height * factor / this.state.max;
    getWidth = (factor) => this.state.wrapper.width * factor / this.state.max;

    getBoxStyles = (factor) => {
        const height = this.getHeight(factor);
        const width = this.getWidth(factor);

        return {
            height: `${height}px`,
            width: `${width}px`,
            top: (this.state.wrapper.height / 2) - (height / 2), 
            left: (this.state.wrapper.width / 2) - (width / 2)
        }
    }

    getTargetStyles = (factor) => {
        const height = this.getHeight(factor);
        const width = this.getWidth(factor);

        return {
            height: `${height}px`,
            width: `${width}px`,
            top: (this.state.wrapper.height / 2) - (height / 2), 
            left: (this.state.wrapper.width / 2) - (width / 2),
            border: '2px solid blue'
        }
    }


    onSpacePressed = (callback) => {
        const func = event => {
            if (event.keyCode === 32) {
                callback()
            }

            document.removeEventListener('keyup', func)
        }
        document.addEventListener('keyup', func)
    }

    start = () => {
        this.onSpacePressed(this.stop.bind(this))
        let factor = 0
        this.interval = setInterval(() => { 
            if (factor === this.state.max) {
                this.stop()
                return
            }

            this.setState(state => ({
                ...state,
                square: {
                    ...state.square,
                    style: {
                        ...state.square.style,
                        ...this.getBoxStyles(factor++)
                    }
                }
            }))
        }, 0.75)
    }

    stop = () => {
        clearInterval(this.interval)
        this.onSpacePressed(this.start.bind(this))
    }

    render() {
        return (
            <div ref={this.wrapper} className="square-wrapper">
                <div className="target inner" style={this.state.target.inner.style}></div>
                <div className="target outer" style={this.state.target.outer.style}></div>
                <div className="square" style={this.state.square.style}></div>
            </div>
        )
    }
}

export default Square