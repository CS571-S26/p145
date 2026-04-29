import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ModeToggle({ mode, onChange }) {
  return (
    <div className="my-3 d-flex justify-content-center" aria-label="Spin Mode Toggle">
      <ToggleButtonGroup
        type="radio"
        name="spinMode"
        value={mode}
        onChange={onChange}
        aria-label="Spin mode selection"
      >
        <ToggleButton
          id="mode-category"
          value="category"
          variant={mode === 'category' ? 'primary' : 'outline-primary'}
          aria-label="Random Category Mode"
        >
          Random Category
        </ToggleButton>
        <ToggleButton
          id="mode-spot"
          value="spot"
          variant={mode === 'spot' ? 'primary' : 'outline-primary'}
          aria-label="Random Spot Mode"
        >
          Random Spot
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

ModeToggle.propTypes = {
  mode: PropTypes.oneOf(['category', 'spot']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ModeToggle;
