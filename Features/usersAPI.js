import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../api"
const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: apiurl,
    }),

    endpoints: (builder)=>({
        userSignIn: builder.mutation({
            query: (user, token) => ({
                url: "/auth/signin",
                method: "POST",
                body: user,
                headers: { "Authorization": "Bearer " + token }
            }),
        }),
        userSignOut: builder.mutation({
            query: (token) => ({
                url: "/auth/signout",
                method: "POST",
                headers: { "Authorization": "Bearer " + token }
            })
        }),





        signout: builder.mutation({
            query: (data) =>({
                url: `/auth/signout/${data}`,
                method: 'POST',        
            }),
        }),
        signin: builder.mutation({
            query: (user, token) => ({
                url: "/auth/signin",
                method: "POST",
                body: user,
                headers: { "Authorization": "Bearer " + token }
            }),
        })
    })
})

export default usersApi
export const {useUserSignOutMutation,useUserSignInMutation,useSignoutMutation,useSigninMutation} = usersApi