import React, {useState} from 'react';
import WeeklyForm from './weeklyForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Weekly({lists, completeList}) {

    const [edit, setEdit]  = useState({
        id: null,
        value: ''
    })

    return lists.map((list, i) => {
        return <div className={list.isComplete ? 'list-row complete' : 'list-row'}
            key={i}>
                <div key={list.id} onClick={() => completeList(list.id)}>
                    {list.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine/>
                    <TiEdit/>
                </div>
            </div>
    });
}

export default Weekly
