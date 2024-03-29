Initially the project was made with Firebase, Firestore & Auth, an vanilla javascript. Then
it migrated to Typescript, Suprabase, and added component testing (Soon).

Technologies used:

- Supabase
- React Native with Expo
- Styled components
- Typescript

Things learned so far:

- Typescript migration
- Don't use magic strings, instead use constants
- Firestore and Authentication with Firebase & Firebase Security Rules
- Supabase authentication, database and PostgreSQL & Row Security Policies  
- Custom plpgsql functions in Supabase
- The use of multiple navigations in the app
- Error handling using classes
- React context, custom hooks, react navigation

TODO: 

- [ ] Implement component testing
- [ ] Improve folder and components structure
- [X] Remove magic strings in difficulty
- [ ] Handle waiting screen while getting user
- [X] Handle waiting for database items
- [X] Close panel on user action
- [X] Implement a custom alert using context 
- [X] Add createdAt and completedAt to goals
- [X] Add createdAt to habits
- [X] Delete habits
- [X] Fix goals UI error on empty 
- [X] Put are you sure panel when changing screen when not saved changes
- [X] Handle errors with classes
- [X] Handle errors in Journal and Habits
- [X] Migrate to Typescript
- [X] Migrate to Supabase
- [ ] Use Supabase row policies
- [X] Create the shop view
- [X] User info view
- [X] Finish user info fields in context
- [X] Add exp on finished habit & update level based on exp
- [X] Add panels with user info
- [X] Add more shop items, themes, panels and wallpapers
- [X] Integrate Supabase errors with errors service
- [ ] Add more panels, themes, backgrounds