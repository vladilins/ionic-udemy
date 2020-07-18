import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { list, trophyOutline } from 'ionicons/icons';

import Courses from './Courses';
import AllGoals from './AllGoals';
import CourseGoals from './CourseGoals';

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/courses" to="/courses/all-goals" exact />
        <Route path="/courses/list" exact>
          <Courses />
        </Route>
        <Route path="/courses/all-goals" exact>
          <AllGoals />
        </Route>
        <Route path="/courses/:courseId">
          <CourseGoals />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="all-goals" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All Goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="courses" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
