import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem({ resume }) {
  return (
    <Link to={'/dashboard/resume/'+resume.ResumeID+"/edit"}>
      <div className='p-14 bg-secondary flex items-center 
      justify-center h-[280px] border border-primary rounded-lg
      hover:scale-105 transition-all shadow-md shadow-pointer'>
        <Notebook/>
      </div>
      <h2 className='text-center'  >{resume.Title}</h2>
    </Link>
  )
}

export default ResumeCardItem
