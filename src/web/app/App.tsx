import React from 'react';
import { JssProvider, useCssReset, useTheme, Button } from '@groma/library';
import { Routes, Route, Link } from 'react-router-dom';
import { getAppStyles } from './styles/App.styles';

const Home = () => {
  const styles = getAppStyles(useTheme());

  return (
    <>
      <h1 className={styles.title}> Home Page </h1>
      <Button testId="testingId1">Testing Button</Button>
    </>
  );
};

const About = () => {
  const styles = getAppStyles(useTheme());
  return <h1 className={styles.title}> About Page </h1>;
};

const App = () => {
  useCssReset();
  const styles = getAppStyles(useTheme());

  return (
    <JssProvider>
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <Link to="/home" className={styles.navItem}>
            Home
          </Link>
          <Link to="/about" className={styles.navItem}>
            About
          </Link>
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </JssProvider>
  );
};

export { App };
