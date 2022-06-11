/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';

import { Anime } from 'types/Anime';

import { Filter } from '@components/ui/filter';
import { AnimeCard } from '@components/ui/cards';
import { Pagination } from '@components/ui/pagination';
import { AnimeModal } from '@components/ui/modals';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortDir, setSortDir] = useState<string>('desc');
  const [queryStr, setQueryStr] = useState<string>('');

  const [animeList, setAnimeList] = useState<Anime[]>([]);

  const [currentAnime, setCurrentAnime] = useState<Anime>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const _endpointApi = 'http://localhost:4000/story';
  const _limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const apiUrl = `${_endpointApi}?limit=${_limit}&offset=${page}&sort=${sortDir}&filter=${queryStr}`;
      const { data } = await axios.get(apiUrl);

      setAnimeList(data.records);
      setTotalCount(data.totalCount);
      setLoading(false);
    };

    fetchData();
  }, [page, sortDir, queryStr]);

  const openModal = useCallback((anime: Anime) => {
    setCurrentAnime(anime);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onPageChange = useCallback(
    (page: number) => {
      setPage(page);
    },
    [page]
  );

  const onSort = useCallback(
    (type: 'asc' | 'desc') => {
      setSortDir(type);
    },
    [sortDir]
  );

  const onFilter = useCallback(
    (queryString: string) => {
      setQueryStr(queryString);
    },
    [queryStr]
  );

  return (
    <div>
      <Filter onClickSort={onSort} onFilter={onFilter} />
      {loading && <div className="flex w-full items-center justify-center">LOADING...</div>}
      {animeList && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {animeList.map((anime: Anime, index: number) => (
            <AnimeCard key={index} onClick={() => openModal(anime)} data={anime} />
          ))}
        </div>
      )}
      {animeList?.length ? (
        <div className="flex w-full items-center justify-center py-12">
          <Pagination current={page} total={totalCount} pageSize={_limit} onChange={onPageChange} />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center py-12"> No data</div>
      )}
      <AnimeModal data={currentAnime as Anime} isOpen={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Home;
