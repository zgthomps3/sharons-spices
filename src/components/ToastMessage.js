import React from 'react'
import styles from './ToastMessage.module.css'

class ToastMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.remove = this.remove.bind(this);
	}
	
	remove() {
		this.setState({
			hidden: true
		});
		if (this.props.timeoutFunction)
			this.props.timeoutFunction();
	}
	
	componentDidMount() {
		this.timer = setTimeout(
			this.remove,
			5000
		);
	}
	
	render() {
		return (
			<div className={this.state.hidden ? styles.HiddenToastBox : styles.ToastBox}>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

export default ToastMessage;