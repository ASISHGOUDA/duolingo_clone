type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children, }: Props) => {
  return (
    <>
      <main className="pl-[256px] h-full">
        <div className="h-full">
        {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout