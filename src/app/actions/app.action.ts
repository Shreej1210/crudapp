export class GetUsers
{
static readonly type='[Users] fetch user data';
}

export class AddUser
{
static readonly type='[User] Add';
constructor(public payload:any)
{}
}
export class UpdateUser
{
static readonly type='[User] Update';
constructor(public payload:any,public id:number,public i :number)
{}
}

export class DeleteUser
{
static readonly type='[User] Delete';
constructor(public id:number)
{}
}

