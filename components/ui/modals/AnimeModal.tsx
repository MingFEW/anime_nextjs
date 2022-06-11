/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import { Anime } from 'types/Anime';
import { nFormatter } from 'utils/helper';

export type Props = {
  data: Anime;
  isOpen: boolean;
  closeModal?(): void;
};

const AnimeModal: FunctionComponent<Props> = ({ data, isOpen, closeModal }) => {
  const { title, score, rated, type, image_url, members, start_date, end_date, synopsis } = data || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Anime Modal"
      className="anime-modal"
      overlayClassName="anime-modal-overlay"
    >
      <div className="relative">
        <div className="close-modal" onClick={closeModal}>
          X
        </div>

        <div className="anime-name mb-4 text-3xl font-bold text-grey200">{title}</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center">
            <div className="mr-1 text-sm">Score</div>
            <div className="text-sm font-bold">{score}</div>
          </div>

          {rated && (
            <div className="flex items-center">
              <div className="mr-1 text-sm">Rate</div>
              <div className="text-sm font-bold">{rated}</div>
            </div>
          )}

          <div className="flex items-center">
            <div className="mr-1 text-sm">Type</div>
            <div className="text-sm font-bold">{type}</div>
          </div>

          <div className="flex items-center">
            <div className="mr-1 text-sm">Members</div>
            <div className="text-sm font-bold">{nFormatter(members)}</div>
          </div>
        </div>

        <div className="main-content pt-8">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="picture">
              <img className="w-full" src={image_url} alt="" />
            </div>

            <div className="desc">
              <div className="ct mb-12">{synopsis}</div>

              <div className="meta-date flex items-center gap-6">
                <div className="date-col text-sm">
                  Start Date <div className="font-bold">{moment(start_date).format('DD/MM/YYYY')}</div>
                </div>

                <div className="date-col text-sm">
                  End Date <div className="font-bold">{moment(end_date).format('DD/MM/YYYY')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(AnimeModal);
