import React from "react";
import{
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonLabel,
} from "@ionic/react";

import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculate";
import { LineChart, Line } from 'recharts';

function formatDate(ISOString) {
    return dayjs(ISOString).format('D MMM YYYY');
}

function BiorhythmCard({ targetDate, birthDate }){
    const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
    return(
        <IonCard className='ion-text-center'>
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical: {physical.toFixed(4)}</p>
                <p>Emotional: {emotional.toFixed(4)}</p>
                <p>Intellectual: {intellectual.toFixed(4)}</p>
                <IonLabel>Date of Birth: {formatDate(birthDate)}</IonLabel>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;