Succesfull login example
{
  "email": "test@example.com",
  "password": "password123"
}

{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJyb2xlIjoidXNlciIsImlhdCI6MTc3Mzg2NDUwNn0.rMuhuh7VyradUiEGfbGvgXezujCT_qAmc4-7kOnPTLo",
    "user": {
        "user_id": 8,
        "full_name": "Roger",
        "email": "test@example.com",
        "role": "user",
        "created_at": "2026-03-18T20:07:30.000Z",
        "password": "$2b$10$69.I9QmbW4efDOUQgTu0nexr70aDgDqy6h3ERg3Yt6YK8RWHfkirq"
    }
}

Example of a protected route accessed with a valid token
When trying to add resources as an admin it creates new record. I used postman with a valid user and this token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJyb2xlIjoiYWRtaW4ifQ.3Hj5fnNZWJgwBpbv-Ggf-T6QdCiJG61tdDQbuAVRAIQ
to make sure I was able to have access

Example of access denied due to missing or incorrect role

{
    "error": "Access denied"
}

when logging in with an account that does not has admin as role, access gets denied 