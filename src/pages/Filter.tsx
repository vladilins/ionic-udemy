import React, { useContext } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonToggle
} from '@ionic/react';

import CoursesContext from '../data/courses-context';

const Filter: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);

  const courseFilterChangeHandler = (event: CustomEvent) => {
    coursesCtx.changeCourseFilter(event.detail.value, event.detail.checked);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {coursesCtx.courses.map(course => (
            <IonItem key={course.id}>
              <IonLabel>{course.title}</IonLabel>
              <IonToggle
                checked={course.included}
                value={course.id}
                onIonChange={courseFilterChangeHandler}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Filter;
