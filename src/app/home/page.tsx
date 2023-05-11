import { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';
import { IMovie, ITvShow } from '@/interface/interface';
import Image from 'next/image';

export default function HomePage() {
  const { data: upcomingMovies } = useQuery<IMovie[]>(['upcomingMovies'], () =>
    use(getUpcomingMovies()),
  );
  const { data: nowPlayingMovies } = useQuery<IMovie[]>(
    ['nowPlayingMovies'],
    () => use(getNowPlayingMovies()),
  );
  const { data: horrorMovies } = useQuery<IMovie[]>(['horrorMovies'], () =>
    use(getHorrorMovies()),
  );
  const { data: animations } = useQuery<ITvShow[]>(['animations'], () =>
    use(getAnimations()),
  );
  const { data: topRatedTvShows } = useQuery<ITvShow[]>(
    ['topRatedTvShows'],
    () => use(getTopRatedTvShows()),
  );

  return (
    <ul>
      {upcomingMovies!.map(video => (
        <Image
          key={video.id}
          src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
          alt="videoImg"
        />
      ))}
    </ul>
  );
}
