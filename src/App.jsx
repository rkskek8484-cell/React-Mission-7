import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';
import StudyList from './components/StudyList';
import { useState } from 'react';

console.log(reactData);
console.log(reactData[0]);

function App() {
  const dataFirst = reactData[0];

  const [selectedId, setSelectedId] = useState(null);
  const onSelect = (id) => {
    setSelectedId(id);
  };

  const [category, setCategory] = useState('all');
  const filteredItems = reactData
    .filter((item) => (category === 'all' ? true : item.category === category))
    .filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));

  const [keyword, setKeyword] = useState('');

  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 {reactData.length}개</p>
      <StudyInfo title={dataFirst.title} desc={dataFirst.desc} category={dataFirst.category} />
      <h2>카테고리 필터</h2>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button onClick={() => setCategory('all')}>전체</button>
        <button onClick={() => setCategory('concept')}>concept</button>
        <button onClick={() => setCategory('library')}>library</button>
        <button onClick={() => setCategory('hook')}>hook</button>
      </div>
      <h2>검색</h2>
      <input onChange={(e) => setKeyword(e.target.value)} style={{ width: '100%' }} type='text' value={keyword}></input>
      <StudyList items={filteredItems} onSelect={onSelect} selectedId={selectedId} />
    </>
  );
}

export default App;
