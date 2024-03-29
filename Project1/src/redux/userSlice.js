import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

export const login = createAsyncThunk('user/login',async({email,password})=>{
    console.log("username: ", email)
    console.log("password: ", password)
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token,
            user:user,
        }

        return userData;
    } catch (error) {
        console.log("try-catch firebase : ",error)
        throw error
        
    }
})

const initialState = {
    isLoading:false,
    isAuth:false,
    token : null,
    user : null,
    error : null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            const loverCaseEmail = action.payload.toLowerCase()
            state.email= loverCaseEmail
        },
        setPassword:(state,action)=>{
            state.password=action.payload
        },
        setIsLoading : (state,action)=>{
            state.isLoading = action.payload
        },
        /*
        setLogin:(state)=>{
            if((state.email === state.users.userEmail) && (state.password===state.users.userPassword)){
                console.log(true)
                state.isAuth = true
            }else{
                console.log(false)
            }
        }
        */
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state)=>{
            //yükleniyor
            state.isLoading = true;
            state.isAuth = false
        })
        .addCase(login.fulfilled,(state,action)=>{
            //başarı ile tamamlandı
            state.isLoading = false;
            state.isAuth = true
            state.user = action.payload.user
            state.token = action.payload.token;
        })
        .addCase(login.rejected, (state,action)=>{
            //hata var
            state.isLoading = false;
            state.isAuth = false;
            state.error = action.error.message;
        })
    }
})

export const {setEmail,setPassword,setIsLoading} = userSlice.actions
export default userSlice.reducer

//npm i redux-thunk