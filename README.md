# React Infinite Render Loop Bug

This repository demonstrates a common React bug: an infinite render loop caused by incorrectly updating the component's state within a lifecycle method.  The bug is located in `bug.js`, and a corrected version is in `bugSolution.js`.

## Bug Description

The `MyComponent` component uses `componentDidMount` to update the state, creating an infinite loop.  This is because `componentDidMount` is called after rendering, but setting the state in this method triggers a re-render, leading to a continuous loop. The usage of `getDerivedStateFromProps` is also improper. It's misused here to update the state based on props and on componentDidMount, resulting in incorrect state management. 

## Solution

The solution (`bugSolution.js`) demonstrates the correct way to update the state in React based on props.  It eliminates the infinite render loop by updating the state through props and using `useEffect` to handle side effects.