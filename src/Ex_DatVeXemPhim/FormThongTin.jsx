import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOnChange, handleSelect } from '../redux/slice/datVeReducer';

const FormThongTin = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    // Gọi action handleOnChange để cập nhật dữ liệu trong Redux
    dispatch(handleOnChange({ id, value }));
  };

  const handleStartSelecting = () => {
    if (formData.name === '' || formData.number === '') {
      alert('Vui lòng nhập đầy đủ thông tin.');
    } else {
      // Thực hiện các hành động khác ở đây sau khi dữ liệu được nhập đúng
      console.log('Bắt đầu chọn ghế...');
      // Gọi action handleSelect để thay đổi trạng thái hiển thị
      console.log(formData);
      dispatch(handleSelect({ display: 'flex', formData }));
    }
  };
  return (
    <div>
      <h2 className="text-center text-2xl text-green-500">
        Fill The Required Details Below And Select Your Seats
      </h2>
      <div className="form-info place-items-center">
        <form className="pt-5 flex-none">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Vui lòng nhập tên"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số ghế
              </label>
              <input
                type="text"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập số ghế"
                value={formData.number}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <button
          className="bg-white text-black rounded-md py-2 px-5"
          onClick={handleStartSelecting}
        >
          Start Selecting
        </button>
      </div>
    </div>
  );
};

export default FormThongTin;
