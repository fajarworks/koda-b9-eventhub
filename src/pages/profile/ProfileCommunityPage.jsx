import { useSelector } from 'react-redux';
import CommunityItemCard from '../../components/CommunityItemCard';

function ProfileCommunityPage() {
  const communities = useSelector(state => state.communities.communities)
  const isLoggedIn = useSelector(state => state.auth.auth)
  const getCommunities = communities.filter((com)=> com.members.includes(isLoggedIn.email))
  return (
    <div className='max-w-5xl mx-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      {getCommunities.map((item) =>
        <CommunityItemCard communities={item} key={item.id} />
      )}
    </div>
    </div>
  );
}

export default ProfileCommunityPage;
