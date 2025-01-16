import React, { useState } from 'react';
import AgencyForm from './AgencyForm';
const Dashboard = ({ data }) => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);

  const handleAddAgent = (agentData) => {
    setAgents((prevAgents) => {
      const newAgents = [...prevAgents, agentData];
      setFilteredAgents(newAgents);
      return newAgents;
    });
  };

  
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-4 h-screen bg-gray-100">
        <div className="w-full md:w-1/3 p-4 border-l">
          <AgencyForm onAddAgent={handleAddAgent} className='pb-8'/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;