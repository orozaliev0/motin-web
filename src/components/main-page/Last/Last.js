import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import '../../../style/main/Last.scss'
import smile from "../../../image/main/smile.jpg"

const Last = () => {
    const [block, setBlock ] = useState(false)
    const [open, setOpen] = useState(false)

    const{
        register,
        formState:{ errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }


    return (
        <section id="last">
            <div className="container">
                <div className="last">
                    <div className="last--block">
                        <div>
                            <h1 className="last--title">Оставить заявку на обучение <br/> или получить консультацию</h1>
                            <p className="last--desc">Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p>
                        </div>
                        <div className="last--input2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                          <div className='div'>
                              <input {...register('firstName', {
                                  required: 'Поле обязательно к заполнению',
                                  minLength: {
                                      value: 4,
                                      message: 'Минимум 4 символов'
                                  }
                              })} type="text" placeholder="Имя" className="last--input"/>
                              <div style={{height:40}}>
                                  {errors?.firstName && <p>{errors?.firstName?.message || "Error!" }</p>}
                              </div>
                              <div>
                                  <input {...register('number',{required: 'Поле обязательно к заполнению'})} type="text" placeholder="Номер" className="last--input"/>
                              </div>
                              <div style={{height:40}}>
                                  {errors?.number && <p>{errors?.number?.message || "Error!" }</p>}
                              </div>
                              <div>
                                  <input {...register('email',{
                                      required:'Поле обязательно к заполнению'
                                  })} type="text" placeholder="Электронная почта" className="last--input"/>
                                  <div style={{height:40}}>
                                      {errors?.email && <p>{errors?.email?.message || "Error!" }</p>}
                                  </div>
                              </div>
                              <div>
                                  <input type="checkbox" className="last--check"/>
                                  <span className="last--title2">Я соглашаюсь на обработку персональных данных</span></div>
                          </div>

                                <button  onClick={() => setBlock(!block)} className="last--btn">Оставить заявку</button>

                            </div>
                                {
                                    block ?
                                        <div className="last--meet">
                                            <img className="last--image" src={smile} alt=""/>
                                            <h1 className="last--title3">Менеджер скоро свяжется с вами</h1>
                                        </div> : ''
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Last;