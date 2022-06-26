import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../user-management/user';

export class UserData implements InMemoryDbService {
  createDb() {
    return {
      users: [
        {
          id: 1,
          email: 'manahil1054@gmail.com',
          password: 'ddfslksad',
          userName: 'Manahil Ameer',
        },
        {
          id: 2,
          email: 'masad4@gmail.com',
          password: 'djfdfas',
          userName: 'Muhammad Asad',
        },
        {
          id: 3,
          email: 'hamza5@gmail.com',
          password: 'sjdkdhakhd',
          userName: 'Hamza Aqeel',
        },
        {
          id: 4,
          email: 'taahir54@gmail.com',
          password: 'sljhisgsdd',
          userName: 'Taahir',
        },
        {
          id: 5,
          email: 'shahid14@gmail.com',
          password: 'qqwqncxal',
          userName: 'Shahid',
        },
        {
          id: 6,
          email: 'hanif14@gmail.com',
          password: 'qqwqncxal',
          userName: 'Hanif',
        },
      ],
    };
  }

  // createDb(): { users: User[]} {
  //   const users: User[] = [
  //
  //   ];
  //   return { users };
  // }
}
