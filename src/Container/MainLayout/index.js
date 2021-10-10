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

export default function Index(props) {
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
        <AddSubject
          subjects={subjects}
          setSubjects={setSubjects}
          topics={topics}
          setTopic={setTopic}
          notes={notes}
          setNotes={setNotes}
        />
        {/* constains a list of subjects,topics,notes */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Subjects
              arr={subjects}
              setSubjects={setSubjects}
              topics={topics}
              setTopic={setTopic}
              notes={notes}
              setNotes={setNotes}
              setNotesId={setNotesId}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Notes 
              notes={notes}
              setNotes={setNotes}
              notesId={notesId}
              setNotesId={setNotesId}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
