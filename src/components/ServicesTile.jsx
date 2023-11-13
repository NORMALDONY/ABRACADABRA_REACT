import React from "react";

import classes from "../styles/ServicesTile.module.css"

const ServicesTile = (props)=> {
	return (
		<div className={classes.services__tile}>
			<a href={props.tile.href}>
			<div className={classes.content__tile}>
				<div className={classes.tile__img}>
					<img className={classes.tile__img__img} src={props.tile.src} />
				</div>
				<div className={classes.tile__text}>
					<h2 className={classes.tile__text__h2}>{props.tile.body}</h2>
				</div>
			</div>
		</a>
		</div>
	);
};

export default ServicesTile;