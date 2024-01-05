import _ from '../components/ticketCard/TicketCard.module.scss';

const getId = () => {
  return Math.random().toString(36).substring(7);
};

const withTicketList = (Component) => {
  function TicketList({ data }) {
    return (
      <div className={_.ticket_list}>
        {data.map((ticket) => (
          <Component key={getId()} ticket={ticket} />
        ))}
      </div>
    );
  }

  return TicketList;
};

export default withTicketList;
