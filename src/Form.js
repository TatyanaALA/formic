import { useFormik } from "formik";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Обязательное поле';
    } else if (values.name.length < 2) {
        errors.name = 'Минимальная длина 2 символа';
    } else if (values.name.length > 20) {
        errors.name = 'Максимум 20 символов для заполнения';
    }

    if (!values.email) {
        errors.email = 'Обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неправильный email адрес';
    }

    return errors;
}


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
        validate,
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
            {formic.errors.name && formic.touched.name ? <div>{formic.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formic.values.email}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
            {formic.errors.email && formic.touched.email ? <div>{formic.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formic.values.amount}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
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
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formic.values.text}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
            />
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
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;