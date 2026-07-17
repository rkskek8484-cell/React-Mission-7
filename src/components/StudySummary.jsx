import { useRef } from 'react';

export default function StudySummary({ items }) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
      }}
    >
      <p>전체 항목: {items.total}개</p>
      <p>현재 표시: {items.visible}개 </p>
      <p>즐겨찾기: {items.favorite}개</p>
      <p>App 렌더링 횟수: {renderCount.current}회 </p>
    </div>
  );
}
