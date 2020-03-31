import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact
        name="Crystal Hale"
        avatar="https://randomuser.me/api/portraits/women/91.jpg"
        online={false}
      />
      <Contact
        name="Eli Cole"
        avatar="https://randomuser.me/api/portraits/men/15.jpg"
        online={true}
      />
      <Contact
        name="Yolanda Welch"
        avatar="https://randomuser.me/api/portraits/women/62.jpg"
        online={true}
      />
    </div>
  );
}

export default App;
