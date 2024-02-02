# Showing the balance with the Create Minima App

Let's dive into a short tutorial that will show you how to show the balance of your wallet in the app. Open `/src/App.jsx`, this is the main application file. The first thing we have to do is call the MDS `balance` command.

The first step is to create a new component file, lets call it `Balance.jsx` in the `/src` folder.

```jsx
import React from 'react';

const Balance = () => {
  return <div>Balance</div>
}

export default Balance;
```

Now let's import this component in our `App.jsx`. We need to add `import Balance from './Balance';` and `<Balance />` in the return, feel free to put it anywhere you like, we have just put it after the `<p>` tag.

```jsx
import { useEffect } from "react";
import minimaLogo from './minima_logo.png';
import './App.css';
import Balance from './Balance';

function App() {
  useEffect(() => {
      window.MDS.init();
  }, []);

  return (
    <div className="App">
      <section className="container">
        <img src={minimaLogo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>.
        </p>
        <Balance />
      </section>
    </div>
  );
}

export default App;
```

You should now see `Balance` printed in the browser window. Now let's go back to the `/src/Balance.jsx` and add:

``` jsx
const getBalance = React.useCallback(() => {
  window.MDS.cmd('balance', function (balance) {
    console.log(balance.response);
  })
}, []);
```

Our file should look like this now:

```jsx
import React from 'react';

const Balance = () => {
  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  return <div>Balance</div>
}

export default Balance;
```

> `React.useCallback` ensures the function is not re-run unless one of the dependencies change, you can read more about it in the React documentation: https://reactjs.org/docs/hooks-reference.html#usecallback

To run our function we need to add a `useEffect`, this is a function that is called when the component is rendered to the screen.

```jsx
React.useEffect(() => {
  getBalance();
}, [getBalance]);
```

Our file should look like this now:

```jsx
import React from 'react';

const Balance = () => {
  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance</div>
}

export default Balance;
```

Now go to the browser and open the developer tools, open the `Console` tab and reload the page to refresh the logs. You should see an array being printed to the logs.

```
[{
  coins: "1",
  confirmed: "100",
  sendable: "100",
  token: "Minima",
  tokenid: "0x00",
  total: "1000000000",
  unconfirmed: "0"
}]
```

Now we need to update our component so that we can store the balance for it to show up on the screen, we can use `React.useState` for this.

```jsx
const [balance, setBalance] = React.useState(null);
```

> `React.useState` allows us to create a value that will cause React to re-render when the value changes. We can use `setBalance` in this case to change the value of `balance`.

Our file should now look like this:

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      console.log(balance.response);
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance</div>
}

export default Balance;
```

Now let's remove the `console.log` and use the setter that we have just created

```jsx
const getBalance = React.useCallback(() => {
  window.MDS.cmd('balance', function (balance) {
    if (balance.response) {
      const minimaToken = balance.response.find(token => token.token === 'Minima');
      setBalance(minimaToken.confirmed);
    }
  })
}, []);
```

Our file should now look like this:

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      if (balance.response) {
        const minimaToken = balance.response.find(token => token.token === 'Minima');
        setBalance(minimaToken.confirmed);
      }
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance</div>
}

export default Balance;
```

Now we can use the getter to print the value to the screen:

```jsx
return <div>Balance: {balance}</div>
```

Our file should now look like this:

```jsx
import React from 'react';

const Balance = () => {
  const [balance, setBalance] = React.useState(null);

  const getBalance = React.useCallback(() => {
    window.MDS.cmd('balance', function (balance) {
      if (balance.response) {
        const minimaToken = balance.response.find(token => token.token === 'Minima');
        setBalance(minimaToken.confirmed);
      }
    })
  }, []);

  React.useEffect(() => {
    getBalance();
  }, [getBalance]);

  return <div>Balance: {balance}</div>
}

export default Balance;
```

And that's it! Feel free to look at the rest of the Minima documentation and start building. We also advise looking at the React documentation which can be found here: https://beta.reactjs.org/