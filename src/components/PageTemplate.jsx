import React from "react";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

import classes from "../styles/PageTemplate.module.css";

const PageTemplate = (props)=> {
	return(
		<div className={classes.pageTemplate_container}>
				<div className={classes.pageTemplate__main}>
					<div className={classes.pageTemplate__image}>
						<img src={props.pageTemplate.image} />
					</div>
					<div className={classes.pageTemplate__text}>
						<h1 className={classes.pageTemplate__text__main}>{props.pageTemplate.textMain}</h1>
						<ul className={classes.pageTemplate__list}>
							<li>{props.pageTemplate.list_1}</li>
							<li>{props.pageTemplate.list_2}</li>
						</ul> 
					</div>
				</div>
				<div className={classes.pageTemplate__total__main}>
					<p>{props.pageTemplate.totalMain}</p>
				</div>
				<div className={classes.pageTemplate__bot}>
					<h1 className={classes.pageTemplate__title__bot}>{props.pageTemplate.titleBot}</h1>
					<p className={classes.pageTemplate__text__bot}>{props.pageTemplate.textBot}</p>
				</div>
				<div className={classes.pageTemplate__buttons}>
					<ButtonLoad btn={{className: "btn-main",body: "Выбрать мастера", href: "/masters"}}/>
					<ButtonLoad btn={{className: "btn-main",body: "Узнать цену", href: "/price"}}/>
					<ButtonLoad btn={{className: "btn-main",body: "Связаться с нами", href: "#popup"}}/>
				</div>
			</div>
	);
};

export default PageTemplate;