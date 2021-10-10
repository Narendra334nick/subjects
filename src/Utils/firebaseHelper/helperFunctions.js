import { collection, addDoc, getDocs , doc, setDoc } from 'firebase/firestore';
import FireStoreDb from '../../firebase';


// Create a new post reference with an auto-generated id
const AddDataToList = async (payload) => {
  
  try {
    const docRef = await addDoc(collection(FireStoreDb, 'subjects'),payload);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getData = async () => {
  let subjects = [];
  let querySnapshot = await getDocs(collection(FireStoreDb, 'subjects'));
  //querySnapshot = JSON.parse(querySnapshot);
  querySnapshot.forEach((doc) => {
    subjects.push({
      id:doc.id,
      ...doc.data()
    });
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return subjects;
};

const updateData = async() =>{
  // await setDoc(doc(FireStoreDb, "subjects","Topic"), {
  //   Name: "Alzebra",
  // });
  //const db = firebase.firestore()
  // FireStoreDb.collection('subjects').doc("BxTIHfv9WAr5iAYuXYvs").set({
  //   Name:"physics"
  // })
}

export { AddDataToList, getData , updateData };
