import React from "react";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

import classes from "../styles/Master.module.css";

const Master = (props)=> {
	return (
		<div className={classes.master}>
			<div className={classes.master__image}>
				<img className={classes.master__img} src={props.master.src}/>
			</div>
			<div className={classes.master__element}>
				<div className={classes.master__element__h1}>
					<h1>{props.master.name}</h1>
				</div>
					<div className={classes.master__text}>
						<p className={classes.master__text__p}>{props.master.description}
						<a href={props.master.link}>Контакт: {props.master.linkText}</a>
						</p>
					</div>
					<div className={classes.master__button}>
						<ButtonLoad btn={{body: "Посмотреть работы Юры", href: ""}}/>
					</div>
			</div>
		</div>
	);
};

export default Master;