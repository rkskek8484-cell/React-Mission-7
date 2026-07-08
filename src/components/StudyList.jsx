export default function StudyList({ items, onSelect, selectedId }) {
  return (
    <div>
      <ul style={{}}>
        {items.map((item) => (
          <li
            key={item.id}
            className={item.id === selectedId ? 'active' : ''}
            style={{ border: '1px solid #ccc', borderRadius: '5px', margin: '20px 0', listStyle: 'none' }}
            onClick={() => onSelect(item.id)}
          >
            <h3>
              {item.id}. {item.title}
            </h3>
            <p>{item.desc}</p>
            <p>분류: {item.category}</p>
            {item.id === selectedId && <strong>선택된 항목입니다.</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}
