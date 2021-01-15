import React, {useState} from 'react'

function WeeklyForm(props) {
    const[input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return (
        <form className='weekly__form' onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='Планы' 
            value={input}
            name='text'
            className='weekly__input'
            onChange={handleChange}
            />
            <button className='weekly__btn'>Добавить</button>
        </form>
    )
}

export default WeeklyForm
