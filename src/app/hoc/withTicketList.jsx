import _ from '../components/ticketCard/TicketCard.module.scss';
import { generateId } from '../utils';

const withTicketList = (Component) => {
  function TicketList({ tickets }) {
    return (
      <div className={_.ticket_list}>
        {tickets.map((item) => {
          return <Component key={generateId()} ticket={item} />;
        })}
      </div>
    );
  }

  return TicketList;
};

export default withTicketList;
