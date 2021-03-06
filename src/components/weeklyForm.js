import React, {useState, useEffect, useRef} from 'react'

function WeeklyForm(props) {
    const[input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        const value = e.target.value;

        if (value.length <= 55) {
            let r= /^[a-zа-яё,._\-/=!?1-90\s]+$/i;
            if(!value || r.test(value)) {
            
            setInput(value);
   }
}
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
            {props.edit ? ( 
            <>
                <input 
                type='text' 
                placeholder='Планы' 
                value={input}
                name='text'
                className='weekly__input edit'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='weekly__btn edit'>Изменить</button>
            </>
                ) : 
                (
            <>
                <input type='text' 
                placeholder='Планы' 
                value={input}
                name='text'
                className='weekly__input'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='weekly__btn'>Добавить</button>
                </>
                )
            }
        </form>
    )
}

export default WeeklyForm
