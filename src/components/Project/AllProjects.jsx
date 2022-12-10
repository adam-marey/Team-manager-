import React from 'react';
import styles from './Project.module.css';
const AllProjects = () => {
  return (
    <div className={styles.home}>
      <div className={styles.boxsContainer}>
        <br />
        <h1>All Projects</h1>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Team 1</h2>
            <p> Completed 70%</p>
          </div>

          <div class="box box-down blue">
            <h2>Team 2</h2>
            <p>Completed 77%</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Team 3</h2>
            <p> Completed 80%</p>
          </div>

          <div class="box box-down blue">
            <h2>Team 4</h2>
            <p>Completed 90%</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Team 5</h2>
            <p> Completed 95%</p>
          </div>

          <div class="box box-down blue">
            <h2>Team 6</h2>
            <p>Completed 96%</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Team 7</h2>
            <p> Completed 50%</p>
          </div>

          <div class="box box-down blue">
            <h2>Team 8</h2>
            <p>Completed 100%</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AllProjects;
