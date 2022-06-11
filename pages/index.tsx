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
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [currentAnime, setCurrentAnime] = useState<Anime>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=Ghibli&page=${page}`);
      setAnimeList(data.results);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const openModal = useCallback((anime: Anime) => {
    setCurrentAnime(anime);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onPageChange = useCallback(
    (page: number, pageSize: number) => {
      setPage(page);
    },
    [page]
  );

  return (
    <div>
      <Filter />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {animeList.map((anime: Anime, index: number) => (
          <AnimeCard key={index} onClick={() => openModal(anime)} data={anime} />
        ))}
      </div>

      <div className="flex w-full items-center justify-center py-12">
        <Pagination current={page} total={10} pageSize={6} onChange={onPageChange} />
      </div>

      <AnimeModal data={currentAnime as Anime} isOpen={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Home;
