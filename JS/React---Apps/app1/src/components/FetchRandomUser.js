import React from 'react';

class FetchRandomUser extends React.Component {

  state = {
    loading: true,
    people: [],
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      people: data.results,
      loading: false,
    })
    // console.log(data.results[0]);
  }

  render() {
    if(this.state.loading) {
      return <div>loading ...</div> 
    }

    if(!this.state.people.length) {
      return <div>did not get a person</div> 
    }

    return(
      <div>
        {this.state.people.map( (person, i) => (
          <div key={`my-key-${i}`}>
            <h3>
              {person.name.first}
              &nbsp;
              {person.name.last}
              &nbsp;
              ({person.name.title})
            </h3>
            <div>
              <img alt="" src={person.picture.large} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FetchRandomUser;
