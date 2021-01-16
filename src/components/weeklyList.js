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

    const removeList = (id) => {
        const removeArr = [...lists].filter(list => list.id !== id)

        setList(removeArr)
    }
    const upList = (listId, newList) => {

        if (!newList.text || /^\s*$/.test(newList.text)) {
            return;
        };
        setList(prev => prev.map(item => (item.id === listId ? newList: item)));
    };

    const completeList = (id) => {
        let upLists = lists.map(list => {
            if (list.id === id) {
                list.isComplete = !list.isComplete
            }
            return list;
        })
        setList(upLists);
    };

    return (
        <div>
           <h1>Plans for today</h1> 
           <WeeklyForm onSubmit={addList}/>
           <Weekly
            lists = {lists}
            completeList = {completeList}
            removeList={removeList}
            upList = {upList}
           />
        </div>
    )
}

export default WeeklyList
