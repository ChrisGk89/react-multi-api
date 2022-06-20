import React from 'react';
import { useGetApodByDateQuery } from '../app/nasaApi';

const Apod = () => {
  const formatYmd = (date: Date) => date.toISOString().slice(0, 10);
  const today = formatYmd(new Date());
  const { data, isFetching, isLoading } = useGetApodByDateQuery(today);
  return (
    <div>
      <h1>Apod</h1>
      {!isFetching && !isLoading && data.media_type === 'image' ? (
        <>
          <p>{data?.explanation}</p>
          <img src={data?.url} alt="Apod" />
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
