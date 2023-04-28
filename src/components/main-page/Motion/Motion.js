import React from 'react';
import '../../../style/main/Motion.scss'
import imgMotion from "../../../image/main/peeps-avatar.svg"

const Motion = () => {
    return (
        <section id="motion">
            <div className="container">
                <div className="motion">
                        <div className="motion--box">
                            <button className="motion--btn1">КРУУУТОО...</button>
                            <img src={imgMotion} className="motion--image" alt=""/>
                        </div>
                        <div className="motion--block">
                            <div className="motion--titles">
                                <div>
                                    <h1 className="motion--title1">ПРОБНЫЕ УРОКИ</h1>
                                    <p className="motion--desc1">Прочуствуй дружную атмосферу нашей <br/>
                                        академии! Оставь заявку на пробный <br/>     урок и стань ближе к своей цели!</p>
                                </div>
                                <div className="motion--left">
                                    <h1 className="motion--title2">18 февраля <br/>  <span className="motion--desc2">в</span>  18:00  <span className="motion--desc2">мастер класс <br/>  по </span>  FRONTEND</h1>
                                    <button className="motion--btn2">Записаться</button>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Motion;