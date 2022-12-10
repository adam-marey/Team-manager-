import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.boxsContainer}>
        <br />
        <h1>Welcome to The Team Management !</h1>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Add a New Project</h2>
            <p> Click to add a new project</p>
          </div>

          <div class="box box-down blue">
            <h2>Add a New Developer</h2>
            <p>Click to add a new developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
