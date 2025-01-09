```javascript
import React, { useEffect, useState } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update state based on props.  This is safe since useEffect is run AFTER the render cycle.
    setCount(props.count);
  }, [props.count]);

  useEffect(() => {
    // Any side effects such as network requests, subscriptions, or timers should be put in a useEffect hook.
    // This will prevent infinite loops.
    console.log('Mounted!')
  }, []); // Empty dependency array for running only once after mount

  return <div>Count: {count}</div>;
}

export default MyComponent;
```