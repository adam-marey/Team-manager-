import React from 'react';
import styles from './Student.module.css';
const AllStudents = () => {
  return (
    <div className={styles.home}>
      <div className={styles.boxsContainer}>
        <br />
        <h1>All Students</h1>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Adam</h2>
            <p> Assigned to Team 2</p>
          </div>

          <div class="box box-down blue">
            <h2>Sul</h2>
            <p>Assigned to team 1</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>John</h2>
            <p> Assigned to team 2</p>
          </div>

          <div class="box box-down blue">
            <h2>Dan</h2>
            <p>Assigned to Team 5</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>William</h2>
            <p> Assigned to Team 8</p>
          </div>

          <div class="box box-down blue">
            <h2>Bryan</h2>
            <p>Assined to team 3</p>
          </div>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Michael</h2>
            <p> Assigned to team 6</p>
          </div>

          <div class="box box-down blue">
            <h2>Andy</h2>
            <p>Assigned to Team 7</p>
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

export default AllStudents;
