import StudyItem from './StudyItem';

export default function StudyList({ items, favoriteIds, onToggleFavorite }) {
  const isFavorite = favoriteIds.includes(items.id);

  return (
    <div>
      <h2>학습 목록</h2>
      {items.length === 0 && <p>조건에 맞는 학습 항목이 없습니다.</p>}
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
