import { getDatabase, ref, set , onValue } from 'firebase/database';



function writeUserData(name, email) {
	const db = getDatabase();
  set(ref(db, 'subjects/'), {
    username: name,
    email: email,
  });
}



export { writeUserData };
