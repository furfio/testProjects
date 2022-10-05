import React, { useState } from "react";

interface Props {
    addTodo: (text: string) => void
}

const Input: React.FC<Props> = (props) => {
    const { addTodo } = props;
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }

    const onChange = (e: any) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={onChange}
                    className="input"
                    placeholder="Enter your todo"
                    autoComplete="off"
                />
            </form>
        </div>
    );
}

export default Input;