import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import { data } from 'autoprefixer'
import { useUser } from '@clerk/clerk-react'
import GlobalAPI from './../../../service/GlobalAPI'
import { useNavigate} from 'react-router-dom'

function AddResume() {
  const [resumeTitle, setResumeTitle] = useState();
  const [dialogOpen, setDialogOpen] = useState(false)
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate =async() => {
    setLoading(true)
    const uuid = uuidv4();;
    const data = {
      data: {
        Title: resumeTitle,
        ResumeID: uuid,
        UserEmail: user?.primaryEmailAddress?.emailAddress,
        UserName: user?.fullName
      }
    }
    GlobalAPI.createNewResume(data)
    .then((resp) => {
      console.log(resp.data.data.documentID);
      if (resp) {
        setLoading(false)
        navigation('/dashboard/resume/'+resp.data.data.documentID+"/edit");
      }
    })
    .catch((err) => {
      console.error(err);
      setLoading(false)
    });
    
  }
  return (
    <div>
      <div className='pd-14 py-24 border items-center flex justify-center bg-secondary
         rounded-lg h-[280px] hover:scale-105 transition-all shadow-md cursor-pointer'
        onClick={() => setDialogOpen(true)}>
        <PlusSquare />
      </div>
      <Dialog open={dialogOpen}>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Add a title for your new resume
              <Input className="my-2" placeholder="Ex.Full Stack Resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className='flex justify-end gap-5'>

              <Button onClick={() => setDialogOpen(false)} variant="ghost">Cancel</Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}>
                  {loading ?
                  <Loader2 className='animate-spin'/> : 'Create'
                  }
                  </Button>

            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddResume