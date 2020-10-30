import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  // state === blogPosts
  // action === { type: 'add_blogpost' || 'edit_blogpost' || 'delete_blogpost' }
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
