Example of a logged request
Wehn starting the server this is the initial code used to show it runs

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

the console log shows the following:
Server running on port 3000

Example of a handled error response

When POST in http://localhost:3000/api/auth/login

Value: 
{
  "email": "test@eample.com",
  "password": "password123"
}

output:
{
    "error": "User not found"
}

Example of a validation error

When POST in http://localhost:3000/api/auth/login

Value: 
{
  "password": "password123"
}

output:
{
  "password": "password123"
}