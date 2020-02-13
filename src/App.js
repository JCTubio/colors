import React from 'react';
import { Link } from 'react-router-dom';

import colors from './constants/colors';
import routes from './constants/routes';

import './index.css';

const styles = {
  app: {
    display: 'grid',
    height: '100vh',
    width: '100vw',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '50% 50%',
    overflow: 'hidden'
  },
  block: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  text: {
    fontFamily: 'Arial Black',
    fontSize: '8em',
    color: colors.black
  }
}

function App() {

  return (
    <div className="App" style={{ ...styles.app }}>
      <Link to={routes.red} style={{ ...styles.block, backgroundColor: colors.red }} >
        <span style={{ ...styles.text }} >
          Red
        </span>
      </Link>
      <Link to={routes.green} style={{ ...styles.block, backgroundColor: colors.green }} >
        <span style={{ ...styles.text }} >
          Green
        </span>
      </Link>
      <Link to={routes.blue} style={{ ...styles.block, backgroundColor: colors.blue }} >
        <span style={{ ...styles.text }} >
          Blue
        </span>
      </Link>
      <Link to={routes.yellow} style={{ ...styles.block, backgroundColor: colors.yellow }} >
        <span style={{ ...styles.text }} >
          Yellow
        </span>
      </Link>
    </div>
  );
}

export default App;
