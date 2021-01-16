import React, {useState} from 'react';
import WeeklyForm from './weeklyForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Weekly({lists, completeList, removeList, upList}) {

    const [edit, setEdit]  = useState({
        id: null,
        value: ''
    });

    const upSubmit = (value) => {
        upList(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <WeeklyForm edit={edit} onSubmit={upSubmit}/>
    }

    return lists.map((list, i) => {
        return <div className={list.isComplete ? 'list__row complete' : 'list__row'}
            key={i}>
                <div key={list.id} onClick={() => completeList(list.id)}>
                    {list.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine
                    onClick={() => removeList(list.id)}
                    className='delete__icon'
                    />
                    <TiEdit
                    onClick={() => setEdit({id: list.id, value: list.text})}
                    className='edit__icon'
                    />
                </div>
            </div>
    });
}

export default Weekly
