import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleConfirm } from '../redux/slice/datVeReducer';
const ChoNgoi = () => {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const arr = ['A', 'B', 'C', 'D', 'E', '', 'F', 'G', 'H', 'I', 'J'];

  const dispatch = useDispatch();
  const formData = useSelector(state => state.datVeReducer.value);
  // console.log(formData.number);
  useEffect(() => {
    // Kiểm tra nếu thông tin đã nhập đủ, bật tính năng chọn ghế
    if (formData.name !== '' && formData.number !== '') {
      setFormValid(true);
      setInputDisabled(false);
    } else {
      setFormValid(false);
      setInputDisabled(true);
    }
  }, []);
  const confirmSelection = () => {
    const arrInput = document.querySelectorAll('input.ghe:checked');
    console.log(arrInput.length);
    if (formData.number != arrInput.length) {
      alert('Số ghế bạn chọn không đúng');
      return;
    } else {
      const arrSeat = [];
      for (let item of arrInput) {
        arrSeat.push(item.value);
      }
      console.log(arrSeat);

      // Gửi dữ liệu lên Redux bằng cách gọi action creator handleConfirm
      dispatch(handleConfirm({ arrSeat }));
    }
  };

  return (
    <div className="hangGhe">
      <ul className="space-x-6 mt-6">
        <li className="choNgoi chon text-white">Selected Seat</li>
        <li className="choNgoi duocDat text-white">Reserved Seat</li>
        <li className="choNgoi trong text-white">Empty Seat</li>
      </ul>
      <div>
        <table className="px-4 text-white table-seate">
          <thead className="text-center">
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th></th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                {item === '' ? (
                  <td colSpan="13" className="loiDi2"></td>
                ) : (
                  <>
                    <td>{item}</td>
                    {[1, 2, 3, 4, 5, 6, '', 7, 8, 9, 10, 11, 12].map((num, i) =>
                      num === '' ? (
                        <td key={i} className="loiDi"></td>
                      ) : (
                        <td key={i}>
                          <input
                            disabled={setInputDisabled}
                            type="checkbox"
                            className="ghe"
                            value={`${item}${num}`}
                          />
                        </td>
                      )
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="screen px-4">SCREEN THIS WAY</div>
        <div className="buttonConfirm text-center mt-3">
          <button
            class="bg-white text-black rounded-md py-2 px-5"
            onClick={confirmSelection}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoNgoi;
