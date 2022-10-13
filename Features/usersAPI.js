import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../api"
const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: apiurl,
    }),

    endpoints: (builder)=>({
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
export const {useSignoutMutation,useSigninMutation} = usersApi