import React from 'react';
import Heading from 'components/change/Heading';
import { Link } from 'react-router';
import PreFooter from 'components/change/PreFooter';
import Footer from 'components/Footer';

export default class About extends React.Component {
  render() {
    return (
      <div>
      <div className="vh80">
      <section className="sep-bottom-2x">
        <div className="container">
          <div className="row">
          <Heading heading={'ABOUT'} subheading={'A simple app to share collections with people'}/>
            <div className="col-md-6 col-md-push-6">
              <div><img src="/assets/aboutimage.jpg" alt="aboutimage" className="img-responsive mhthree"/></div>
            </div>
            <div className="col-md-6 col-md-pull-6">
              <div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pulvinar nisl enim, eget dignissim felis posuere in. Ut suscipit
                  et mi facilisis posuere. Nulla iaculis placerat dui in rutrum.
                  Nulla commodo eros metus. Sed tincidunt augue ipsum, et sodales
                  odio egestas a. Fusce id pulvinar sem. Maecenas vitae facilisis
                  nulla. Morbi semper lobortis eros ut sagittis.
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pulvinar nisl enim, eget dignissim felis posuere in. Ut suscipit
                  et mi facilisis posuere. Nulla iaculis
                </p><Link to="/" className="btn btn-primary">Make a collection here</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <PreFooter/>
      <Footer />
      </div>
    );
  }
}
