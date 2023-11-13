import React from "react";
import ButtonLoad from "./UI/buttons/ButtonLoad/ButtonLoad";

import "../styles/PageTemplate.css";

const PageTemplate = (props)=> {
	return(
		<div className="pageTemplate_container">
			<h1 className="pageTemplate__title">{props.pageTemplate.title}</h1>
				<div className="pageTemplate__main">
					<div className="pageTemplate__image">
						<img src={props.pageTemplate.image} />
					</div>
					<div className="pageTemplate__text">
						<p className="pageTemplate__text__main">{props.pageTemplate.textMain}</p>
						<ul className="pageTemplate__list">
							<li>{props.pageTemplate.list_1}</li>
							<li>{props.pageTemplate.list_2}</li>
							<li>{props.pageTemplate.list_3}</li>
							<li>{props.pageTemplate.list_4}</li>
						</ul> 
					</div>
				</div>
				<div className="pageTemplate__total__main">
					<p>{props.pageTemplate.totalMain}</p>
				</div>
				<div className="pageTemplate__bot">
					<h1 className="pageTemplate__title__bot">{props.pageTemplate.titleBot}</h1>
					<p className="pageTemplate__text__bot">{props.pageTemplate.textBot}</p>
				</div>
				<div className="pageTemplate__buttons">
					<ButtonLoad btn={{body: "Выбрать мастера", href: "/masters"}}/>
					<ButtonLoad btn={{body: "Узнать цену", href: "/price"}}/>
					<ButtonLoad btn={{body: "Связаться с нами", href: "#popup"}}/>
				</div>
			</div>
	);
};

export default PageTemplate;