// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit"

// const usersApi = createApi({
//     reducerPath : 'usersApi',

//     baseQuery:fetchBaseQuery({
//         baseUrl: 'http://localhost:4000',
//     }),

//     endpoints: (builder)=>({
//         signout: builder.mutation({
//             query: (data) =>({
//                 url: `/auth/signout/${data}`,
//                 method: 'POST',        
//             }),
//         }),
//         signin: builder.mutation({
//             query: (data) =>({
//                 url: `/auth/signin`,
//                 method: 'POST',
//                 body:data,              
//             }),
//         })
//     })
// })

// export default usersApi
// export const {useSignoutMutation,useSigninMutation} = usersApi