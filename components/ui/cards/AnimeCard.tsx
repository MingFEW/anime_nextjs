/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';
import { Anime } from 'types/Anime';

interface Props {
  onClick?(): void;
  data: Anime;
}

const AnimeCard: FunctionComponent<Props> = ({ data, onClick }) => {
  const { title, image_url, rated, episodes } = data || {};

  return (
    <div className="anime-card" onClick={onClick}>
      <div className="thumbnail">
        <img src={image_url} alt="" />
        {rated && (
          <div className="ribbon">
            RATED
            <b>{rated}</b>
          </div>
        )}
      </div>

      <div className="content-wrapper">
        <div className="anime-title">{title}</div>
        {episodes ? (
          <div className="anime-episode">{`${episodes} ${episodes > 1 ? 'episodes' : 'episode'}`}</div>
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(AnimeCard);
