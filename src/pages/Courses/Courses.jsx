import React from "react";

import "./Courses.css"

import Teacher from "./teacher.jpg"


const Courses = ()=> {
	return (
		<div>
				<h1 className="courses__h1">Курсы для начинающих</h1>
				<div className="courses">
					<div className="courses__img">
					<img src={Teacher}/>
					</div>
					<div className="courses__text">
						<p className="courses__p">Ведущий мастер Юрок проводит курс татуировки в студии ABRACADABRA. Личное рабочее место а также индивидуальный подход к каждому ученику.</p>
						<p className="courses__p">Если у вас уже есть опыт, курс поможет вам набраться профессионализма под присмотром мудрого мастера</p>
						<p className="courses__p">Курс длится 8 недель и состоит из 20 занятий. Занятия в прямом эфире проходят с понедельника по пятницу, с 10:00 до 16:00, затем следует неделя домашних заданий, которые нужно отрабатывать дома, затем больше занятий с понедельника по пятницу, после чего следует еще одна неделя домашних заданий и так далее.</p>
					</div>
				</div>
				<div className="courses__bottom">
				<h2 className="courses__h2">Видео из класса обучения</h2>
					<div className="courses__vid"></div>
				</div>
			</div>
	);
};

export default Courses;