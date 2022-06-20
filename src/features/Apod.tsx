import React from "react";
import { useGetApodByDateQuery } from "../app/nasaApi";
import "./Apod.css";

const Apod = () => {
  const formatYmd = (date: Date) => date.toISOString().slice(0, 10);
  const today = formatYmd(new Date());
  const { data, isFetching, isLoading } = useGetApodByDateQuery(today);
  return (
    <div className="Apod-container">
      <h1 className="title">Astronomical picture of the day</h1>
      {!isFetching && !isLoading && data.media_type === "image" ? (
        <>
          <p className="description ">{data?.explanation}</p>
          <img id="image" src={data?.url} alt="Apod" />
        </>
      ) : (
        <>
          <p>Today's suggestion is a video and cannot be displayed</p>
        </>
      )}
    </div>
  );
};

export default Apod;
