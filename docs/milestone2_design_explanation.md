# Milestone 2: Database Schema Design Explanation
 
## Entities I Designed
List the core entities for the system and why they matter.
- Users: Stores people who can log in and make reservations and so the users can be identified
- Resources: Stores reservable items such as rooms and equipment and so the capacity can be tracked
- Reservations: Stores reservations made by users for resources so availability can be tracked
 
## Relationships
Explain how your tables relate.
For both the user and resource table, each reservation is has a foreign key that references to that table so that the reservation is linked with the correct data.

 
## Assumptions
List any assumptions you made about how the reservation system works.
Only registered users can make reservations.
Reservations must have a start time before the end time
Double booking of the same resource at the same time is not prevented by the schema
 
## One Design Decision I Made
Describe one decision you made and why.
Example:
I added an optional field for purposes because the reservation might be a special occasion.