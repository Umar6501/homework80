"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchSearchPosts();
  };

  const fetchSearchPosts = async () => {
    try {
      let res = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}`
      );
      let data = await res.data.items;
      setPosts(data);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
  }, []);

  const handleClear = () => {
    setSearchQuery("");
    setPosts([]);
  };

  return (
    <div className="container p-[30px] mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-3 outline-none border-2 rounded-md"
          type="text"
          placeholder="Найти профиль..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-80 bg-[#7e7e7e] text-white py-2 rounded-md  text-2xl hover:bg-[#a6a6a6]  hover:bg-[#a6a6a6] hover:text-[#787878] hover:transition-[0.3s] transition-[0.3s] border-2"
          >
            найти
          </button>
          <button
            onClick={handleClear}
            className="flex items-center w-32 h-12 justify-center rounded-lg text-2xl text-white my-5 bg-[#787878] border-2 text-800 hover:bg-[#a6a6a6] hover:border-2 hover:text-[#787878] transition-[0.3s] hover:transition-[0.3s]"
          >
            очистить
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-[5rem]">
        {posts.map((get) => (
          <div
            className="user-card border-2 w-[15rem] h-[18rem] mt-[5rem]"
            key={get.id}
          >
            <img
              src={get.avatar_url}
              className="w-[5rem] mx-auto my-5 rounded-full h-32 w-32"
              alt="Error"
            />
            <h1 className="mx-[3.4rem] text-[1.5rem]">{get.login}</h1>
            <Link href={`/${get.login}`}>
              <button className="text-center w-52 mx-3 py-2 rounded-lg text-white my-5 bg-[#818181] border-2 text-800 hover:bg-gray hover:border-2 hover:text-black transition-[0.3s] hover:transition-[0.3s]">
                Подробнее
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
