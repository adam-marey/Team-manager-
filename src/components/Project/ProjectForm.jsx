import React from 'react';
import styles from './Project.module.css';
const Project = () => {
  return (
    <form className={styles.projectForm}>
      <br />
      <br />
      <h1>Project Details</h1>
      <div>
        <input className={styles.projectInput} placeholder="Project Name" />
        <input
          className={styles.projectInput}
          placeholder="Project Description"
        />
      </div>
      <br />
      <input className={styles.projectInput} type="date" />
      <br />
      <select className={styles.projectInput} placeholder="assign developers">
        <option>Assign developers</option>
        <option>Adam</option>
        <option>John</option>
        <option>Sul</option>
      </select>
      <br />
      <br />
    </form>
  );
};

export default Project;
