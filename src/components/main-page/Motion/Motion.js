import React from "react";
import "../../../style/main/Motion.scss";
import { Link } from "react-router-dom";
import Smile from "../../../image/main/smile-face.svg";
import Open from "../../../image/main/open-key.svg";
import Select from "../../../image/main/select.svg";
import Rocket from "../../../image/main/rocket.svg";

const Motion = () => {
    return (
        <div id="motion">
            <div className="container">
                <div className="motion">
                    <div className="motion--text">
                        <h3>
                            Почему <span> MOTION WEB IT ACADEMY </span> - лучший выбор
                            для обучения
                        </h3>
                    </div>
                    <div className="motion--study">
                        <div className="motion--study__block">
                            <div className="motion--study__block--smile">
                                <img src={Smile} alt="" />
                                <div>
                                    <h6>Обучение с нуля до Junior</h6>
                                    <p>
                                        На курсе вы научитесь создавать интерфейсы веб-сервисов
                                        с помощью языков программирования и дополнительных
                                        технологий. Сможете разрабатывать планировщики задач,
                                        мессенджеры, интернет-магазины
                                    </p>
                                </div>
                            </div>
                            <div className="motion--study__block--open">
                                <img src={Open} alt="" />
                                <div>
                                    <h6>Open Space</h6>
                                    <p>
                                        Наша компания предоставляет Open Space для наших студентов,
                                        где вы сможете комфортно заниматься учёбой, заводить
                                        знакомства с другими студентами и развивать навыки
                                        коммуникации
                                    </p>
                                </div>
                            </div>
                            <div className="motion--study__block--en">
                                <img src={Select} alt="" />
                                <div>
                                    <h6>Английский</h6>
                                    <p>
                                        На данный момент на рынке больше востребованы специалисты
                                        владеющие английским языком, так как это даёт возможность
                                        выводить продукт в мировую арену. Поэтому мы предоставляем
                                        нашим студентам БЕСПЛАТНЫЕ языковые курсы
                                    </p>
                                </div>
                            </div>
                            <div className="motion--study__block--rocket">
                                <img src={Rocket} alt="" />
                                <div>
                                    <h6>IT club</h6>
                                    <p>
                                        IT-Клуб это мост между курсом и реальной работой. Анализируя
                                        курсы в Бишкеке мы решили открыть клуб, который поможет
                                        студентам подготовиться к реальным проектам. Участники
                                        не заканчивая курс смогут понять как работать в команде,
                                        научатся презентовать свои работы и поймут какие проблемы
                                        бывают на стадии разработки
                                    </p>
                                    <Link to={"/"}>
                                        <span>Подробнее</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Motion;