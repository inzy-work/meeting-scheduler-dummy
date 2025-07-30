

// All routes here


/*

 1- Log all api calls
 2- sanitise user inputs
 3- Use Rate limiter
 4- JWT tokens and refresh
 5- Check/optimize response time




Routes-----------------------


/user/login                 POST
    To login using existing password

/user/register              POST
    Register as a new user

/user/reset-password        POST
    To reset password, get a verification email
/user/                      GET     AUTH
    To fetch user profile info


/meeting/                   GET      AUTH
    Fetch list of meeting


/meeting/schedule/          POST     AUTH
    To schedule meeting by user, check timezone, check availablity, prevent duplicate meeting.

/meeting/:id/reschedule/    POST     AUTH
    To re-schedule meeting by user, check timezone, check availablity, prevent duplicate meeting.


/meeting/:id/cancel/        POST     AUTH
    To cancel meeting by user.

/meeting/:id/invite/        POST     AUTH
    To add invitees to a meeting




* */