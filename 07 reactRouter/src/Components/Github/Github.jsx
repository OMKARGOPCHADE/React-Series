import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex flex-wrap gap-3">
        <img src={data.avatar_url} alt="Git picture" width={300} />
        <div className="flex flex-col">

        Github followers: {data.followers}
        <h1>Name: {data.name}</h1>
        <h1>Public_Repos: {data.public_repos}</h1>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/OMKARGOPCHADE");
  return response.json();
};
