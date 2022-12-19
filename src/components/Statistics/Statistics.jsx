import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.statisticsWraper}>
      <p className={css.titleItem}>
        Good: <span className={css.good}>{good}</span>
      </p>
      <p className={css.titleItem}>
        Neutral: <span className={css.neutral}>{neutral}</span>
      </p>
      <p className={css.titleItem}>
        Bad: <span className={css.bad}>{bad}</span>
      </p>
      <p className={css.titleItem}>
        Total: <span className={css.total}>{total}</span>
      </p>
      {positive && (
        <p className={css.titleItem}>
          Positive feedback:{' '}
          <span className={css.totalPositive}>{positive.toFixed(0)}%</span>
        </p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
export default Statistics;
