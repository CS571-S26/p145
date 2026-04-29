import React from 'react';
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

const badgeDescriptions = {
  'Coffee Connoisseur': 'Visited 5+ coffee shops!',
  'Late-Night Legend': 'Tried 3+ late-night spots!',
  // Add more badge descriptions as needed
};

function BadgeIcon({ badgeName }) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${badgeName}`}>{badgeDescriptions[badgeName] || badgeName}</Tooltip>}
    >
      <Badge pill bg="info" className="mx-1" aria-label={badgeDescriptions[badgeName] || badgeName}>
        {badgeName}
      </Badge>
    </OverlayTrigger>
  );
}

BadgeIcon.propTypes = {
  badgeName: PropTypes.string.isRequired,
};

export default BadgeIcon;
