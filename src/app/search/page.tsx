'use client';

import { useState } from 'react';
import DafaultMovieList from '@/components/SearchPage/DefaultMovieList';
import SearchMovieList from '@/components/SearchPage/SearchMovieList';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import Image from 'next/image';

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchPageBox>
      <SearchInputBox>
        <img src={'/icons/search.svg'} />
        <SearchInput
          type="text"
          placeholder="Search for a show, movie, e.t.c."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <DeleteBtn
          src={'/icons/delete.svg'}
          onClick={() => setSearchText('')}
        />
      </SearchInputBox>

      <Title>Top Searches</Title>
      {!searchText ? (
        <DafaultMovieList />
      ) : (
        <SearchMovieList searchText={searchText} />
      )}
      <Footer />
    </SearchPageBox>
  );
}

const SearchPageBox = styled.div`
  width: 375px;
`;

const SearchInputBox = styled.div`
  background-color: #424242;
  width: 375px;
  height: 52px;
  margin-top: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21px;
`;

const SearchInput = styled.input`
  width: 270px;
  height: 31px;
  background-color: #424242;
  border: 0;
  padding: 0;

  font-weight: 400;
  font-size: 15.213px;
  line-height: 31px;
  letter-spacing: 0.206667px;
  color: #c4c4c4;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 15.213px;
    line-height: 31px;

    text-align: center;
    letter-spacing: 0.206667px;

    color: #c4c4c4;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 26.75px;
  font-weight: 700;
  margin: 21px 0;
`;

const DeleteBtn = styled.img`
  cursor: pointer;
`;
