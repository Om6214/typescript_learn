import {useSelector,useDispatch} from "react-redux";
import {AppDispatch,RootState} from "../store/store.ts";
import {fetchUser} from "../store/userSlice.ts"

const UserProfile = () => {
    const {user,loading,error} = useSelector((state: RootState)=> state.user)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>User Profile</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && (
                <>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            )}
            <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
        </div>
    )
}

export default UserProfile