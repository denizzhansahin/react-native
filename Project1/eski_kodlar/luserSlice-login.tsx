import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

export const login = createAsyncThunk('user/login',async({username,password})=>{
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth,username,password)
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
    email:null,
    password:null,
    isLoading:false,
    isAuth:false,
    users:{
        userEmail:"test@test.com",
        userPassword:"123456"
    }
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
        setLogin:(state)=>{
            if((state.email === state.users.userEmail) && (state.password===state.users.userPassword)){
                console.log(true)
                state.isAuth = true
            }else{
                console.log(false)
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, ()=>{
            //yükleniyor
        })
        .addCase(login.fulfilled,()=>{
            //başarı ile tamamlandı
        })
        .addCase(login.rejected, ()=>{
            //hata var
        })
    }
})

export const {setEmail,setPassword,setIsLoading,setLogin} = userSlice.actions
export default userSlice.reducer