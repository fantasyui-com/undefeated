module.exports = {

  meta:{
    workout:   { title:'', icons:[ 'heart', 'user-circle', ] },
    reminders: { title:'Reminder', icons:[ 'exclamation-triangle' ] },
    upgrade:   { title:'Upgrade', icons:[ 'bolt' ] },
  },

  prepare:[
    { text:'Get an Interval Timer and focus on timed sets rather than number of reps.', },
    { text:'Switch from counting reps to timed sets.', },
  ],

  upgrade:[
    { text:'No more lying or sitting. From now on perform standing exercises only.', },
    { text:'Cancel all rest days. Workout 7 days per week.', },
    { text:'Add compound leg work (dance) to your workout.', },
    { text:'Add compound movements that require two or more muscle groups.', },
    { text:'Begin wearing a weight vest throughout the day.', },
    { text:'Begin wearing wrist weights throughout the day.', },
  ],

  reminders:[

    { text:'Pay more attention to your form.', },
    { text:'Pay more attention to range of motion.', },
    { text:'Slow down your reps and increase prolonged stress on muscle.', },
    { text:'Slowly mix-in increased weights into your cardio dance routine.', },
    { text:'Rather than stopping, set weights down for 5 seconds resume.', },

  ],

  workout:[
    { text:'Decrease rest time by {{value}}%.', values:[5,10,15]},
    { text:'Increase set duration {{value}}%.', values:[10,10,20]},
    { text:'Add {{value}} minutes to your overall daily workout routine.', values:[2,3,5,5,10,10,10]},
    { text:'Add {{value}} minutes of treadmill cardio to your daily workout.', values:[2,3,5,10]},
    { text:'Add {{value}} minutes of compound movements that require two or more muscle groups.', values:[2,3,5,10] },
  ],

};
