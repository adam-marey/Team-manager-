import React from 'react';
import styles from './Student.module.css';
const SingleStudent = () => {
  return (
    <form className={styles.StudentForm}>
      <br />
      <br />
      <h1>Student Details</h1>
      <div>
        <input className={styles.StudentInput} placeholder="Student Name" />
        <input
          className={styles.StudentInput}
          placeholder="Student Description"
        />
      </div>
      <br />
      <input className={styles.StudentInput} type="date" />
      <br />
      <select className={styles.StudentInput} placeholder="assign to a Team">
        <option>Assign to a Team</option>
        <option>Team 1</option>
        <option>Team 2</option>
        <option>Team 3</option>
      </select>
      <br />
      <br />
    </form>
  );
};

export default SingleStudent;
