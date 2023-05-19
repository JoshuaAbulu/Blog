import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

export const useBlogContext = () => {
    const context = useContext(BlogContext)

    return context
}