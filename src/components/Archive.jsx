export const Archive = (props) => {
  const { records } = props;
  return (
    <>
      <div>
        <h1>学習記録一覧</h1>
        <ul>
          {records.map((record) => (
            <li key={record.title}>
              {record.title} | {record.time}時間
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
