import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';
import StudyList from './components/StudyList';
import SearchForm from './components/SearchForm';
import CategoryFilter from './components/CategoryFilter';
import { useState } from 'react';

console.log(reactData);
console.log(reactData[0]);

function App() {
  const dataFirst = reactData[0];

  const [selectedId, setSelectedId] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [favoriteIds, setFavoriteIds] = useState('');
  const [category, setCategory] = useState('all');

  const filteredItems = reactData
    .filter((item) => (category === 'all' ? true : item.category === category))
    .filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (c) => {
    setCategory(c);
  };

  const onSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <p>React Basic Review Mission 8</p>
      <h1>React Hooks 학습 목록 관리</h1>
      {/* <p>전체 학습 항목 수 {reactData.length}개</p> */}
      <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      <SearchForm onChange={onChange} value={keyword} />
      {/* <StudyInfo title={dataFirst.title} desc={dataFirst.desc} category={dataFirst.category} /> */}
      <CategoryFilter onClick={handleCategoryChange} category={category} />

      <div>
        <button style={{ display: 'flex', flexDirection: 'start', margin: '5px 0' }}>즐겨찾기만 보기</button>
      </div>
      <StudyList items={filteredItems} onSelect={onSelect} selectedId={selectedId} />
    </>
  );
}

export default App;
