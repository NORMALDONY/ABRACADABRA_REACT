import React from "react";

import classes from "../styles/ServicesTile.module.css"

const ServicesTile = (props)=> {
		
	return (
		<div className={classes.services__tile}>
						<div className={classes.tile__text}>
							<h2>{props.tile.body}</h2>
						</div>
			
				<div className={classes.content__tile}>
				<a href={props.tile.href}>
					<div className={classes.tile__img}>
						<img className={classes.tile__img__img} src={props.tile.src} />
						<div className={classes.detail}>{props.tile.detail}</div>
					</div>
				</a>
					<div className={classes.tile__img__text__container}>
						<div className={classes.tile__img__text}>
							<p>{props.tile.text}</p>
						</div>
					</div>
				</div>
		
		</div>
	);
};

export default ServicesTile;