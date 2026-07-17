import StudyItem from './StudyItem';

export default function StudyList({ items, favoriteIds, onToggleFavorite }) {
  const isFavorite = favoriteIds.includes(items.id);

  if (items.length === 0) {
    return (
      <div
        style={{
          padding: '30px',
          textAlign: 'center',
          color: 'silver',
          border: '1px dashed #ccc',
          borderRadius: '6px',
          margin: '15px 0',
        }}
      >
        조건에 맞는 학습 항목이 없습니다.
      </div>
    );
  }
  return (
    <div>
      <h2>학습 목록</h2>
      <ul>
        {items.map((item) => (
          <StudyItem
            key={item.id}
            item={item}
            isFavorite={favoriteIds.includes(item.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
}
