import {
  Table,
  TableHead,
  TableBody,
  TableList,
} from './TransactionHistory.styled';
import { TransactionHistoryString } from './TransactionHistoryString';
import PropTypes from 'prop-types';

export function TransactionHistory({ props }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {props.map(({ type, amount, currency, id }) => {
          return (
            <TableList key={id}>
              <TransactionHistoryString
                type={type}
                amount={amount}
                currency={currency}
              />
            </TableList>
          );
        })}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
