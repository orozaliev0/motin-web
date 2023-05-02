import React from 'react';
import icon5 from "../../../image/main/Dawn.svg"
import imgCourse from "../../../image/main/title.svg"
import imgCourse2 from "../../../image/main/girlFront.svg"
import imgCourse3 from "../../../image/main/dizain.svg"
import imgCourse4 from "../../../image/main/backend.svg"
import imgCourse5 from "./../../../image/about-us/peeps-avatar.svg"
import '../../../style/main/Courses.scss'

const Courses = () => {
    return (
        <section id="course">
            <div className="course">
                <div className="course--anim">
                    <marquee behavior="initial" scrollamount="25">
                        <div className="course--name">
                            <h1 className="course--title">КУРСЫ</h1>
                            <div className="course--vector"></div>
                            <img src={imgCourse} className="course--title2" alt=""/>
                            <div className="course--vector"></div>
                            <h1 className="course--title">КУРСЫ</h1>
                            <div className="course--vector"></div>
                            <img src={imgCourse} className="course--title2" alt=""/>
                            <div className="course--vector"></div>
                            <h1 className="course--title">КУРСЫ</h1>
                            <div className="course--vector"></div>
                            <img src={imgCourse} className="course--title2" alt=""/>
                            <div className="course--vector"></div>
                            <h1 className="course--title">КУРСЫ</h1>
                            <div className="course--vector"></div>
                            <img src={imgCourse} className="course--title2" alt=""/>
                        </div>
                    </marquee>
                </div>
                <div className="course--name2">
                    <marquee behavior="initial" scrollamount="25">
                        <div className="course--name">
                            <h1 className="course--title">FRONTEND</h1>
                            <h1 className="course--title">BACKEND</h1>
                            <h1 className="course--title">UX UI</h1>
                            <img src={icon5} alt=""/>
                            <h1 className="course--title">FRONTEND</h1>
                            <h1 className="course--title">BACKEND</h1>
                            <h1 className="course--title">UX UI</h1>
                            <img src={icon5} alt=""/>
                            <h1 className="course--title">FRONTEND</h1>
                            <h1 className="course--title">BACKEND</h1>
                            <h1 className="course--title">UX UI</h1>
                            <img src={icon5} className="course--title2" alt=""/>
                        </div>
                    </marquee>
                </div>

                <div className="course--projects">
                    <div className="course--block1">
                        <div className="course--block">
                            <img src={imgCourse2} className="course--girl" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">FRONTEND</h1>
                            <p className="course--desc1">Фронтенд-разработчик — <br/>
                                это специалист, который создаёт <br/> пользовательские интерфейсы</p>
                            <div className="course--buttons">
                                <button className="course--btn1">HTML</button>
                                <button className="course--btn1">React</button>
                                <button className="course--btn2">TypeScript</button>
                                <button className="course--btn3">JS</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn4">CSS</button>
                                <button className="course--btn1">SASS</button>
                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">7 месяцев</button>
                            </div>
                            <button className="course--btn">Подробнее</button>
                            <button className="course--btn6">Оставить заявку</button>
                        </div>
                    </div>
                    <div>
                        <div className="course--block2">
                            <img src={imgCourse3} className="course--design" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">UX/UI DESIGN</h1>
                            <p className="course--desc1">UX/UI-дизайн — это процесс создания <br/> интерактивных,
                                удобных интерфейсов</p>
                            <div className="course--buttons">
                                <button className="course--btn1">Figma</button>
                                <button className="course--btn2">Adobe XD</button>
                                <button className="course--btn2">Photoshop</button>
                            </div>
                            <div className="course--buttons2">
                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">3 месяцев</button>
                            </div>
                            <div className="course--but1">
                                <button className="course--btn">Подробнее</button>
                                <button className="course--btn6">Оставить заявку</button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="course--block">
                            <img src={imgCourse4} className="course--design" alt=""/>
                        </div>
                        <div className="course--box">
                            <h1 className="course--title3">BACKEND</h1>
                            <p className="course--desc1">Бэкенд-разработчик — это специалист, <br/> который отвечает за
                                внутреннюю и вычислительную логику веб-сайта</p>
                            <div className="course--buttons">
                                <button className="course--btn1">HTML</button>
                                <button className="course--btn1">React</button>
                                <button className="course--btn3">JS</button>
                                <button className="course--btn4">CSS</button>
                                <button className="course--btn1">SASS</button>
                            </div>
                            <div className="course--buttons2">

                                <button className="course--btn5">+Английский</button>
                                <button className="course--btn5">3 месяцев</button>
                            </div>
                            <div className="course--but">
                                <button className="course--btn">Подробнее</button>
                                <button className="course--btn6">Оставить заявку</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="course2">
                    <div className="course2--box">
                        <button className="course2--btn1">КРУУУТОО...</button>
                        <img src={imgCourse5} className="course2--image" alt=""/>
                    </div>
                    <div className="course2--block">
                        <div className="course2--titles">
                            <div>
                                <h1 className="course2--title1">ПРОБНЫЕ УРОКИ</h1>                    <p
                                className="course2--desc1">Прочуствуй дружную атмосферу нашей <br/>
                                академии! Оставь заявку на пробный <br/> урок и стань ближе к своей цели!</p></div>
                            <div className="course2--left"><h1 className="course2--title2">18 февраля <br/> <span
                                className="course2--desc2">в</span> 18:00 <span
                                className="course2--desc2">мастер класс <br/>  по </span> FRONTEND
                            </h1>
                                <button className="course2--btn2">Записаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;