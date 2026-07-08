export default function StudyInfo({ title, desc, category }) {
  return (
    <div>
      <h2>첫 번째 데이터 출력</h2>
      <ul>
        <li style={{ border: '1px solid #ccc', borderRadius: '5px', listStyle: 'none' }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>분류: {category}</p>
        </li>
      </ul>
    </div>
  );
}
