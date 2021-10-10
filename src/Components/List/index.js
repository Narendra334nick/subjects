import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SubjectIcon from '@mui/icons-material/Subject';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import { Box, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DialogBox from '../DialogBox/index';
import InputField from '../InputField/index';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { SpeakerNotes } from '@mui/icons-material';

const useStayles = makeStyles((theme) => ({
  pointer: {
    cursor: 'pointer',
  },
}));

export default function NestedList(props) {
  const classes = useStayles();
  const { arr, setSubjects, topics, setTopic , setNotesId } = props;
  const [topicName, setTopicName] = React.useState();
  const [id, setId] = React.useState();

  //state && functions for dialogBox
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (index) => {
    let newArr = [...arr];
    newArr[index].flag = !newArr[index].flag;
    setSubjects(newArr);
  };

  const getTopics = () => {
    console.log('get topics');
  };

  const deleteSubject = (index) => {
    let newArr = [...arr];
    newArr.splice(index, 1);
    setSubjects(newArr);
  };

  const addTopics = (Id) => {
    console.log('add topics', Id);
    handleClickOpen(Id);
    setId(Id);
  };

  const handleSubmit = () => {
    if (topicName) {
      let newTopic = [...topics];
      let Id = Date.now();
      newTopic.push({
        Id: Id,
        ParentId: id,
        Name: topicName,
      });
      setTopic(newTopic);
      handleClose();
    } else {
      console.log('Enter Topics Name');
    }
  };

  const getListOfTopic = (id) => {
    const filterArray = topics.filter((item) => item.ParentId === id);
    return filterArray ? filterArray : [];
  };
  const seeNotes=(id)=>{
    setNotesId(id)
  }
  return (
    <Box>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Subjects
          </ListSubheader>
        }
      >
        {arr &&
          arr.map((item, index) => {
            return (
              <>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <ListItemButton
                    key={item.Id}
                    onClick={() => handleClick(index)}
                  >
                    <ListItemIcon>
                      <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.Name} />
                    {item.flag ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Tooltip title="Add Topics">
                    <AddIcon
                      className={classes.pointer}
                      onClick={() => addTopics(item.Id)}
                    />
                  </Tooltip>

                  <HighlightOffIcon
                    onClick={() => deleteSubject(index)}
                    className={classes.pointer}
                  />
                </Box>
                <Collapse in={item.flag} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {getListOfTopic(item.Id).map((el) => {
                      return (
                        <ListItemButton sx={{ pl: 4 }} key={el.Id}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={el.Name} />
                          <Tooltip title="See Notes" onClick={()=>seeNotes(el.Id)}>
                            <ListItemIcon>
                              <VisibilityIcon />
                            </ListItemIcon>
                          </Tooltip>
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          })}
      </List>
      <DialogBox
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title="Add Topics To Your Subject"
        cancelButtonTitle="Cancel"
        submitButtonTitle="Add Topic"
        handleSubmit={handleSubmit}
      >
        <InputField
          name="topics"
          label="Topics Name"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          variant="standard"
        />
      </DialogBox>
    </Box>
  );
}
