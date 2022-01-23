import "./App.scss";
import team from "./data/employee";

import TicketTrackerGallery from "./containers/TicketTrackerGallery/TicketTrackerGallery";

const App = () => {
  return (
    <div className="app">
      <h1 className="ticketTracker__heading">Ticket Tracker</h1>
      <main className="ticketTracker__cards">
        <TicketTrackerGallery EmployeeCardArr={team} />
      </main>
    </div>
  );
};

export default App;