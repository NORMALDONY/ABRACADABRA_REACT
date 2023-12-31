import React from "react"

import WarningCare from "../../components/WarningCare"
import ButtonLoad from "../../components/UI/buttons/ButtonLoad/ButtonLoad"
import PiercingTemplate from "../../components/PiercingTemplate"

import "./Brows.css"

import Brow from "./brow.jpg"

const Brows = ()=> {
		return (
			<div className="brows__wrapper">
				<div className="brows__title">
					<h1 className="brows__h1">СДЕЛАТЬ ПИРСИНГ БРОВИ</h1>
					<p className="brows__p__top">
						Пирсинг бровей представляет собой процедуру прокола области над областью газ. 
						Подобный вид прокола одинаково хорошо подходит как мужчинам, так и женщинам. 
						Часто к нему прибегают ещё и по той причине, что заживает прокол подобного рода быстро, 
						а особого ухода за ним не требуется. Наши мастера имеют медицинское образование. 
						Во время процедуры мастер использует только одноразовые расходники. 
						Все инструменты проходят обработку стерилизации.
					</p>
				</div>
				
				<div className="brows__top">
					<h2 className="brows__h2__top">
						СРОК ЗАЖИВЛЕНИЯ: от 6 недель
						<br/>
						СРОК ПЕРВИЧНОГО ЗАЖИВЛЕНИЯ: 2-4 недели
					</h2>
				</div>
				
				<div className="brows__works">
					<PiercingTemplate 
						template={{
							title: "Вертикальный",
							text: "Классический прокол находится на внешний трети брови. Хоть и называется данный вид вертикальным, как правило, лучше смотрится перпендикурярное расположение к этой части дуги. Чтобы пирсинг смотрелся гармонично, вход и выход канала должны располагаться на равном расстоянии от волосков.",
							src: Brow
						}}
					/>
					<PiercingTemplate 
						template={{
							title: "Вертикальный",
							text: "Классический прокол находится на внешний трети брови. Хоть и называется данный вид вертикальным, как правило, лучше смотрится перпендикурярное расположение к этой части дуги. Чтобы пирсинг смотрелся гармонично, вход и выход канала должны располагаться на равном расстоянии от волосков.",
							src: Brow
						}}
					/>
					<PiercingTemplate 
						template={{
							title: "Вертикальный",
							text: "Классический прокол находится на внешний трети брови. Хоть и называется данный вид вертикальным, как правило, лучше смотрится перпендикурярное расположение к этой части дуги. Чтобы пирсинг смотрелся гармонично, вход и выход канала должны располагаться на равном расстоянии от волосков.",
							src: Brow
						}}
					/>
				</div>
				<div className="brows__middle">
					<p className="brows__p">
						Подробнее о виде прокола лучше посоветоваться с мастером, 
						он разбирается в толщине кожи и количестве жировой прослойки. 
						Специалист оценит вашу внешность, и подберет наиболее приемлемый вариант.
					</p>
					<p className="brows__p">
						Помните, что сразу два прокола одной брови осуществлять не стоит. 
						Следующий делается только после заживления предыдущего. 
						Это препятствует распространению инфекции, а также способствует лучшей регенерации тканей.
					</p>
					<p className="brows__p">
						Если Вы хотите узнать, сколько будет стоить процедура и на какой зоне брови лучше 
						остановиться в Вашем случае, приходите на бесплатную консультацию. 
						Записаться на нее или сразу на пирсинг можно по телефону или на нашем сайте через 
						форму онлайн записи. 
					</p>
					<div className="brows__middle__button">
					 <ButtonLoad btn={{className: "btn-main",body: "Получить консультацию", href: "#popup"}}/>
					</div>
				</div>
					<WarningCare />
				</div>
		)
}

export default Brows