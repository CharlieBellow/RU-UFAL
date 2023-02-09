
import { SidebarProvider } from '../components/Sidebar/SidebarContext';
import Home from '../pages/Home';

import Sidebar from '../components/Sidebar/Sidebar';

function App () {
  return (
    <SidebarProvider>
      
        <Sidebar>
          
             <Home /> 
           
        </Sidebar>
      
    </SidebarProvider>
  );
}

export default App;