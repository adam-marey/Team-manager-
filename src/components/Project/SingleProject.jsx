import React from 'react';
import styles from './Project.module.css';
const SingleProject = () => {
  return (
    <div className={styles.projectForm}>
      <h1>Grace Shopper</h1>
      <h2>Build a full stack ecommerce applications with resposive design </h2>
      <div>
        <h2>
          Assigned developers:
          <ul>
            <li>Adam</li>
            <li>Sul</li>
            <li>John</li>
          </ul>
        </h2>
        <div>
          <h2>Due Date: 12/22/2022</h2>
          <h2>MVP Target: 70%</h2>
          <input placeholder="Add a comment" className={styles.projectInput} />
        </div>
        <br />
        <div>
          <button
            className="button-50"
            type="submit"
            style={{ marginRight: 15 }}
          >
            Delete Project
          </button>
          <button
            className="button-50"
            type="submit"
            style={{ marginRight: 15 }}
          >
            Edit Project
          </button>

          <button className="button-50" type="submit">
            Save Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
