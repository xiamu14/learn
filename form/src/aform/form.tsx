import React, { useState, ReactNode } from 'react';

interface Props {
  onSubmit: (values: any) => void
  children: ReactNode[]
}

export default function Form(props:Props) {
  const [values, setValues] = useState<Record<string, any>>();
  const {children} = props;

  return <form>
    {
      children.map((item) => {
        return item
      })
    }
  </form>
}
