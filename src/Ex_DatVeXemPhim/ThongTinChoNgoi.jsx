import React from 'react';
import { useSelector } from 'react-redux';

const ThongTinChoNgoi = () => {
  const thongTinVe = useSelector(state => state.datVeReducer.thongTinVe);
  return (
    <div className="mt-4 px-4">
      <div className="mt-4">
        <table>
          <thead>
            <tr>
              <th className="title">Name</th>
              <th className="trongTD"></th>
              <th className="title">Number of Seats</th>
              <th className="trongTD"></th>
              <th className="title">Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr className="trong"></tr>
            <tr>
              <td className="showThongTin text-dark">{thongTinVe.name}</td>
              <td className="trongTD"></td>
              <td className="showThongTin text-dark">{thongTinVe.number}</td>
              <td className="trongTD"></td>
              <td className="showThongTin text-dark">{thongTinVe.ghe}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThongTinChoNgoi;
