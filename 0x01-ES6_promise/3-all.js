import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((profile) => createUser().then((user) => {
      console.log(`${profile.body} ${user.firstName} ${user.lastName}`);
    }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
