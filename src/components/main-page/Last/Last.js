import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import '../../../style/main/Last.scss'
import smile from "../../../image/main/smile.jpg"

const Last = () => {
    const [block, setBlock] = useState(false)
    const [open, setOpen] = useState(true)

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    const handleChange = () => {
        setOpen(!open)
    }

    return (
        <section id="last">
            <div className="container">
                <div className="last">
                    <div className="last--block">
                        <div>
                            <h1 className="last--title">Оставить заявку на обучение <br/> или получить консультацию</h1>
                            <p className="last--desc">Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все
                                интересующие вопросы.</p>
                        </div>
                        <div className="last--input2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    {open ?
                                        <div className='div'>
                                            <input {...register('firstName', {required: 'Поле обязательно к заполнению',})}
                                                   type="text" placeholder="Имя" className="last--input"/>
                                            <div style={{height: 40}}>
                                                {errors?.firstName &&
                                                    <p style={{color: "red"}}>{errors?.firstName?.message || "Error!"} ↑</p>
                                                }
                                            </div>
                                            <div>
                                                <input {...register('number', {required: 'Поле обязательно к заполнению'})}
                                                       type="text" placeholder="Номер" className="last--input"/>
                                            </div>
                                            <div style={{height: 40}}>
                                                {errors?.number &&
                                                    <p style={{color: "red"}}>{errors?.number?.message || "Error!"} ↑</p>}
                                            </div>
                                            <div>
                                                <input {...register('email', {required: 'Поле обязательно к заполнению'})}
                                                       type="text" placeholder="Электронная почта"
                                                       className="last--input"/>
                                                <div style={{height: 40}}>
                                                    {errors?.email &&
                                                        <p style={{color: "red"}}>{errors?.email?.message || "Error!"} ↑</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="last--check"/>
                                                <span
                                                    className="last--title2">Я соглашаюсь на обработку персональных данных</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="last--meet">
                                            <img className="last--image" src={smile} alt=""/>
                                            <h1 className="last--title3">Менеджер скоро свяжется с вами</h1>
                                        </div>
                                    }

                                    <button onClick={() => handleChange()} className="last--btn">Оставить заявку
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default Last;