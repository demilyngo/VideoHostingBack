export class RegisterForm {
  constructor(options?: RegisterForm) {
    this.name = options?.name ?? "";
    this.email = options?.email ?? "";
    this.login = options?.login ?? "";
    this.password = options?.password ?? "";
  }

  name: string;
  email: string;
  login: string;
  password: string;
}
