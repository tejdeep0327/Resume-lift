import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview';

function ResumePreview() {

  const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'>
     <PersonalDetailPreview resumeInfo={resumeInfo}/>










    </div>
  )
}

export default ResumePreview