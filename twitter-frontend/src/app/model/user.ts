export class User {
  id: number;
  name: string;
  gender: string;
  email: string;
  birth: Date;
  password: string;
  avatar: string;

  constructor(name, gender, email, birth, password) {
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.birth = birth;
    this.password = password;
    if (gender === 'm') {
      this.avatar = '../../assets/img/avatar-male.png';
    } else {
      this.avatar = '../../assets/img/avatar-female.png';
    }
  }
}
