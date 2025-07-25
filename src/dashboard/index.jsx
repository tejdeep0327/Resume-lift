import React, { useEffect, useState } from 'react'
import AddResume from './component/AddResume'
import { useUser } from '@clerk/clerk-react';
import GlobalAPI from './../../service/GlobalAPI';
import ResumeCardItem from './component/ResumeCardItem';

function Dashboard() {
  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);
   
  useEffect(() => {
    user && GetResumesList()
  }, [user])

// used to get users reumes list

  const GetResumesList = () => {
    GlobalAPI.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        setResumeList(resp.data.data);
      })
  };

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI Resume</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
        <AddResume />
        {resumeList.length>0&&resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
