import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonDatetime,
  IonSelectOption,
  IonSelect
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks';
import Copyright from './components/Copyright';  

function App() {
 // const [storeName, setStoreName] = useLocalStorage('',[]);
  const [counter, setCounter] = useState(0)

  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  const [usersInfo, setUsersInfo] = useState([])

  const toLocalStorage =() =>{ 
    setCounter((counter) => counter+1)
    let newUser ={
      'name': name,
      'birthdate':birthDate,
      'gender': gender,
      'targetDate': targetDate
    }
    localStorage.setItem(`name${counter}`,JSON.stringify(newUser))
    // for version 2
    // setUsersInfo([...usersInfo,newUser ])
    setName('')
    setBirthDate('')
    setGender('')
  }

 // version 2
  // useEffect(() => {
  //   localStorage.setItem('users',JSON.stringify(usersInfo) )
  // }, [usersInfo]);
// retriing the usersInfo list
// console.log(JSON.parse(localStorage.getItem('users')))



  return (
    <IonApp>
      <IonHeader>
        <IonToolbar class='ion-text-center'>
          <IonTitle>Graph for Fun</IonTitle>
        </IonToolbar>
      </IonHeader>
  
        <IonContent className="ion-padding">

          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name} onIonChange={(event) => setName(event.detail.value)}/>
          </IonItem>

          { name &&
          <IonItem>
            <IonLabel position='floating'>Gender:</IonLabel>      
            <IonSelect value={gender} interface="action-sheet" placeholder="Select your Gender" onIonChange={(event) => setGender(event.detail.value)} >
              <IonSelectOption value="male">Male</IonSelectOption>
              <IonSelectOption value="female">Female</IonSelectOption>
            </IonSelect>
          </IonItem>
          }

          { gender &&
          <IonItem>
            <IonLabel position='floating'>Date of Birth:</IonLabel>
            <IonDatetime displayFormat='DD/MM/YYYY' max='2022' value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)}/>
          </IonItem>
          }

          { gender &&
          <IonItem>
            <IonLabel position='floating'>Target Date:</IonLabel>
            <IonDatetime displayFormat='DD/MM/YYYY' max='2050' value={targetDate} onIonChange={(event) => setTargetDate(event.detail.value)}/>
          </IonItem>
          }

          {/* { birthDate &&
          <BiorhythmCard targetDate={targetDate} birthDate={birthDate}/>
          } */}
           <IonButton expand='block' onClick={toLocalStorage}>Submit</IonButton>

        {/* -- This is the Graph Zone -- */}

        
        </IonContent>
      <Copyright/>
    </IonApp>
  );
}
// Toon was here
export default App;