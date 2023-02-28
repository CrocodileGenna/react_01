import { Section, TittleStats, Indexes, OneIndex } from './Statistics.styled';
import PropTypes from 'prop-types';
import { StatisticsOneCard } from './StatisticsOneCard';

export function Statistics({ arrey }) {
  return (
    <Section>
      <TittleStats>UPLOAD STATS</TittleStats>
      <Indexes>
        {arrey.map(({ id, label, percentage }) => {
          return (
            <OneIndex label={label} key={id}>
              <StatisticsOneCard label={label} percentage={percentage} />
            </OneIndex>
          );
        })}
      </Indexes>
    </Section>
  );
}

Statistics.propTypes = {
  arrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
