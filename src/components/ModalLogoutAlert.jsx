import { LuDoorOpen, LuX } from 'react-icons/lu';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetCommunityIds } from '../redux/slices/communitySlices';
import { resetJoinedEvents } from '../redux/slices/eventSlices';

function ModalLogoutAlert({show, setShow}) {
  const dispatch = useDispatch()
  const { logoutUser } = useAuth()

  useEffect(()=> {
    
  })
  if (!show) return null
  const handleLogout = () => {
    dispatch(logoutUser)
    dispatch(resetCommunityIds())
    dispatch(resetJoinedEvents())
    setShow(false)
  }
  return (
    <div className='inset-0 fixed z-50 h-screen w-screen flex items-center justify-center bg-black/50'>
      <div onClick={(e) => e.stopPropagation()} className='w-full max-w-118 rounded-2xl bg-white'>
        <div className="flex items-center justify-center border-b-2 border-gray-300 p-5">
          <div className="font-semibold">Sign out</div>

          <button
            className="ml-auto cursor-pointer hover:text-red-500"
            onClick={()=> {setShow(false)}}
          >
            <LuX/>
          </button>
        </div>
        <div className="my-center flex flex-col gap-4 p-5">
          <div className="rounded-2xl bg-red-100 text-red-500 p-2">
            <LuDoorOpen size={30}/>
          </div>
          <div className=" text-center">
            <p className='font-medium'>There are so many events and communities are waiting for you...</p>
            <p>Are you sure want to leave?</p>
          </div>
        </div>
        <div className="ml-auto flex w-fit gap-3 p-5">
          <button
            className="border rounded-lg  px-3 py-1"
            onClick={handleLogout}
          >
            Leave
          </button>

          <button
            className="cursor-pointer px-3 py-1 rounded-lg bg-primary text-white"
            onClick={()=> setShow(false)}
          >
            Keep Browsing
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogoutAlert;
