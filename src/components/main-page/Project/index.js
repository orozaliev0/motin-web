import React from "react";
import "../../../style/main/Project.scss";
import { Link } from "react-router-dom";
import Fly from "../../../image/main/fly-falcon.svg";
import Sound from "../../../image/main/sound.svg";
import Card from "../../../image/main/card.svg";
import Pods from "../../../image/main/pods.svg";
const Project = () => {
	return (
		<div id="project">
			<div className="container">
				<div className="project">
					<div className="project--photos">
						<div className="project--photos__text">
							<h3>Проекты студентов </h3>
							<p>MOTIN WEB IT ACADEMY</p>
						</div>
						<img src={Fly} alt="" />
						<img className="project--photos__sound" src={Sound} alt="" />
					</div>
					<div className="project--more">
						<div className="project--more__img">
							<img src={Card} alt="" />
							<img className="project--more__img--pods" src={Pods} alt="" />
						</div>
						<div className="project--more__link">
							<Link to={"/"}>
								<span>Показать ещё</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
