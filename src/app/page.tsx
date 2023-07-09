import Box from "@/components/Box";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <Box className="h-full bg-opacity-5 overflow-hidden">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-semibold text-2xl">Welcome back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/Images/liked.png" name="Liked Songs" href="/liked" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl text-white">Newest Songs</h1>
        </div>
        <div>List of songs</div>
      </div>
    </Box>
  );
}
