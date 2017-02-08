// src/components/TimePicker.jsx
// 省略了一些方法的具体内容和组件属性的传递
import React, {PropTypes} from 'react';
import moment from 'moment';

import OutsideClickHandler from './OutsideClickHandler';
import TimePickerModal from './TimePickerModal';

// 组件开发要养成良好的习惯，检查传入的属性，并设定默认属性值
const propTypes = {
    defaultTime: PropTypes.string,
    focused: PropTypes.bool,
    onFocusChange: PropTypes.func,
    onHourChange: PropTypes.func,
    onMinuteChange: PropTypes.func,
    onTimeChange: PropTypes.func
};

const defaultProps = {
    defaultTime: moment().format("HH:mm"),
    focused: false,
    onFocusChange: ()=>{},
    onHourChange: ()=>{},
    onMinuteChange: ()=>{},
    onTimeChange: ()=>{}
};

export default class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        let {defaultTime, focused} = props;
        let [hour, minute] = initialTime(defaultTime);
        this.state = {
            hour,
            minute,
            focused
        }
        this.onFocus = this.onFocus.bind(this);
        this.onClearFocus = this.onClearFocus.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);
        this.handleMinuteChange = this.handleMinuteChange.bind(this);
    }

    // 改变 state,并触发onFocusChange callback
    onFocus(){}
    onClearFocus(){}
    handleHourChange(){}
    handleMinuteChange(){}

    renderTimerPickerModal() {
        let {hour, minute, focused} = this.state;
        // 给组件传入小时/分钟，以及handleHourChange,handleMinuteChange
        return (
            <TimePickerModal />
        )
    }
    render() {
        let {hour, minute, focused} = this.state;
        let times = '${hour}:${minute}';
        return (
            <div className="time_picker_container">
                <div onClick={this.onFocus} className="time_picker_preview">
                    <div className={previewContainerClass}>
                        {times}
                    </div>
                </div>
                {/*OutsideClickHandler 就是上面说到的专门用来处理modal外点击时间，来关闭modal的组件*/}
                <OutsideClickHandler onOutsideClick = {this.onClearFocus}>
                    {this.renderTimerPickerModal()}
                </OutsideClickHandler>
            </div>
        )
    }
}

TimePicker.propTypes = PropTypes;
TimePicker.defaultProps = defaultProps;