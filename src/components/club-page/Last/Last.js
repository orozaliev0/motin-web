
import React from "react";
import "../../../style/it-club/Last.scss";
import Smile from "../../../image/main/smile-face.svg";
import Open from "../../../image/main/open-key.svg";
import Select from "../../../image/main/select.svg";
import Rocket from "../../../image/main/rocket.svg";
import it from "../../../image/it-club/it.svg";
import girl from "../../../image/it-club/girl.svg";
import book from "../../../image/it-club/book.svg";
import pers from "../../../image/it-club/pers.svg";
import sound from "../../../image/it-club/sound.svg";
import laptop from "../../../image/it-club/laptop.svg";
import negr from "../../../image/it-club/negr.svg";

const Last = () => {
    return (
        <div id="last">
            <div className="container">
                <div className="last">
                    <div className="last--text">
                        <h3>Разработка проекта</h3>
                    </div>
                    <div className="last--study">
                        <div className="last--study__block">
                            <div className="last--study__block--smile">
                                <img src={Smile} alt=""/>
                                <div>
                                    <h6>Робота в команде</h6>
                                    <p>
                                        На курсе вы научитесь создавать интерфейсы веб-сервисов
                                        с помощью языков программирования и дополнительных
                                        технологий. Сможете разрабатывать планировщики задач,
                                        мессенджеры, интернет-магазины
                                    </p>
                                </div>
                            </div>
                            <div className="last--study__block--open">
                                <img src={Rocket} alt=""/>
                                <div>
                                    <h6>Brainstorming</h6>
                                    <p>
                                        На курсе вы научитесь создавать интерфейсы веб-сервисов
                                        с помощью языков программирования и дополнительных
                                        технологий. Сможете разрабатывать планировщики задач,
                                        мессенджеры, интернет-магазины
                                    </p>
                                </div>
                            </div>
                            <div className="last--study__block--en">
                                <img src={Select} alt=""/>
                                <div>
                                    <h6>Презентация и защита </h6>
                                    <p>
                                        На курсе вы научитесь создавать интерфейсы веб-сервисов
                                        с помощью языков программирования и дополнительных
                                        технологий. Сможете разрабатывать планировщики задач,
                                        мессенджеры, интернет-магазины
                                    </p>
                                </div>
                            </div>
                            <div className="last--study__block--rocket">
                                <img src={Open} alt=""/>
                                <div>
                                    <h6>Talking club</h6>
                                    <p>
                                        На курсе вы научитесь создавать интерфейсы веб-сервисов
                                        с помощью языков программирования и дополнительных
                                        технологий. Сможете разрабатывать планировщики задач,
                                        мессенджеры, интернет-магазины
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blocks">
                    <div className="blocks--first">
                        <span>Что вы получете</span>
                        <div className="blocks--first__team">
                            <div className="blocks--first__team--lead-block">
                                <div className="blocks--first__team--lead-block__block">
                                    <img src={it} alt=""/>
                                </div>
                                <p>Расширение кругозоров в сфере IT</p>
                            </div>
                            <div className="blocks--first__team--lead-block">
                                <div className="blocks--first__team--lead-block__block">
                                    <div className="blocks--first__team--lead-block__block">
                                        <img src={girl} alt=""/>
                                        <img src={book} alt=""/>
                                    </div>
                                </div>
                                <p>Расширение кругозоров в сфере IT</p>
                            </div>
                        </div>
                    </div>
                    <div className="blocks--second">

                        <div className="blocks--second__lead-block">
                            <div className="blocks--second__lead-block--block">
                                <img src={pers} alt=""/>
                            </div>
                            <p>Работа с командой</p>
                        </div>
                        <div className="blocks--second__lead-block">
                            <div className="blocks--second__lead-block--block">
                                <img src={sound} alt=""/>
                            </div>
                            <p>Портфолио</p>
                        </div>
                        <div className="blocks--second__lead-block">
                            <div className="blocks--second__lead-block--block">
                                <img src={laptop} alt=""/>
                                <img src={negr} alt=""/>
                            </div>
                            <p>Работа с реальными проектами</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Last;