import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Header from '../../Components/Header/index';
import FireBaseDb from '../../firebase';
import {
  AddDataToList,
  getData,
  updateData,
} from '../../Utils/firebaseHelper/helperFunctions';
import Subjects from '../Subjects/index';
import AddSubject from '../AddSubject/index';
import Notes from '../Notes/index';
import { connect } from 'react-redux';
import { addSubject } from '../../Utils/Redux/Subjects/subjectActions';

function Index(props) {
  const [subjects, setSubjects] = React.useState([]);
  const [topics, setTopic] = React.useState([]);
  const [notes, setNotes] = React.useState([]);
  const [notesId,setNotesId] = React.useState();
  // React.useEffect(() => {
  //   (async () => {
  //     const subjects = await getData();
  //     setSubjects(subjects);
  //     console.log('subjects', subjects);
  //   })();
  // }, []);

  return (
    <Box>
      <Header />
      <Box>
        <AddSubject/>
        {/* constains a list of subjects,topics,notes */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Subjects
              setNotesId={setNotesId}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Notes 
              notesId={notesId}
              setNotesId={setNotesId}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    subject: state.subject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubject : (arr) => dispatch(addSubject(arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);