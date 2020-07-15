import React from "react";
import { IonHeader, IonContent, IonToolbar, IonTitle } from "@ionic/react";

const Courses: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works</h2>
      </IonContent>
    </>
  );
};

export default Courses;
