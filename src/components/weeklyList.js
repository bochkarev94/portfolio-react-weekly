import React, {useState} from 'react';
import WeeklyForm from './weeklyForm';

function WeeklyList() {
    const [lists, setList] = useState([]);

    const addList = (list) => {
        if (!list.text || /^\s*$/.test(list.text)) {
            return;
        }

        const newList = [list, ...lists]

        setList(newList); 
    }

    return (
        <div>
           <h1>What's the Plan for Today</h1> 
           <WeeklyForm onSubmit={addList}/>
        </div>
    )
}

export default WeeklyList
