import React from "react";

import classes from "../styles/PiercingTemplate.module.css";

const PiercingTemplate = (props)=> {
	return(
			<div className={classes.wrapper}>
						<div className={classes.container}>
							<h2 className={classes.title}>{props.template.title}</h2>
							<p className={classes.text}>{props.template.text}</p>
						</div>
						<div className={classes.image}>
							<img src={props.template.src}/>
						</div>
			</div>
	);
};

export default PiercingTemplate;