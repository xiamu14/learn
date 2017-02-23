let React = require('react');

class CountryDropdown extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            showOptions: false
        }
        // 手动给 handle 函数绑定 this
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick () {
        this.setState({
            showOptions: true
        });
    }

    render () {
        let options;
        if(this.state.showOptions){
            options = (
                <ul className='options'>
                    <li>New zealand</li>
                    <li>Denmark</li>
                </ul>
            );
        }
        return (
            <div className='dropDown' onClick={this.handleClick}>
                <label>choose a country</label>.{options}
            </div>
        );
    }
}

module.exports = CountryDropdown;
