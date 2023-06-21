'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import AvailableQuestions from '@/components/AvailableQuestions'

const MultipleChoiceQuestions = () => {
  const searchParams = useSearchParams()
  const totalQuestions = searchParams.get('totalquestions')

  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='Fifty-fifty Round' isBackArrow={true} />
        {/* end navbar */}

        <AvailableQuestions
          isMultipleQuestionsPage={true}
          totalQuestions={totalQuestions}
        />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default MultipleChoiceQuestions
