export const Inputform = (props) => {
  const { detail, time, onChangeDetailValue, onChangeTimeValue, onClickRegistration, isCheckValue, error } = props;

  return (
    <form>
      <p>
        <label htmlFor="detail">学習内容</label>
        <input type="text" id="detail" value={detail} onChange={onChangeDetailValue} />
      </p>
      <p>
        <label htmlFor="time">学習時間</label>
        <input type="number" id="time" value={time} onChange={onChangeTimeValue} />
      </p>
      <p>{isCheckValue && <small style={{ color: 'red' }}>{error}</small>}</p>
      <p>入力されている内容:{detail}</p>
      <p>入力されている時間:{time}時間</p>
      <button type="button" onClick={onClickRegistration}>
        登録
      </button>
    </form>
  );
};
