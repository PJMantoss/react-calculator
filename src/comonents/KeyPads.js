import React from 'react'

const clearStyle = { background: "#ac3939" };

const KeyPads = (props) => {
    return (
        <div>
            <button 
                className="jumbo" 
                id="clear" 
                onClick={this.props.initialize} 
                style={clearStyle} 
                value="AC"
            >
                AC
            </button>

            <button 
                id="divide" 
                onClick={this.props.operators} 
                style={operatorStyle} 
                value="/"
            >
                /
            </button>

            <button
                id="multiply" 
                onClick={this.props.operators} 
                style={operatorStyle} 
                value="x"
            >
                x
            </button>

            <button
                id="seven" 
                onClick={this.props.numbers}  
                value="7"
            >
                7
            </button>

            <button
                id="eight" 
                onClick={this.props.numbers}  
                value="8"
            >
                8
            </button>

            <button
                id="nine" 
                onClick={this.props.numbers}  
                value="9"
            >
                9
            </button>

            <button
                id="subtract" 
                onClick={this.props.operators} 
                style={operatorStyle} 
                value="-"
            >
                -
            </button>

            <button
                id="four" 
                onClick={this.props.numbers}  
                value="4"
            >
                4
            </button>

            <button
                id="five" 
                onClick={this.props.numbers}  
                value="5"
            >
                5
            </button>

            <button
                id="six" 
                onClick={this.props.numbers}  
                value="6"
            >
                6
            </button>

            <button>+</button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
        </div>
    )
}

export default KeyPads
