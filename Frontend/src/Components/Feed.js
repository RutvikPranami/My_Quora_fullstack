import React, { useState, useEffect } from "react";
import QuoraBox from "./QuoraBox";
import "./Css/Feed.css";
import Post from "./Post";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../feature/searchResultslice";
function Feed() {
  const searchInput = useSelector(selectSearchResults);
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState([]);

  useEffect(() => {
    const tempPost = [...posts];
    const newPosts = tempPost.filter((search) => {
      return search.questionName
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setSearchPost(newPosts);
  }, [searchInput]);

  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        setPosts(res.data.reverse());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  

  return (
    <div className="feed">
      <QuoraBox />
      {searchInput
        ? searchPost.map((post, index) => 
            <Post key={index} post={post} />
          )
        : posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
}

export default Feed;
