import React from 'react';
import { ProgressBar as RBProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProgressBar({ completed, total }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="my-3" aria-label="Quest Progress">
      <label htmlFor="quest-progress" className="fw-bold">Quest Progress</label>
      <RBProgressBar
        id="quest-progress"
        now={percent}
        label={`${percent}%`}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        style={{ fontFamily: 'Segoe UI', fontWeight: 600 }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;
