import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import './Counter.css'


class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    // static propTypes = {
    //     initialValue: 1,
    // };

    state = {
        value: this.props.initialValue,
        
    };

    handleIncrement = () => {
        console.log('Кликнули на Увеличить');
        
        this.setState(prevState => {
            console.log(prevState);
            return {
                value: prevState.value + 1,
            }
        });

    };
    handleDecrement = () => {
        console.log('Кликнули на уменьшить');
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        });
       
    };


    render() {
        return (
            <div className="Counter" >
               
                <Value value={this.state.value}/>
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                {/* <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>
                        Увеличить на 1</button>
                    <button type="button" onClick={this.handleDecrement}>
                        Уменьшить на 1</button>
                </div> */}

            </div>
        );
    }
}


// const Counter = () => (
//     <div className="Counter">
//         <span className="Counter__value">0</span>

//         <div className="Counter__controls">
//             <button type="button">Увеличить на 1</button>
//             <button type="button">Уменьшить на 1</button>
//         </div>

//     </div>
// );

export default Counter;