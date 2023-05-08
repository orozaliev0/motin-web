import React, {useState, useRef} from 'react';
import "./../../../style/main/FAQ.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

const faqs = [
    {
        id: 1,
        header: "Нужны ли начальные знания для учёбы?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    },
    {
        id: 2,
        header: "Как проходит консультация?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    },
    {
        id: 3,
        header: "Какой график обучения? Получится ли совмещать его с работо?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    },
    {
        id: 4,
        header: "Мне помогут трудоустроится?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    },
    {
        id: 5,
        header: "Кто мне поможет, если возникнут вопросы?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    },
    {
        id: 6,
        header: "Какая техника нужна для обучения?",
        text: `После начала обучения вы получите готовый карьерный трек на основе ваших способностей и интересов от нашего Центра развития карьеры. Вам помогут составить резюме, подготовить профили на сайтах по поиску вакансий, составят сопроводительное письмо и помогут собрать все проекты, которые вы создадите за время обучения в конкурентное портфолио.Специалисты Центра развития карьеры помогут преодолеть страх новичка при прохождении собеседований и подготовят презентацию ваших сильных сторон для общения с рекрутерами. Кроме того, студенты с хорошей успеваемостью будут получать офферы на стажировки и трудоустройство от наших партнёров из Европы и СНГ.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq;

    return (
        <div id="faq">
            <div className="container">
                <div className="faq">
                    <h1>Отзывы студентов</h1>
                         <div className="faq--acor">


                             <div  onClick={() => {
                        setSelected(!selected)
                        setSelecte6(false)
                        setSelected2(false)
                        setSelected3(false)
                        setSelected4(false)}} style={{height:selected ? "202px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">
                                    <div>
                                        <h1>Нужны ли начальные знания для учёбы?</h1>
                                        <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Accusantium aspernatur at consequatur
                                            eum molestiae necessitatibus nulla officia
                                            reprehenderit, vero voluptatem. Animi hic libero omnis.
                                            Dolorum explicabo nesciunt quasi reiciendis rerum.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Dolores, repellat? ipsum dolor sit amet,
                                            consectetur adipisicing elit. Doloremque, suscipit.</p>

                                    </div>


                        </div>
                                 <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ color:"black", transform: selected ? "rotate(270deg)" : "rotate(90deg)", fontSize:"20px", marginRight:"20px", marginTop:"-10px", }}/>


                             </div>
                    <div  onClick={() => {
                        setSelected2(!selected2)
                        setSelecte6(false)
                        setSelected(false)
                        setSelected3(false)
                        setSelected4(false)}} style={{height:selected2 ? "150px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">
                                 <h1>Как проходит консультация?</h1>
                             <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis. Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                        </div>
                        <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected2 ? "rotate(270deg)" : "rotate(90deg)", fontSize:"60px", marginRight:"20px", marginTop:"-10px", }}/>
                    </div>
                    <div  onClick={() => {
                        setSelected3(!selected3)
                        setSelected2(false)
                        setSelected(false)
                        setSelecte6(false)
                        setSelected4(false)}} style={{height:selected3 ? "150px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">
                                 <h1>Какой график обучения? Получится ли совмещать его с работо?</h1>
                             <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis. Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                        </div>
                        <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected3 ? "rotate(270deg)" : "rotate(90deg)",
                            fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
                    </div>
                    <div  onClick={() => {
                        setSelected4(!selected4)
                        setSelected2(false)
                        setSelecte6(false)
                        setSelected3(false)
                        setSelected5(false)}} style={{height:selected4 ? "150px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">
                                 <h1>Мне помогут трудоустроится?</h1>
                             <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis. Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                        </div>
                        <MdArrowBackIos className="faq--acor__card--acc__rotate" style={{ transform: selected4 ? "rotate(270deg)" : "rotate(90deg)",
                            fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
                    </div>
        <div className="card">
            <div className="card--header">
                <div className={`card--header__toggle ${active === id ? 'active' : ''}`}
                     onClick={() => handleToggle(id)}>
                    <h3>{header}</h3>
                    <p><MdOutlineKeyboardArrowDown/></p>
                </div>
            </div>


            <div ref={contentEl} className={`card--collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? {height: contentEl.current.scrollHeight}
                    : {height: "0px"}
            }>

                <div className="card--collapse__body">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Accordion = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <section id="accordion">
            <div className="container">
                <div className="accordion">
                    <h1>Частые вопросы</h1>
                    <div className="accordion--details">
                        {faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={index} active={active} handleToggle={handleToggle}
                                               faq={faq}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion