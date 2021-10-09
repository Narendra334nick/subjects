import React from 'react';
import { Box , Button } from '@mui/material';
import Header from '../../Components/Header/index';
import FireBaseDb from '../../firebase';
import { writeUserData } from '../../Utils/firebaseHelper/writeData';

export default function Index() {
	console.log("FireBaseDb",FireBaseDb);
	const handleAdd = () =>{
		console.log("add");
		writeUserData("narendra","mini@gamil.com")
	}
  return (
    <Box>
      <Header />
			<Button onClick={handleAdd}>
				Add Something
			</Button>
    </Box>
  );
}
