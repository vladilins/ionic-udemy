import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const CourseGoals: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Course Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works</h2>
      </IonContent>
    </>
  );
};

export default CourseGoals;
