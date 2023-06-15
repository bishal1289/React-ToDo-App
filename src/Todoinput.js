import React, { useEffect, useState } from "react";
import "./Todoinput.css";




const Todoinput = () => {

    
    const getData = () => {
        let list =  JSON.parse(localStorage.getItem('Data'));
        //console.log(list);
       return list;
    
    }


    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState(getData());

    const addTask = () => {
        if (!inputValue) {
            alert("Write something");
        }
        else {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    };

    const deleteItem = (id) => {
        const updatedItem = items.filter((ele, ind) => {
            return ind !== id;
        });
        setItems(updatedItem);
    }

    //LOCAL STORAGE 

    useEffect( () => {
        localStorage.setItem('Data',JSON.stringify(items));
    },[items]);

    

    return (
        <>
            <div id="main">
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        placeholder=" Enter your todo"
                        className="inputField"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button className="addTodo" onClick={addTask}>
                        +
                    </button>
                </div>

            </div>

            <div id="main-item">
                {items.map((ele, ind) => {
                    return (
                        <li className="list-item" key={ind}>
                            {ele}
                            <span className="icons">
                                <i className="fa-solid fa-trash-can" id="icon-delete" onClick={() => deleteItem(ind)}></i>
                            </span>
                        </li>
                    );
                })}
            </div>
        </>
    );
};

export default Todoinput;
