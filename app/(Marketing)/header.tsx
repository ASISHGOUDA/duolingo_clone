import Image from 'next/image';
import { Loader } from 'lucide-react';
import { 
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';



export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 p-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
        <div className="pt-8 pl-2 pb-7 flex items-center gap-x-3" >
          <Image
            src="/duo_header.svg"
            alt="Mascot"
            width={179}
            height={42}
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 m-10"> {/* Adjust m-4 according to your preference */}
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin'/>
        </ClerkLoading>
      </div>
      <ClerkLoaded>
        <SignedIn>
          <div className='absolute top-[9px] right-[9px] m-2'>
          <UserButton
          afterSignOutUrl='/'
          />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton 
          mode="modal" 
          afterSignInUrl="/learn"
          afterSignUpUrl="/learn"
          >
            <Button size="lg" variant="ghost" className='absolute top-[9px] right-[9px] m-2'>
              Login
            </Button>


          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </header>
  );
};

