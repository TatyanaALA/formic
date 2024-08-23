import { useFormik } from "formik";
import * as Yup from 'yup';

const Form = () => {
    const formic = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terns: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле'),
            email: Yup.string()
                    .email('Неправильный email адрес')
                    .required('Обязательное поле'),
            amount: Yup.number()
                    .min(5, 'Не менее 5')
                    .required('Обязательное поле'),
            currency: Yup.string().required('Выберите валюту'),
            text: Yup.string()
                    .min(10, 'Не менее 10 символов'),
            terns: Yup.boolean()
                    .required('Необходимо согласие')
                    .oneOf([true], 'Необходимо согласие')
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="form" onSubmit={formic.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formic.values.name}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
            {formic.errors.name && formic.touched.name ? <div className='error'>{formic.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formic.values.email}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
            {formic.errors.email && formic.touched.email ? <div className='error'>{formic.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formic.values.amount}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
            {formic.errors.amount && formic.touched.amount ? <div className='error'>{formic.errors.amount}</div> : null}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formic.values.currency}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {formic.errors.currency && formic.touched.currency ? <div className='error'>{formic.errors.currency}</div> : null}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formic.values.text}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
            {formic.errors.text && formic.touched.text ? <div className='error'>{formic.errors.text}</div> : null}
            <label className="checkbox">
                <input 
                name="terms" 
                type="checkbox" 
                value={formic.values.terns}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formic.errors.terns && formic.touched.terns ? <div className='error'>{formic.errors.terns}</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;