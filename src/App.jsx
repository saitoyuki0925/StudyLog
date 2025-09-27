import './App.css';
import { Archive } from './components/Archive';
export const App = () => {
  // テストデータ
  const records = [
    { title: '勉強の記録1', time: 1 },
    { title: '勉強の記録2', time: 3 },
    { title: '勉強の記録3', time: 5 },
  ];

  return (
    <>
      <Archive records={records}></Archive>
    </>
  );
};
