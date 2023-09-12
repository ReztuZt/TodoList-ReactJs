import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => { // Menerima addTodo sebagai objek props
  const [value, setValue] = useState(""); // Menggunakan setValue

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue(""); // Mengatur value ke ""
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='todo-input'
        value={value} // Mengatur value
        placeholder='Apa Yang Akan Dilakukan Hari Ini'
        onChange={(e) => setValue(e.target.value)} // Mengubah state saat input berubah
      />
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
