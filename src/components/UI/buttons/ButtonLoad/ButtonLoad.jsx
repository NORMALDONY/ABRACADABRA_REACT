import React from "react";
import "./ButtonLoad.css"

const ButtonLoad = (props)=> {
	return (
		<a className="button" href={props.btn.href}>
			<span>{props.btn.body}</span>
		</a>
	);
};
export default ButtonLoad;