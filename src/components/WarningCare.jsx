import React from "react"

import "../styles/WarningCare.css"

class WarningCare extends React.Component{
	componentDidMount() {
		const toggleList = document.getElementById('toggle-list');
		const list = document.getElementById('list');
		const cross = document.getElementById('cross');

		toggleList.addEventListener('click', function() {
			list.classList.toggle('show');
			cross.classList.toggle('_active');
		});

		const toggleList__2 = document.getElementById('toggle-list__2');
		const list__2 = document.getElementById('list__2');
		const cross__2 = document.getElementById('cross__2');

		toggleList__2.addEventListener('click', function() {
			list__2.classList.toggle('show');
			cross__2.classList.toggle('_active');
		});
  }
	render(){
		return (
			<div className="warning__care">
					<h2 className="warning__title">Противопоказания и уход</h2>
						<div className="warning__details" id="toggle-list">
							<div className="warning__title">
								<h3 className="warning__name" >Противопоказания</h3>
								<span className="cross" id="cross"></span>
							</div>
							<ul id="list">
							<p className="warning__text">К общим медицинским противопоказаниям относятся: </p>
								<li>
									СПИД, ВИЧ, гепатит
								</li>
								<li>
									инсулинозависимая форма сахарного диабета
								</li>
								<li>
									плохая свертываемость крови
								</li>
								<li>
									период проведения химио- и лучевой терапии при онкологических 
									заболеваниях и период восстановления после перенесённой болезни
								</li>
								<li>
									психические расстройства
								</li>
								<li>
									эпилепсия
								</li>
								<li>
									склонность к образованию келоидных рубцов;
								</li>
								<li>
									алкогольное и наркотическое опьянение;
								</li>
								<li>
									кожные заболевания – дерматозы, псориаз;
								</li>
								<li>
									прием фотосенсибилизирующих препаратов;
								</li>
								<li>
									хронические заболевания слизистых и лор-органов 
									"ринит, конъюнктивит, отит, гайморит"
								</li>
								<li>
									выраженные аутоиммунные болезни – склеродермия и красная волчанка;
								</li>
								<li>
									заболевания ротовой полости "стоматит, пародонтоз, гингивит"
								</li>
								<li>
									острые воспалительные процессы в организме, повышенная температура тела.
								</li>
								<p className="warning__text__bottom">
									Кроме этого, могут быть выявлены другие индивидуальные медицинские противопоказания. 
									Вопрос об отсутствии противопоказаний рекомендуется решать со своим лечащим врачом.
								</p>
							</ul>
						</div>

						<div className="warning__details" id="toggle-list__2">
						<div className="warning__title">
								<h3 className="warning__name" >Уход</h3>
								<span className="cross" id="cross__2"></span>
							</div>
							<ol id="list__2">
							<p className="warning__text">
								Пирсинг требует соблюдения правил и рекомендаций
								<br/>
								для лучшего заживления.
							</p>
								<li>
									<strong>Покой. </strong>
									Украшение должно быть максимально статичным: 
									крутить, вытаскивать, прокручивать не нужно. 
									Если вы занимаетесь спортом, то нужно следить, 
									чтобы украшение было неподвижно. При пирсинге пупка, 
									например, лучше не делать скручивания. 
									В течение первого месяца украшение снимать без показаний нельзя!
								</li>
								<li>
									<strong>Чистота. </strong>
									Промывать чистой кипяченой или для инъекций водой либо физраствором. 
									Корочки белые, бело-желтые размачивать компрессами с физраствором, 
									аккуратно счищать с украшения и кожи ватными палочками, 
									потом споласкивать. Избегайте попадания в свежий пирсинг разных 
									косметических средств: кремов, пудры, скрабов, пилингов и прочего.
								</li>
								<li>
									<strong>Сухость. </strong>
									В первый месяц после прокола рекомендуется воздержаться от 
									принятия ванн, купания в бассейне и открытых водоемах. 
									Мыться и мыть голову можно и нужно в привычном режиме. 
									В прокол может попадать мыльная пена, но важно ее тщательно смывать.
								</li>
								<p className="warning__text__bottom">
									<strong>Пирсинг уха. </strong>
									Первые десять дней нужно делать примочки с мирамистином 2 раза в 
									день по 3 минуты. Далее уход физраствором. 
								</p>
								<p className="warning__text__bottom">
									<strong>Замена украшения. </strong>
									Происходит только после полного заживления прокола, 
									не ранее чем через месяц после процедуры.  
								</p>
							</ol>
						</div>
				</div>
		)
	}
}

export default WarningCare;