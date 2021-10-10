import React from 'react';
import { Box, Button } from '@mui/material';
import InputField from '../../Components/InputField/index';

export default function Index(props) {
  const { subjects, setSubjects } = props;
  const [subjectName, setSubjectName] = React.useState();
  const handleAdd = () => {
    if (subjectName) {
      let arr = [...subjects];
      let id = Date.now();
      arr.push({
        Id: id,
        Name: subjectName,
        flag:false
      });
      console.log("arr",arr);
			setSubjects(arr)
    } else {
      console.log('Enter Subject Name');
    }
  };

  return (
    <Box>
      <InputField
        name="subject"
        label="Subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        variant="standard"
      />
      <Button variant="contained" onClick={handleAdd}>
        Add Subject
      </Button>
    </Box>
  );
}
