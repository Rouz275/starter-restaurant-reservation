import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  const pageStyles = {
    body: {
      backgroundColor: '#333333',
      margin: 0,
      padding: 0,
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    },
  };

  return (
    <div style={pageStyles.body}>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
