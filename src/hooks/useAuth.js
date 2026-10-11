import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, logoutUserThunk } from "../redux/slices/authSlices";

export function useAuth() {
  const dispatch = useDispatch()
  const {auth, error} = useSelector(state => state.auth)
  const login = (auth) => dispatch(loginUserThunk(auth))
  const logoutUser = ()=> dispatch(logoutUserThunk())


  return {
    user: auth,
    isAuthenticated: !!auth,
    error,
    login,
    logoutUser

  }

}
