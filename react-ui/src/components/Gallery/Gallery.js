import React, { Component } from 'react';
import _debounce from 'lodash.debounce';
import Skeleton from 'react-loading-skeleton';
import Search from "./components/Search";
import Card from './components/Card';
import GalleryWrapper from './styles/Gallery';


class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  fetchThumbnails = _debounce(async (searchString) => {
    if (!searchString) { return; }

    this.setState({ cards: void 0 });

    fetch(`images?tags=${searchString}`)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const entries = data.querySelectorAll('entry');
  
        const cards = Array.from(entries).map(element => {
          const author = element.querySelector('author > name').innerHTML;

          // Image Links
           const links = Array.from(element.querySelectorAll('link'));
           const imageLink = links.find(link => link.attributes.type.value === 'image/jpeg');
           const link = imageLink.attributes.href.value;

           const dateTaken = element.querySelector('date_taken').innerHTML;

           // Tags
           const categories = Array.from(element.querySelectorAll('category'));
           const tags = categories.map(category => category.attributes.term.value);

           return {
             author,
             link,
             dateTaken,
             tags
           };
        });

        this.setState({ cards });
        })
        .catch(() => { window.alert("Something went wrong!"); });

  }, 500);

  render() {
    const { cards } = this.state;

    return (
      <GalleryWrapper>
        <Search onSearchChange={this.fetchThumbnails}/>
        {
          cards
          ? (
          <div className="card-grid">
            {cards.map(card => <Card key={card.link} {...card} />)}
          </div>
          )
          : <Skeleton height={1200} />
        }
      </GalleryWrapper>
    );
  }
}

export default Gallery;