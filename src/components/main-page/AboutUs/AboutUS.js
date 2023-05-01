import React, {useState} from 'react';
import '../../../style/main/AboutUs.scss'


const AboutUS = () => {
    const [cost, setCost] = useState(false)
      const onCost = ()=> {
         setCost(!cost)
    }

    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="about--block">
                              <h1>О НАС</h1>
                        <div  className="about--block__cont">
                              <h3>Motion Web IT academy — это международный образовательный проект, который готовит специалистов-практиков IT сферы.
                              </h3>

                                  <h2>Благодаря нашему постоянному развитию мы разработали эффективные программы для подготовки IT-специалистов. Нам удалось соединить лучшие практики офлайн — и онлайн-образования и таким образом достичь высоких результатов.
                              <span  style={{display:cost? "block":"none"}}>Благодаря нашему постоянному развитию мы разработали эффективные программы для подготовки IT-специалистов. Нам удалось соединить лучшие практики офлайн — и онлайн-образования </span>  </h2>


                            <p onClick={onCost}> <span style={{display:cost? "none":"block"}}>Подробнее</span>  <span  style={{display:cost? "block":"none",}}>Назать</span></p>


                        </div>
                    </div>

                    <div className="about--box">
                                <div className='about--box__number'>
                                    <h1>2000+
                                        </h1>
                                         <p>Выпусников</p>
                                </div>

                                <div className='about--box__number'>
                                    <h1>2
                                        </h1>
                                         <p>Выпусников</p>
                                </div><div className='about--box__number'>
                                    <h1>10+
                                        </h1>
                                         <p>Менторов</p>
                                </div>

                                <div className='about--box__number'>
                                    <h1>95%
                                        </h1>
                                         <p>Трудоустроились</p>
                                </div>







                                 <div>

                                 </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutUS;
