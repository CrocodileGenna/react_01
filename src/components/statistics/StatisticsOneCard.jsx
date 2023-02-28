import { Label, Percentage } from './Statistics.styled';
import PropTypes from 'prop-types';

export function StatisticsOneCard({ label, percentage }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
}

StatisticsOneCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
