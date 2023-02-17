import React from 'react'
import Input from './Input';

function Form({ bill, setBill, tip, setTip, split, setSplit }) {
  const inputs = [
    {
      label: 'Bill',
      value: bill,
      setValue: setBill,
    },
    {
      label: 'Tip %',
      value: tip,
      setValue: setTip,
    },
    {
      label: 'Split',
      value: split,
      setValue: setSplit,
    },
  ]

  return (
    <form>
      <ul>
        {inputs.map((input) => {
          return (
            <Input
              key={input.label}
              label={input.label}
              value={input.value}
              setValue={input.setValue}
            />
          )
        })}
      </ul>
    </form>
  )
}

export default Form;