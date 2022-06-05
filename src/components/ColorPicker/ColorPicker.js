import React, { Component } from "react";
import './ColorPicker.css';


class ColorPicker extends Component {

    state = {
        activeOptionsIdx: 1,
    };


    setActiveIdx = index => {
        this.setState({ activeOptionsIdx: index });
    };

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];
        if (index === this.state.activeOptionsIdx) {
            optionClasses.push('ColorPicker__option--active');
        }
        return optionClasses.join(' ');
    }; 

    render() {

        const { activeOptionsIdx } = this.state;
        const { options } = this.props;
        const { lable } = options[activeOptionsIdx];
        
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Выбран цвет: {lable}</p>
                <div>
                    {options.map(({ lable, color }, index) => (
                        <button
                            key={lable}
                            className={this.makeOptionClassName(index)}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setActiveIdx(index)}
                        ></button>
                    ))}
                </div>
            </div>
        );
    }
}



// const ColorPicker = ({ options }) => (
//     <div className="ColorPicker">
//         <h2 className="ColorPicker__title">
//             Color Picker
//         </h2>
//         <div>
//             {options.map(({ label, color }) => (
//                 <span
//                     key={label}
//                     className="ColorPicker__option"
//                     style={{ backgroundColor: color }}
//                 ></span>
//             ))}
//         </div>
//     </div>
// );

export default ColorPicker;