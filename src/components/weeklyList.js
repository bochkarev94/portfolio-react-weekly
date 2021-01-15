import React, {useState} from 'react';
import WeeklyForm from './weeklyForm';
import Weekly from './weekly';

function WeeklyList() {
    const [lists, setList] = useState([]);

    const addList = (list) => {
        if (!list.text || /^\s*$/.test(list.text)) {
            return;
        }

        const newList = [list, ...lists]

        setList(newList); 
    };

    const completeList = (id) => {
        let upLists = lists.map(list => {
            if (list.id === id) {
                list.isComplete = !list.isComplete
            }
            return list;
        })
        setList(upLists);
    }

    return (
        <div>
           <h1>What's the Plan for Today</h1> 
           <WeeklyForm onSubmit={addList}/>
           <Weekly
            lists = {lists}
            completeList = {completeList}
           />
        </div>
    )
}

export default WeeklyList
