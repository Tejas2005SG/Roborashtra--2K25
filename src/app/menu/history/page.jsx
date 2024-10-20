import React from 'react';
import "./history.css"

function history() {

  const institute = [
    { instituteName: "Pimpri Chinchwad College of Engineering and Research" },
    { instituteName: "Pimpri Chinchwad College of Engineering" },
    { instituteName: "AISSMS College of Engineering" },
    { instituteName: "Sinhgad College of Engineering" },
    { instituteName: "MIT College of Engineering" },
  ]

  const instituteList = institute.map(eachinstitute =>
    <div className='list-container bg-zinc-800 hover:bg-zinc-600 rounded-lg font-semibold'>{eachinstitute.instituteName}</div>

  )

  return (
    <div className='main-container '>
      <div className='past-winner-container mt-[100px]'>
      <h1 className='institute-winner text-center font-bold p-[20px]'>Past Winner</h1>
      <div className='bg-green-300 w-[50vw] h-[50vh] '  >
      
      </div>

      </div>


      <div className='past-institute-container'>
      <h1 className='institute-winner text-center font-bold'>Past Institutes participated</h1>
      <div className='inner-container-list flex flex-col'>
        {instituteList}
      </div>

      </div>
     

    </div>
  ) 
}

export default history