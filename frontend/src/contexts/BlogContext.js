import { createContext, useReducer } from "react";

export const BlogContext = createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get blogs':
            return {
                blogs: action.payload
            }
        case 'get blog':
            return {
                blogs: action.payload
            }
        case 'add blog':
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case 'delete blog':
            return {
                blogs: state.blogs.filter((blog) => (
                    blog._id !== action.payload._id
                ))
            }
        case 'update blog':
            return {
                blogs: state.blogs.map((blog) => {
                    if (blog._id === action.payload._id) {
                        return action.payload; // Replace 4 with 7
                      }
                      return blog;
                })
            }
            
        default:
            return state
    }
}

export const BlogContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(blogReducer, {
        blogs: null
    })


    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}