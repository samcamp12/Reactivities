import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import axios from 'axios';

function App() {

  const [activities, setActivities] = React.useState([]);
  
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Reactivities"/>
      <List>
        {activities.map<JSX.Element>((activity: any) => {
          return (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>)
        })}
      </List>
    </div>
  );
}

export default App;
