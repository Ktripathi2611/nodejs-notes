import React from 'react';
import Button from './Button';
import Input from './Input';
import HoverDiv from './HoverDiv';
import Form from './Form';
import ToggleText from './ToggleText';
import Box from './Box';

function App() {
  return (
    <div className="App">
      <Button />
      <Input />
      <HoverDiv />
      <Form />
      <ToggleText />
      <Box backgroundColor="lightblue" width="150px" height="120px" />
      <Box backgroundColor="lightgreen" width="200px" height="80px" />
      <Box />
    </div>
  );
}

export default App;
