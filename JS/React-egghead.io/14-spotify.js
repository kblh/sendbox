const rootElement = document.getElementById('root');

class FetchSpotify extends React.Component {

  state = {
    loading: true,
    people: [],
  }

  async componentDidMount() {
    const url = "https://api.spotify.com/v1/playlists/7JLS9yCu9JH2gDJZur70Jx/tracks?fields=items.track.album";
    const accessToken = "BQBgF2uUbHYYKZWBefkP1ClYuKmVdaecOI9uhkNpIqGUBrB3cf83c4VOJTMqXid--ld2tQYclOYW7gtwLzPf05BpCivnyMN1B--09WakV42Gt6n1gL6nQBkhkXGa9x6SUm49PWjKNplA2lw31lqShC4EXflNkSkjsw2C2qiJ9LqWPvzKDazRS5gfcv7G6SpZ4dVN4hd8ZmvO4SQlfJqF";
    // const response = await fetch(url);
    // const data = await response.json();

    await fetch(url, {
      headers: {'Authorization': 'Bearer' + accessToken}
    }).then(
      response => response.json()
    ).then (
      data => console.log(data)
    )

    this.setState({
      // people: data.results,
      loading: false,
    })
  }

  render() {
    if(this.state.loading) {
      return <div>loading ...</div> 
    }

    return(
      <div>
        DATA
      </div>
    )
  }
}


function App() {
  return(
    <div>
      <h1>FetchSpotify</h1>
      <FetchSpotify />
    </div>
  )
}

function renderApp() {
  ReactDOM.render(
    <App />,
    rootElement
  );
}

renderApp();
