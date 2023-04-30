import React, {useState} from 'react';
import '../../../style/main/FAQ.scss'
import '../../../style/main/media/mediaFAQ.scss'
import {MdArrowBackIosNew} from "react-icons/md";

const FAQ = () => {
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)
    const [selected5, setSelected5] = useState(false)
    const [selected6, setSelecte6] = useState(false)

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

                        setSelected4(false)}} style={{height:selected ? "150px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">

                                 <h1>Нужны ли начальные знания для учёбы?</h1>
                             <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis. Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                        </div>
                        <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected ? "rotate(270deg)" : "rotate(90deg)",
                            fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
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
                        <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected4 ? "rotate(270deg)" : "rotate(90deg)",
                            fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
                    </div>

                    <div onClick={() => {
                        setSelected5(!selected5)
                        setSelected2(false)
                        setSelected3(false)
                        setSelecte6(false)

                        setSelected4(false)}} style={{height:selected5 ? "150px" : "",transition:"1s"}}  className="faq--acor__card">
                        <div className="faq--acor__card--acc">
                                 <h1>Кто мне поможет, если возникнут вопросы?</h1>
                             <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis. Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p>
                        </div>
                        <MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected5 ? "rotate(270deg)" : "rotate(90deg)",
                            fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
                    </div>
                             <div  onClick={() => {
                                 setSelecte6(!selected6)
                                 setSelected2(false)
                                 setSelected3(false)
                                 setSelected(false)
                                 setSelected4(false)}} style={{height:selected6 ? "150px" : "",transition:"1s"}}  className="faq--acor__card"><div className="faq--acor__card--acc"><h1>Какая техника нужна для обучения?</h1><p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consequatur eum molestiae necessitatibus nulla officia reprehenderit, vero voluptatem. Animi hic libero omnis.Dolorum explicabo nesciunt quasi reiciendis rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellat? ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, suscipit.</p></div><MdArrowBackIosNew className="faq--acor__card--acc__rotate" style={{ transform: selected6 ? "rotate(270deg)" : "rotate(90deg)", fontSize:"60px", marginRight:"20px", marginTop:"-10px", color:"wheat"}}/>
                             </div>
                         </div>

                </div>
            </div>
        </div>

    );
};

export default FAQ;