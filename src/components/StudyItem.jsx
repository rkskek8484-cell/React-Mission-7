import { memo } from 'react';

function StudyItem({ item, isFavorite, onToggleFavorite }) {
  return (
    <li key={item.id} style={{ border: '1px solid #ccc', borderRadius: '5px', margin: '20px 0', listStyle: 'none' }}>
      <h3>
        {item.id}. {item.title}
      </h3>
      <p>{item.desc}</p>
      <p>
        분류: {item.category} / 난이도: {item.level}
      </p>
      <button style={{ margin: '20px 0' }} onClick={() => onToggleFavorite(item.id)}>
        {isFavorite ? '★ 즐겨찾기 해제' : '☆ 즐겨찾기'}
      </button>
    </li>
  );
}
export default memo(StudyItem);
