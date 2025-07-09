'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push('/'); // redirect to home after sign out
  };

  return (
    <Button onClick={handleSignOut} className='mt-4'>
      Sign Out
    </Button>
  );
};

export default SignOut;
