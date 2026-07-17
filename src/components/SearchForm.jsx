export default function SearchForm({ onChange, value }) {
  return (
    <>
      <h2>검색</h2>
      <input onChange={onChange} style={{ width: '100%' }} type='text' value={value} />
      <button>검색창으로 이동</button>
      <button>초기화</button>
    </>
  );
}
