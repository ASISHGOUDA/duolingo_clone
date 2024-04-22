import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
      <SignUpButton 
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                <Button size="lg" variant="ghost" className="w-full">
                  <Image 
                  src="/hr.svg"
                  alt="croatian"
                  height={32}
                  width={40}
                  className="mr-4 rounded-md"
                  />
                  CROATIAN
              </Button>
      </SignUpButton>
      
      <SignUpButton 
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                  <Button size="lg" variant="ghost" className="w-full">
        <Image 
        src="/es.svg"
        alt="Spanish"
        height={32}
        width={40}
        className="mr-4 rounded-md"
        />
        SPANISH
                  </Button>
      </SignUpButton>
      
      <SignUpButton 
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                <Button size="lg" variant="ghost" className="w-full">
                <Image 
                src="/fr.svg"
                alt="France"
                height={32}
                width={40}
                className="mr-4 rounded-md"
                />
                FRENCH
                </Button>
      </SignUpButton>

      <SignUpButton 
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                  <Button size="lg" variant="ghost" className="w-full">
        <Image 
        src="/it.svg"
        alt="Italy"
        height={32}
        width={40}
        className="mr-4 rounded-md"
        />
        ITALIAN
                  </Button>
      </SignUpButton>
      
      <SignUpButton 
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn">
                  <Button size="lg" variant="ghost" className="w-full">
        <Image 
        src="/jp.svg"
        alt="Japan"
        height={32}
        width={40}
        className="mr-4 rounded-md"
        />
        JAPANESE
                  </Button>
      </SignUpButton>
      
      </div>
    </footer>
  );
};

