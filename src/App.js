import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
  } from '@ionic/react';
  import React, { useState } from 'react';
  import { useLocalStorage } from './hooks';
  import Copyright from './components/Copyright';  
  
  function App() {
    const [name, setName] = useLocalStorage('key',[]);
    // const [name1, setName1] = useLocalStorage('name_1','');
    // const [name2, setName2] = useLocalStorage('name_2','');
    // const [name3, setName3] = useLocalStorage('name_3','');
    // const [name4, setName4] = useLocalStorage('name_4','');
    // const [name5, setName5] = useLocalStorage('name_5','');
    // const [name6, setName6] = useLocalStorage('name_6','');
    // const [name7, setName7] = useLocalStorage('name_7','');
    // const [name8, setName8] = useLocalStorage('name_8','');
    // const [name9, setName9] = useLocalStorage('name_9','');
    // const [birthDate, setBirthDate] = useLocalStorage('birthDate','');
    // const [gender, setGender] = useLocalStorage('gender','');
    // const [targetDate, setTargetDate] = useState(new Date().toISOString());
    
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
            <IonInput value={name} onIonChange={(event) => setName(name,event.detail.value)}/>
          </IonItem>
{/* 
          { name &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name1} onIonChange={(event) => setName1(event.detail.value)}/>
          </IonItem>
          }

          { name1 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name2} onIonChange={(event) => setName2(event.detail.value)}/>
          </IonItem>
          }

          { name2 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name3} onIonChange={(event) => setName3(event.detail.value)}/>
          </IonItem>
          }

          { name3 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name4} onIonChange={(event) => setName4(event.detail.value)}/>
          </IonItem>
          }

          { name4 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name5} onIonChange={(event) => setName5(event.detail.value)}/>
          </IonItem>
          }

          { name5 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name6} onIonChange={(event) => setName6(event.detail.value)}/>
          </IonItem>
          }

          { name6 &&  
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name7} onIonChange={(event) => setName7(event.detail.value)}/>
          </IonItem>
          }

          { name7 &&
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name8} onIonChange={(event) => setName8(event.detail.value)}/>
          </IonItem>
          }

          { name8 &&          
          <IonItem>
            <IonLabel position='floating'>Name:</IonLabel>          
            <IonInput value={name9} onIonChange={(event) => setName9(event.detail.value)}/>
          </IonItem>
          }

*/}

{/* 
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

          { birthDate &&
          <BiorhythmCard targetDate={targetDate} birthDate={birthDate}/>
          }
          <IonButton expand='block'>Submit</IonButton> */}

        {/* -- This is the Graph Zone -- */}
  
        </IonContent>
        <Copyright/>
      </IonApp>
    );
  }
  
  export default App;
  