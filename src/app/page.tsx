import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
   <div className='p-5'>
       <div className='w-full flex gap-x-5 justify-end'>
           <UserButton/>
       </div>

   </div>
  );
}
