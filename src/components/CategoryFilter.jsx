export default function CategoryFilter({ onClick, category }) {
  const categories = ['all', 'concept', 'library', 'hook'];

  return (
    <>
      <h2>카테고리 필터</h2>
      <div style={{ display: 'flex', gap: '5px' }}>
        {categories.map((c) => (
          <button key={c} onClick={() => onClick(c)}>
            {c === 'all' ? '전체' : c}
          </button>
        ))}
      </div>
    </>
  );
}
