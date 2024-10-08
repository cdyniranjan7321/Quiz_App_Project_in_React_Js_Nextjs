'use client'
import Sidebar from '@/components/Sidebar'
import React, { useState, useEffect, ChangeEvent } from 'react'

const AdditionalSettings = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(true)
  // this is used to have boolean value true for issidebarshown
  const [numberOfTeams, setNumberOfTeams] = useState(2) // State to store the number of teams
  const handleTeamNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberOfTeams(Number(event.target.value)) // Update the state with the new number of teams
  }
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 768) {
        setIsSidebarShown(false)
        //this makes the sidebar hidden
      } else {
        setIsSidebarShown(true)
      }
    }

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const teams = Array.from(
    { length: numberOfTeams },
    (_, index) => `Team ${index + 1}`
  )

  const [houseNames, setHouseNames] = useState<string[]>([])
  const handleHouseNameChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedHouseNames = [...houseNames]
    updatedHouseNames[index] = event.target.value
    setHouseNames(updatedHouseNames)
  }

  const generateHouseInputs = () => {
    return Array.from({ length: numberOfTeams }, (_, index) => (
      <div
        key={index}
        className='bg-white h-11  rounded-md mt-6 text-2xl pl-2 pt-1'
      >
        <input
          type='text'
          value={houseNames[index] || ''}
          onChange={(event) => handleHouseNameChange(index, event)}
        />
      </div>
    ))
  }
  const generateOrderNumbers = () => {
    return Array.from({ length: numberOfTeams }, (_, index) => (
      <h2
        key={index}
        className='bg-white flex justify-center items-center rounded-md py-1 mt-6 mb-7 w-50'
      >
        {index + 1}
      </h2>
    ))
  }
  return (
    <div className=' h-screen w-screen z-0 '>
      {/* this is to make the div have full screen as the page */}
      <div className='absolute left-0 top-0 z-30 h-full'>
        <Sidebar isSidebarShown={isSidebarShown} />
      </div>
      <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]'>
        <div className='  mt-[8%]   absolute backdrop-blur-4xl  border-2 border-purple-500 rounded-3xl w-[80%] h-[80%] ml-[10%]'>
          <div className='flex flex-col justify-center '>
            {/* the above line is the one that holds the team division page */}

            <div className='  flex justify-center gap-3 items-center pt-[13%]'>
              <span className='text-2xl text-white pb-4   '>
                {' '}
                Number of Teams:
              </span>
              <input
                type='number'
                className='rounded-md px-2 py-1  text-xl w-[5%]  outline-none mb-4 '
                id=''
                placeholder=''
                max={20}
                min={2}
                value={numberOfTeams}
                onChange={handleTeamNumber}
              />
            </div>

            <div
              className={`${
                numberOfTeams > 3 ? 'overflow-y-scroll   ' : ''
              }  max-h-[calc(90vh-500px)]  `}
            >
              <div className=' flex flex-row  '>
                <div className=' text-white text-3xl font-medium ml-[10%]'>
                  <h1 className=' pl-[8%] backdrop-blur-md  w-[130%] mb-1'>
                    SN
                  </h1>
                  {teams.map((team, index) => (
                    <div key={index} className='flex flex-row h-10 w-30 mt-7 '>
                      <h2>{team}:</h2>
                    </div>
                  ))}
                </div>
                <div className=' text-3xl pl-[8%]'>
                  <h1 className=' text-white mb-2  flex justify-center font-medium '>
                    Team Name
                  </h1>
                  <div className='text-black'>{generateHouseInputs()}</div>
                </div>
                <div className='pl-[4%] '>
                  <h1 className='text-white text-3xl  font-medium'>
                    <span className='w-[9%] '>Game Order</span>
                  </h1>
                  <div className=' text-black text-2xl  text-center '>
                    {generateOrderNumbers()}
                  </div>
                </div>
              </div>
            </div>
            <button className='fixed bottom-10 text-black text-3xl bg-[#57CC99] rounded-full w-20 flex items-center justify-center  ml-[45%]  pb-2 mt-4'>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalSettings
