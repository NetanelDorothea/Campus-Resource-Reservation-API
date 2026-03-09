One example of a request that fails validation
{
  "user_id": 1,
  "resource_id": 5,
  "start_time": "2026-03-10T14:00",
  "end_time": "2026-03-10T13:00"
}

The Date function in the reservation route transforms the start_time and end_time variables in a Object to compare the two times. The end time in this case is before the start time

One example of a handled server error

{
  "user_id": 1,
  "resource_id": 5,
  "start_time": "2026-03-10T13:00",
  "end_time": "2026-03-10T14:00"
}

The error "Cannot add or update a child row: a foreign key constraint fails" occurs. It means that the value that is tried to insert in the child table doesn’t exist in the parent table.

One example of a successful request after validation

{
  "resource_name": "Test",
  "resource_type":"Test"
}

This is all tested with postman.