# Workout App

## Different Views for the App

    Landing Page 
        -Start Workout
        -Manage Workout Plans
        -Easy Stats

        Past workouts : In card like squares ( maybe underneath the starting buttons )  this page should centered around the start of a workout not creation of others


    
    Workout Page

    -Create new workout plans (This would be a collection of workouts)
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
            Same Each week
            Changes throughout workplan