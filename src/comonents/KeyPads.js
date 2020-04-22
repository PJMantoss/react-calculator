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

            <button>/</button>

            <button>x</button>

            <button>7</button>

            <button>8</button>
            
            <button>9</button>
            <button>-</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
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
