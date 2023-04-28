import React from 'react';
import '../../../style/main/Last.scss'


const Last = () => {
    return (
        <section id="last">
            <div className="container">
                <div className="last">
                    <div className="last--block">
                        <div>
                            <h1 className="last--title">Оставить заявку на обучение <br/> или получить консультацию</h1>
                            <p className="last--desc">Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p></div>


                        <div>
                            <input type="text" placeholder="Имя" className="last--input"/>
                            <div>
                                <input type="text" placeholder="Номер" className="last--input"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Электронная почта" className="last--input"/>
                            </div>
                            <div>  <input type="checkbox" className="last--check"/>
                                <span className="last--title2">Я соглашаюсь на обработку персональных данных</span></div>
                            <button className="last--btn">Оставить заявку</button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Last;