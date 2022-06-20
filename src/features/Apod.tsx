import React from "react";
import { useGetApodByDateQuery } from "../app/nasaApi";

const Apod = () => {
  const { data, isFetching, isLoading } = useGetApodByDateQuery("2022-06-18");
  return (
    <div>
      <h1>Apod</h1>
      {!isFetching && !isLoading && data.media_type === "image" && (
        <>
          <p>{data?.explanation}</p>
          <img src={data?.url} alt="Apod" />
        </>
      )}
    </div>
  );
};

export default Apod;
