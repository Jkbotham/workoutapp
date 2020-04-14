# Workout App

## Different Views for the App

    Landing Page 
        -Start Workout
        -Manage Workout Plans
        -Easy Stats

        Past workouts : In card like squares ( maybe underneath the starting buttons )  this page should centered around the start of a workout not creation of others


    
    Workout Page

    <!-- -Create new workout plans (This would be a collection of workouts) -->
    -Edit workout plans
    -Create New Workout
    -Edit exsisting workouts
    -Add new exercise to database (Maybe?  Should this be added to the workout creation plan?)
        
    Add workout plan   
        Type - (Split, Full Body, Muscle Group, Cardio)
        Length: length program should be followed (Weeks, months, forever)
        name (Unique)
        keywords: (for help finding later)
        Add workouts (previously created or created on the spot?  maybe within the same page you can insert them into the workot plan)
        Ability to delete the workouts from the creation page incase of missclicks or something
                

            Add Workout
                Name 
                Type
                Date
                Exercises[Workout id's and populate them]
                cardio[ Cardio for the day ]

            Add Exercise 
                Type (Resistance, Cardio)
                data
                userId: for later functionality -- Query the server looking for anything w/ that id in it
                Name (unique ?? Does this matter if these are going to be saved for personal use? Functionallity should allow for individuals to save their own plans. AKA more than just me)
                Keywords
                Muscle Group
                Target Rep range ( for being added to workout)

            Users Object
                Current Workout plan : { Name: "", Progress: "", PR's: {Each resistance workout and max} }

            Stats Page ( This will be an icebox item)
                PR's
                Weights overtime ( this could be tough because of the rep ranges changing )
                
            
            Workout (in progress) - 
                Display 

                - Exercise Name -
                Target Reps - Last Weeks Weights

                Sets# -  Weight -- Rep (same as last)? Everyone of these should be user input but how do i make this easier. 

## Workout Layout

Workouts -
    With set exercises that I can walk through and can be made before going to the gym.. Workout "plans"  where you can have a workout plan you are using for a duration -- then you can have that data stored forever.

        IE  -- 16 week workout plan with differnt plans for each week

        Differnt workout types:
            Same each week
            Changes throughout workplan

Workout Plan

    {
        id: 2,
        name: "Whatever",
        exercises: [{
            exerciseName: {
                type: String,
                required: True
            },
            sets: {
                type: number
            },
            reps: {
                type: number
            },
            duration: {
                type: number
            },
            distance: {
                type: number
            }
        }]
    }

 Completed Workout

    {
        id: '1',
        exercise: {
        id: '1',
        name: 'Bench Press'
        },
        sets: [
        {
            duration: '30s',
            reps: 5,
            weight: 80
        }
        ]
    }


  // USER: Just an id and a name contact information.get

// WorkoutPlan:  Name id discription, and an array of workout id's

// Workout:

// Completed Exercise {
// user.id
// Set: id: duration, reps, weight, distance
// Exercises : Just the name an id discript, and maybe links to demonstration

// }

---
## Workout Sample

### Day 1

Exercise | Sets | Reps
--- | --- | ---
Dumbell Squat | 3 | 10
Dumbell Stiff Legged Dead Lift | 3 | 10
Bent Over Dumbbell Row | 3 | 10
Dumbbell Bench Press | 3 | 10
Lateral Raises | 2 | 8
Standing Dumbell Curl | 2 | 8
Laying Dumbbell Extension | 2 | 8

### Day 2

Exercise | Sets | Reps
--- | --- | ---
Dumbbell Lunge | 3 | 10
Dumbbell Hamstring Curl | 3 | 10
Dumbbell Deadlift | 3 | 10
Dumbbell Miliatry Press| 3 | 10
Dumbbell Flys | 2 | 8
Hammer Curl | 2 | 8
Seated Dumbbell Extension | 2 | 8

### Day 3
Exercise | Sets | Reps
--- | --- | ---
Dumbbell Step Up | 3 | 10
Dumbbell Stiff Legged Deadlift | 3 | 10
One Arm Dumbbell Row | 3 | 10
Reverse Grip Dumbbell Press | 3 | 10
Dumbbell Rear Delt Fly | 2 | 8
Zottman Curl | 2 | 8
Close Grip Dumbbell Press | 2 | 8

    -- Chest --
    incline db bench : 4 sets 12/10/10/8
        12: 20
        10: 25
        10: 30
        8: 35

    db Bench : 4 sets 12/10/10/8
        12: 30
        10: 35
        10: 40
        8:  45

    incline db fly : 3 sets 12/12/12
        12: 15 
        12: 15
        12: 15
        
        Comments: Shoulder(Right) Hurt on this one

    -- Tri -- 

    Db Skullcrusher : 3 sets 12/12/12
        12: 15
        12: 15
        12: 15

    Db close grip bench press : 3 sets 8/8/8
        8: 25
        8: 25
        8: 25

    One arm db extension : 3 sets 12/12/12
        12: 10
        12: 10
        12: 10
        

## Day 2 --
    -- Back --

    One Arm Dumbell Row: 5 sets 12,10,10,8,6
        12:
        10:
        10:
        8:
        6:
    
    Bent Over dumbbell Row: 5 sets 12,10,10,8,6
        12:
        10:
        10:
        8:
        6:

    Dumbbell Pullover: 2 sets 12, 10
        12:
        10:

    -- Biceps --
    
    Incline dumbbell Curl: 3 sets 10
        10:
        10:
        10:
    
    Standing Dumbbell Curl:  3 sets 10
        10:
        10:
        10:
    
    Cross Body Hammer Curl:  3 sets 10
        10:
        10:
        10:
