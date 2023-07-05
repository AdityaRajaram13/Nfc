import React from 'react';

const Sidebar = () => {
  return (
    <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      {/* Profile */}
      
    </aside>
  );
};

const Header = () => {
  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      {/* Informação */}
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        {/* Texto */}
        <div className="flex flex-col items-end">
          {/* Nome */}
          <div className="text-md font-medium">Unknow Unknow</div>
          {/* Título */}
          <div className="text-sm font-regular">Student</div>
        </div>

        {/* Foto */}
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      {/* Container */}
      <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        {/* Container */}
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <Sidebar />
      <div className="w-full h-full flex flex-col justify-between">
        <Header />
       
      </div>
    </div>
  );
};

export default App;
