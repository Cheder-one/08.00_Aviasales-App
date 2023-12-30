import _ from '../components/ticketCard/TicketCard.module.scss';

const withTicketList = (Component) => {
  function TicketList({ data }) {
    return (
      <div className={_.ticket_list}>
        {data.map((ticket) => (
          <Component key={ticket} ticket={ticket} />
        ))}
      </div>
    );
  }

  return TicketList;
};

export default withTicketList;
