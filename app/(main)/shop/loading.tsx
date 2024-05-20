import { Loader } from "lucide-react";


const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
    </div>
  );
};

export default Loading;