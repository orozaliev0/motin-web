import React from "react";
import "../../../style/it-club/Club.scss";
const Club = () => {
    return (
        <div id="club">
            <div className="container">
                <div className="club">
                    <div className="club--it">
                        <h4>Зачем вам <span>IT-КЛУБ?</span></h4>
                        <p>
                            Анализируя курсы в Бишкеке мы решили открыть клуб, который поможет
                            студентам подготовиться к реальным проектам. Участники
                            не заканчивая курс смогут понять как работать в команде, научатся
                            презентовать свои работы и поймут какие проблемы бывают на стадии
                            разработки
                        </p>
                    </div>
                    <div className="club--talking">
                        <div className="club--talking__proj">
                            <h3>3</h3>
                            <span>Месяца</span>
                        </div>
                        <div className="club--talkingweek">
                            <h3>Talking club</h3>
                            <span>Каждую неделю</span>
                        </div>
                        <div className="club--talking__proj">
                            <h3>3</h3>
                            <span>Проекта</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Club;