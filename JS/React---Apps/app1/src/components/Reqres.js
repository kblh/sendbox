import React from "react";
import LoadingImage from '../images/loading.gif';

class Reqres extends React.Component {

  state = {
    loading: true,
    error: false,
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
  console.log("fetching ... currentPage is: " + this.state.currentPage);
  let fetchUrl = 'https://reqres.in/api/users?page=' + this.state.currentPage;

  fetch(fetchUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong ...');
    }
  })
  // .then((response) => {
  //   return response.json()
  // }) 
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
  .catch(error => this.setState({ error, loading: false }));
}

  alertMe = () => { alert('hahaha'); }

  handleNext = () => {
    console.log("current page: " + this.state.currentPage);
    // let nextPage = this.state.currentPage + 1;
    // console.log("next page: " + nextPage);
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    this.fetchData();

    // setTimeout(this.fetchData, 10);

    // this.setState({
    //   currentPage: nextPage
    // })

    // this.fetchData();
    console.log("current page: " + this.state.currentPage);
  };

  

  handlePrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    })
    this.fetchData();
  };

  render() {
    const { loading, error } = this.state;

    if(this.state.loading) {
      return (
        <>
          <h2>Loading ...</h2>
          <p><img src={LoadingImage} alt="loading" /></p>
        </>
      )
    }

    if(this.state.error) {
      return (
        <>
          <h2>!!! E R R O R !!!</h2>
          <p>{error.message}</p>
        </>
      );
    }

    if(!this.state.users.length) {
      return <div>did not get a users</div> 
    }

    return(
      <>
        <p>
          <button onClick={this.handlePrev}>prev</button>
          <button onClick={this.handleNext}>next</button>
          <button onClick={this.fetchData}>fetchData</button>
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
