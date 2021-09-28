import PropTypes from "prop-types";

const Btn = ({text, color, backgroundColor, className,onClick})=>{
	return(

		<button style={{color, backgroundColor}} onClick={onClick} className={className}>{text}</button>

		)
}


Btn.defaultProps = {
		text: "MyBtn",
		color: "black",
		backgroundColor: "silver"
}

Btn.propTypes={
	text: PropTypes.string,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func,
}

export default Btn;