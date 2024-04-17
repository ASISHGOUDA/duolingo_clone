// import {Button} from "@/components/ui/Button";

import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>
        Default
      </Button>
      <Button variant="Primary">
        Primary
      </Button>
      <Button variant="primaryOutline">
        Primary outline
      </Button>
      <Button variant="secondary">
        Secoundary
      </Button>
      <Button variant="secondaryOutline">
        Secoundary outline
      </Button>
      <Button variant="danger">
        Danger
      </Button>
      <Button variant="dangerOutline">    
        Danger Outline
      </Button>
      <Button variant="super">
        super
      </Button>
      <Button variant="superOutline">    
        super Outline
      </Button>
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="sidebar">
        sidebar
      </Button>
      <Button variant="sidebarOutline">    
        super Outline
      </Button>
      


      
    </div>


  );
};


export default ButtonsPage;