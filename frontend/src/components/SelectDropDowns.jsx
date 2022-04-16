import React, { useState } from 'react';
import Select from 'react-select';
import { Controller } from "react-hook-form";

const styleFlex = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  alignItems: "center"
}

const styleLabel = {
  paddingLeft: "10px",
  paddingRight: "10px",
  display: "inline",
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: 'black',
    backgroundColor: state.isSelected? 'pink': 'white',
    padding: 1,
    width: '100px',
  }),
  container: (provided) => ({
    ...provided,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    minHeight: '1px',
    textAlign: 'left',
  }),
  control: () => ({
    display: 'flex',
    flexDirection: 'row',
    border: '1px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5: 1;
    const transition = 'opacity 300ms';
    const color = 'white';  
    return {...provided, opacity, color, transition};
  }
}

const options = [
  { value: "local", label: "Local" },
  { value: "utc", label: "UTC" },
]

const SelectTimeZone = ({ control }) => {
  const [value, setSelectedOption] = useState(options[0].value);
  return (
    <div style={styleFlex}>
      <p style={styleLabel}><b>{"Timezone: "}</b></p>
      <Controller
          render={({ field: { ref, ...rest } }) => (
              <Select
                getOptionValue={option=>option.value}
                options={options}
                styles={customStyles}
                defaultValue={options[0]}
                onChange={e => setSelectedOption(e.target.value)}
                value={value}
                { ...rest } />
            )}
          control={control}
          name="ddTz"
          defaultValue={options[0]}
       />
    </div>
  );
}
export default SelectTimeZone;
