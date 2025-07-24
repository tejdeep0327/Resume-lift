import { PlusSquare } from 'lucide-react'
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

function AddResume() {
    const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <div>
        <div className='pd-14 py-24 border items-center flex justify-center bg-secondary
         rounded-lg h-[280px] hover:scale-105 transition-all shadow-md cursor-pointer'
         onClick={() => setDialogOpen(true)}>
            <PlusSquare/>
        </div>
        <Dialog open={dialogOpen}>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
      <div className='flex justify-end gap-5'>
       
        <Button>Create</Button>
        <Button variant = "ghost">Cancel</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddResume