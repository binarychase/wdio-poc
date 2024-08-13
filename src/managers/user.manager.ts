import users from '../resourses/users/users-uat1.json' with {type: "json"};
import { User } from '../types/user.ts'

export class UserManager {
    private users: User[];

    constructor() {
        this.users = users;
    }

    public getFirstUser(): User {
        if (this.users.length === 0) {
            throw new Error('No users available');
        }
        return this.users[0];
    }
}
