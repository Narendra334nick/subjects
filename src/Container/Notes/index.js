import React from 'react';
import { Box, Tooltip } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import DialogBox from '../../Components/DialogBox/index';
import InputField from '../../Components/InputField/index';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { connect } from 'react-redux';
import { addNote } from '../../Utils/Redux/Notes/notesAction';

const useStayles = makeStyles((theme) => ({
  pointer: {
    cursor: 'pointer',
  },
}));

function Index(props) {
  const classes = useStayles();
  const { notesId, notes, addNotes } = props;
  const [note, setNote] = React.useState([]);
  const [noteName, setNoteName] = React.useState();
  const [id, setId] = React.useState();
  React.useEffect(() => {
    if (notesId && notes) {
      const filterNotes = notes.filter((item) => item.ParentId === notesId);
      if (filterNotes) {
        setNote(filterNotes);
      } else {
        setNote([]);
      }
    }
  }, [notesId,notes]);

  //state && functions for dialogBox
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const AddNotes = (id) => {
    console.log('notes id', id);
    if (id) {
      handleClickOpen();
      setId(id);
    }
  };

  const handleSubmit = () => {
    console.log("handle submit");
    if (noteName) {
      let newNotes = [...notes];
      let Id = Date.now();
      newNotes.push({
        Id: Id,
        ParentId: id,
        Name: noteName,
      });
      console.log("newNotes",newNotes);
      addNotes(newNotes);
      handleClose();
    } else {
      console.log('Enter Topics Name');
    }
  };

  const deleteNote = (id) => {
    let newNotes = notes.filter(item=>item.Id !==id);
    addNotes(newNotes);
  };

  return (
    <Box>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="secondary mailbox folders">
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Notes
              </ListSubheader>
            }
          >
            {notesId && (
              <ListItemIcon
                className={classes.pointer}
                onClick={() => AddNotes(notesId)}
              >
                <Tooltip title="Add Notes">
                  <AddIcon />
                </Tooltip>
              </ListItemIcon>
            )}

            {note &&
              note.map((item, index) => {
                return (
                  <ListItem disablePadding key={item.Id}>
                    <ListItemIcon>
                      <NotesIcon />
                    </ListItemIcon>
                    <ListItemButton>
                      <ListItemText primary={item.Name} />
                    </ListItemButton>
                    <ListItemIcon>
                      <HighlightOffIcon
                        onClick={() => deleteNote(item.Id)}
                        className={classes.pointer}
                      />
                    </ListItemIcon>
                  </ListItem>
                );
              })}
          </List>
        </nav>
      </Box>
      <DialogBox
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title="Add Notes"
        cancelButtonTitle="Cancel"
        submitButtonTitle="Add Note"
        handleSubmit={handleSubmit}
      >
        <InputField
          name="notes"
          label="Note Name"
          value={noteName}
          onChange={(e) => setNoteName(e.target.value)}
          variant="standard"
        />
      </DialogBox>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNotes : (arr) => dispatch(addNote(arr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
