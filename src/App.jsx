import './App.css';
import reactData from './data/data.json';

import StudyList from './components/StudyList';
import SearchForm from './components/SearchForm';
import CategoryFilter from './components/CategoryFilter';
import StudySummary from './components/StudySummary';
import { useState, useMemo, useCallback } from 'react';

console.log(reactData);
console.log(reactData[0]);

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredData = useMemo(() => {
    return reactData
      .filter((item) => (category === 'all' ? true : item.category === category))
      .filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()))
      .filter((item) => (favoriteOnly ? favoriteIds.includes(item.id) : true));
  }, [keyword, category, favoriteOnly, favoriteIds]);

  const summary = useMemo(() => {
    return {
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    };
  }, [filteredData, favoriteIds]);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (c) => {
    setCategory(c);
  };

  const handleToggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  }, []);

  const onSelect = (id) => {
    setSelectedId(id);
  };

  const handleReset = () => {
    setKeyword('');
    setCategory('all');
    setFavoriteOnly(false);
  };

  return (
    <>
      <p>React Basic Review Mission 8</p>
      <h1>React Hooks 학습 목록 관리</h1>

      <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      <SearchForm onChange={onChange} value={keyword} handleReset={handleReset} />

      <CategoryFilter
        onClick={handleCategoryChange}
        category={category}
        favoriteIds={favoriteIds}
        favoriteOnly={favoriteOnly}
      />
      <div>
        <button
          style={{ display: 'flex', flexDirection: 'start', margin: '5px 0' }}
          onClick={() => setFavoriteOnly(!favoriteOnly)}
        >
          {favoriteOnly ? '전체 항목 보기' : '즐겨찾기만 보기'}
        </button>
      </div>
      <StudySummary items={summary} />
      <StudyList items={filteredData} favoriteIds={favoriteIds} onToggleFavorite={handleToggleFavorite} />
    </>
  );
}

export default App;
