const Notification = ({ rate }) => {
  if (rate.good === 0 && rate.neutral === 0 && rate.bad === 0) {
    return <div>No feedback yet</div>;
  }
};
export default Notification;
