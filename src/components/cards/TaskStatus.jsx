import React from 'react';

const TaskStatus = ({ ticket, handleResolvedTask }) => {
  return (
    <div className="space-y-3 text-black bg-white p-4 rounded shadow">
      <h2 className="font-bold">{ticket.title}</h2>
      <button
        onClick={() => handleResolvedTask(ticket)}
        className="btn rounded-xl bg-green-500 text-white w-full"
      >
        Complete
      </button>

      {/* <p className="font-semibold">Select a ticket to add to Task Status</p>
        <h2 className="font-bold text-2xl md:text-3xl">Resolved Task</h2>
        <p className="font-semibold">No resolved tasks yet.</p> */}
    </div>
  );
};

export default TaskStatus;