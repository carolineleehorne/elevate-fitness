import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import Metrics from '../views/Metrics.vue'
import ExerciseList from '../views/ExerciseList'
import EditExercise from '../views/EditExercise'
import AddExercise from '../views/AddExercise'
import CreateWorkout from '../views/CreateWorkout'
import Workout from '../views/Workout'
import AllWorkoutsViews from '../views/AllWorkoutsViews'
import WorkoutHistory from '../views/WorkoutHistory'
import landingPage from '../views/TestLanding'
import GenerateWorkout from "../views/GenerateWorkout"
import TrainerHome from '../views/TrainerHome'
import Calendar from '../views/Calendar'
import EditWorkout from '../views/EditWorkout'
import ExercisesFromWorkout from '../views/ExercisesFromWorkout'
import WorkoutDetails from '../views/WorkoutDetails'
import MeetTrainers from '../views/MeetTrainers'
import HistoryView from '../views/HistoryView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'landingPage',
      component: landingPage,
      meta: {
        requiresAuth: false
      } 
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/metrics",
      name: "metrics",
      component: Metrics,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/exercises",
      name: "all-exercises",
      component: ExerciseList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/exercise/:exerciseId",
      name: "edit-exercise",
      component: EditExercise,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/exercise/add/try",
      name: "add-exercises",
      component: AddExercise,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/v1/workouts",
      name: "all-workouts",
      component: AllWorkoutsViews,
      meta: {
        requiresAuth: true
      }
    },    
    {
      path: "/workout/:workoutId",
      name: "workout",
      component: Workout,
      meta: {
        requiresAuth: true
      }
    },    
    {
      path: "/workouts/add",
      name: "add-workout",
      component: CreateWorkout,
      meta: {
        requiresAuth: true
      }
    },
    {

     path: "/exercises/workout/:workoutId/generate",
     name: "generate-workout",
     component: GenerateWorkout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/exercises/workout/:workoutId",
      name: "exercise-workout",
      component: ExercisesFromWorkout,
      meta: {
        requiresAuth: true
      }
    },   
    {
      path: "/workout/history",
      name: "history",
      component: WorkoutHistory,
      meta: {
        requiresAuth: true
      }
    },

    {
    path: "/home/trainer",
      name: "trainer-home",
      component: TrainerHome,
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: "/trainer/calendar",
        name: "calendar",
        component: Calendar,
        meta: {
          requiresAuth: true
        }
      },

      {
        path: "/workout/edit/:workoutId",
          name: "edit-workout",
          component: EditWorkout,
          meta: {
            requiresAuth: true
          }
        },
      {
        path: "/workout/details/:workoutId",
        name: "workoutDeta",
        component: WorkoutDetails,
          meta: {
            requiresAuth: true
          }
        },
        {
        path: "/trainers/meet",
        name: "meet-trainers",
        component: MeetTrainers,
        meta: {
          requiresAuth: false
        }
      },
      
      {
        path: "/history/completed",
        name: "Completed",
        component: HistoryView,
          meta: {
            requiresAuth: true
          }
        },
    
    
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    next();
  }
});

export default router;