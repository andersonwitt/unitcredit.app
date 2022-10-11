export type SignInRequest = {
  userName: string;
  password: string;
};

export type SignInResult = {
  isAuthenticated: boolean;
};

const signIn = async ({
  password,
  userName,
}: SignInRequest): Promise<SignInResult> =>
  fetch('http://10.0.0.120:5000/api/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      studentId: userName,
      password,
    }),
  }).then(response => response.json());

export {signIn};
