export class User {
    id: number;
    fullname: string;
    username: string;
    email: string;
    password: string;

    private constructor(id: number, fullname: string, username: string, email: string, password: string) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static create(id?: number, fullname?: string, username?: string, email?: string, password?: string) {
        return new User(
            id ? id : -1,
            fullname ? fullname : 'User Name',
            username ? username : 'username',
            email ? email : 'email',
            password ? password : 'password'
        );
    }
}
