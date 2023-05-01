import React from 'react';
import '../../../style/main/Slick.scss'
import play from '../../../image/about-us/play_slick.png'
import Slider from "react-slick";
import direction from '../../../image/about-us/direction.png'
import direction_left from '../../../image/about-us/direction_left.png'


// function Slider(props) {
//     return null;
// }


const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <img src={direction}   alt="arrow" />,
        prevArrow: <img src={direction_left} alt="arrow" />,
    };

    return (
        <div id="slick">
            <div className="container">
                <div className="slick">
                    <h1>Отзывы студентов</h1>


                    <div>
                        <div className="slick--card">

                            <Slider {...settings}>

                                <div>
                                    <div className="slick--card__play">
                                        <div className="slick--card__play--burch">
                                            <img src={play} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div>


                                    <div className="slick--card__play">
                                        <div className="slick--card__play--burch">
                                            <img src={play} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slick--card__play">
                                        <div className="slick--card__play--burch">
                                            <img src={play} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slick--card__play">
                                        <div className="slick--card__play--burch">
                                            <img src={play} alt="img"/>
                                        </div>
                                    </div>
                                </div>

                            </Slider>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Slick;