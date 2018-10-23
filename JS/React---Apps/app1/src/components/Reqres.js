import React from "react";

class Reqres extends React.Component {

  state = {
    loading: true,
    users: [],
    currentPage: 1,
    totalPages: 0,
  }

  // async componentDidMount() {
  //   const url = "https://reqres.in/api/users/";
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   this.setState({
  //     users: data.data,
  //     loading: false,
  //   });
  // }

componentDidMount(){
  // For initial data
  this.fetchData();
}

fetchData = () => {
  let fetchUrl = 'https://reqres.in/api/users?page=' + this.state.currentPage;
  fetch(fetchUrl, {
    method: "GET",
    dataType: "JSON",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  })
  .then((resp) => {
    return resp.json()
  }) 
  .then((data) => {
    this.setState({ 
      loading: false,
      users: data.data,
      // currentPage: data.page,
      totalPages: data.total_pages,
    });
    console.log(data);
    console.log(fetchUrl);
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  })
}


  handleNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    })
    this.fetchData();
  };

  handlePrev = () => {
  };

  render() {
    if(this.state.loading) {
      return <div>loading ...</div> 
    }

    if(!this.state.users.length) {
      return <div>did not get a users</div> 
    }

    return(
      <>
        <p>
          <button onClick={this.handlePrev}>prev</button>
          <button onClick={this.handleNext}>next</button>
        </p>
        <p>{this.state.currentPage} / {this.state.totalPages}</p>
        {this.state.users.map((user, i) => (
          <div key={i}>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>
              <img src={user.avatar} alt={user.last_name} />
            </p>
          </div>
        ))}
      </>
    );
  }
}

export default Reqres;
