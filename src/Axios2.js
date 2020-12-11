import React from "react";
import axios from "axios";
import styles from "./styles";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
      newsTitle: null,
      newsauthor: null,
      description: null,
      sourceName: null,
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-11&sortBy=publishedAt&apiKey=a1b8f3161c344b88be97802eab5af4af"
      )
      .then((response) => {
        this.setState({ totalReactPackages: response.data.totalResults });
        this.setState({ newsTitle: response.data.status });
        this.setState({ articles: response.data.articles });
      });
  }

  render() {
    return (
      <div>
        <header>
          <img class="logo" />
          <h1 className="title">NEWS</h1>
        </header>
        <div className="body">
          Total results: {this.state.totalReactPackages}
        </div>
        <table style={{width:'100%',textAlign:'left',color:'blue'}}>
        <tr>
                      <th style={{width:'10%'}}>Title</th>
                      <th style={{width:'10%'}}>Author</th>
                      <th style={{width:'10%'}}>Description</th>
                      <th style={{width:'10%'}}>Content</th>

                      <th style={{width:'10%'}}>Source Name</th>
                  </tr>
        </table>
        {this.state.articles.map((item) => {
          return (
            <>
              <table style={{ width: "100%", textAlign: "left" }}>
                
                <tr>
                  <td style={{ width: "10%" ,}}> {item.title}</td>
                  <td style={{ width: "10%" }}>{item.author}</td>
                  <td style={{ width: "10%" }}> {item.description}</td>
                  <td style={{ width: "10%" }}> {item.content}</td>

                  <td style={{ width: "10%" }}>{item.source.name}</td>
                </tr>
              </table>
            </>
          );
        })}
      </div>
    );
  }
}

export default News;
