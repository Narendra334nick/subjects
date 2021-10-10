import React from 'react';
import { Box, Button } from '@mui/material';
import InputField from '../../Components/InputField/index';
import { connect } from 'react-redux';
import { addSubject } from '../../Utils/Redux/Subjects/subjectActions';

function Index(props) {
  const { subject,addSubject } = props;
  const [subjectName, setSubjectName] = React.useState();
  const handleAdd = () => {
    if (subjectName) {
      let arr = [...subject];
      let id = Date.now();
      arr.push({
        Id: id,
        Name: subjectName,
        flag:false
      });
      addSubject(arr);
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

const mapStateToProps = (state) => {
  return {
    subject: state.subject.subject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubject : (arr) => dispatch(addSubject(arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
