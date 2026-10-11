import { useDispatch, useSelector } from 'react-redux';
import CommunityItemCard from '../../components/CommunityItemCard';
import { useEffect } from 'react';
import { getCommunitiesUser } from '../../redux/slices/userSlices';

function ProfileCommunityPage() {
  const {userCommunities} = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getCommunitiesUser())
  },[dispatch, userCommunities])
  return (
    <div className='max-w-5xl mx-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      {userCommunities?.data?.map((item) =>
        <CommunityItemCard communities={item} key={item.id} />
      )}
    </div>
    </div>
  );
}

export default ProfileCommunityPage;
