import { useRef, useEffect } from 'react';

export default function SearchForm({ onChange, value, handleReset }) {
  const searchInputRef = useRef(null);
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <>
      <h2>검색</h2>
      <input
        style={{ width: '100%' }}
        type='text'
        onChange={onChange}
        value={value}
        ref={searchInputRef}
        placeholder='학습 항목 검색'
      />
      <button onClick={handleFocusSearch}>검색창으로 이동</button>
      <button onClick={handleReset}>초기화</button>
    </>
  );
}
