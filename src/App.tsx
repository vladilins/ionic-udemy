import React from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonMenuToggle,
  IonContent,
} from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { list, trophy, trophyOutline, options } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/theme.css";
import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import AllGoals from "./pages/AllGoals";
import Filter from "./pages/Filter";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Course Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/all-goals">
                <IonIcon slot="start" icon={options}></IonIcon>
                <IonLabel>All Goals</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/filter">
                <IonIcon slot="start" icon={options}></IonIcon>
                <IonLabel>Filter</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route path="/filter" exact>
            <Filter></Filter>
          </Route>
          <Route path="/courses" exact>
            <Courses></Courses>
          </Route>
          <Route path="/courses/:courseId">
            <CourseGoals></CourseGoals>
          </Route>
          <Route path="/all-goals">
            <AllGoals></AllGoals>
          </Route>
          <Redirect to="/courses"></Redirect>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="all-goals" href="/all-goals">
            <IonIcon icon={list}> </IonIcon>
            <IonLabel>All Goals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="course" href="/courses">
            <IonIcon icon={trophyOutline}> </IonIcon>
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
