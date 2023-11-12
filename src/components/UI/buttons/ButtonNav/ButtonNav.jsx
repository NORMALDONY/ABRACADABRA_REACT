import React from "react";

import "./ButtonNav.css";

const ButtonsNav = (props)=> {
	return (
		<a className="header__link" href={""}>
			{props.btn.body}
		</a>
	);
};

export default ButtonsNav;