import React from 'react';
import FormThongTin from './FormThongTin';
import ChoNgoi from './ChoNgoi';
import ThongTinChoNgoi from './ThongTinChoNgoi';

const DatVeXemPhim = () => {
  return (
    <div className="bg container mx-auto">
      <h1 className="text-4xl text-white py-3 font-bold text-center">
        MOVIE SEAT SELECTION
      </h1>
      <div className="content px-5">
        <FormThongTin />
        <ChoNgoi />
        <ThongTinChoNgoi />
      </div>
    </div>
  );
};

export default DatVeXemPhim;
