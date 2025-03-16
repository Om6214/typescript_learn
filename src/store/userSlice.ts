import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

// Improved fetchUser with error handling
export const fetchUser = createAsyncThunk<User, void>("user/fetchUser", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data: User = await response.json();
    return data;
});

const userSlice = createSlice<UserState, {}, "user">({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch user";
            });
    },
});

export default userSlice.reducer;
