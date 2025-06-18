# React Revise Sheet

## 1️⃣ Function Components in React

### ✅ Standard Function Declaration

```jsx
import React from 'react';

function Extra() {
  return (
    <>
      <p>This is paragraph</p>
    </>
  );
}

export default Extra;

```

### ✅ Arrow Function Component

```jsx
import React from 'react';

const Extra = () => {
  return (
    <div>Extra</div>
  );
}

export default Extra;

```

----------

## 2️⃣ Props in Function Components

### 📦 Passing Props from Parent

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent () {
  let title = 'Project Manager';
  return (
    <ChildComponent title={title} />
  );
}

export default ParentComponent;

```

### 📥 Accessing Props in Child

```jsx
// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return <p>The title is {props.title}</p>;
};

export default ChildComponent;

```

----------

## 3️⃣ Event Handling

```jsx
import React from 'react';

const Extra = (props) => {
  function show() {
    console.log('Show function');
  }

  return (
    <>
      <p>{props.title}</p>
      <button onClick={show}>Click Here</button>
    </>
  );
}

export default Extra;

```

----------

## 4️⃣ State Management with `useState`

```jsx
import React, { useState } from 'react';

const StateManagement = () => {
  const [name, setName] = useState('John');

  return (
    <>
      <h1>useState Example</h1>
      <p>{name}</p>
    </>
  );
}

export default StateManagement;

```

----------

## 5️⃣ Arrays & DOM Manipulation

### 📚 Array Declaration

```js
const names = ['Alice', 'Bob', 'Charlie'];

```

### 🔁 useState with Array

```js
const [todos, setTodos] = useState(['Learn React', 'Build Project']);

```

### ⚙ Dynamically Constructed Arrays

```js
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

```

### 🔄 Array `.map()` for Rendering

```jsx
const items = ['Apple', 'Banana', 'Orange'];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

```

### 🧾 Rendering Full List

```jsx
import React from 'react';

function ArrayComponent() {
  const items = ['Autumn', 'Spring', 'Summer', 'Winter'];

  return (
    <div>
      <h1>Seasons Names</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayComponent;

```

----------

## 6️⃣ Add & Remove Items from Array

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState(['Autumn', 'Spring', 'Winter', 'Summer']);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default MyComponent;

```

----------

## 7️⃣ Conditional Rendering (Ternary Operator)

```jsx
{items.length > 0 ? (
  <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
) : (
  <p>No items available</p>
)}

```

----------

## 8️⃣ Styling in React

### 🎨 Inline Style

```jsx
<div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
  <p style={{ color: 'white' }}>Styled paragraph</p>
</div>

```

### 🎨 Styling with JavaScript Object

```jsx
const styleObj = {
  color: 'green',
  display: 'block',
  fontSize: '18px'
};

```

----------

## 9️⃣ useEffect Hook – Side Effects

```jsx
import React, { useState, useEffect } from 'react';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/d542b9ad99f501ab3dbf')
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {foods.map(food => (
        <li key={food.name}>
          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default FoodList;

```

----------

## 🔟 Custom Hook – `useToggle()`

### 🔹 UseToggle.js

```js
import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return [value, toggle];
}

export default useToggle;

```

### 🔹 ToggleButton.js

```jsx
import useToggle from './useToggle';

function ToggleButton() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <button onClick={toggle}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton;

```

----------

## 🔁 fetch vs axios – Data Fetching

### ✅ fetch()

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch error:', err));

```

### ✅ axios

```js
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error('Axios error:', error));

```

----------

## 🔧 Form Handling with `onChange`

```jsx
import React, { useState } from 'react';

function FormData() {
  const [empName, setEmpName] = useState('');

  const handleChange = e => setEmpName(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', empName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={empName} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormData;

```

----------

## 🧰 Redux Toolkit – Minimal Example

### 🔹 Installation

```bash
npm install @reduxjs/toolkit react-redux

```

### 🔹 store.js

```js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;

```

### 🔹 App.jsx

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

```

----------
