import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';

import { useForm, Controller } from 'react-hook-form';

import MyRangeDatepicker from './components/MyDatePicker.jsx';
import SelectTimeZone from './components/SelectDropDowns.jsx';

const styleFlex = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  alignItems: "center"
}

function Test({ testname, callback }) {
  const { register, handleSubmit, watch, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div ref={callback} style={styleFlex}>
      <form onSubmit={handleSubmit(onSubmit)} style={styleFlex}>
        <MyRangeDatepicker control={control} />
        <SelectTimeZone control={control} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Test;

const container = ReactDOM.createRoot(document.getElementById('test'));
container.render(<Test name='Testing' />);
