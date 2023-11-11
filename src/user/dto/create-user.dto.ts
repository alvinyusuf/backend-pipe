import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @MinLength(6, { message: 'Username must have atleast 6 characters,' })
  @IsNotEmpty()
  @IsAlphanumeric(null, {
    message: 'Username does not allow than alpa numeric chars.',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid email' })
  email: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message:
      'Password must contain minimum 8 characthers, At least  one upercase letter, one lowercase letter, one number, and special character',
  })
  password: string;
}
