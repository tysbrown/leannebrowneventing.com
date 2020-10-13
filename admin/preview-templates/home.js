import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Home = createClass({
    render() {
        const entry = this.props.entry;

        return html`
      <main>
      <h1>${entry.getIn(["data", "title"], null)}</h1>
      <section class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="responsive-header subheadingsize text-center font-weight-bolder greatvibes">Welcome</h1>
            </div>
        </div>
        <div class="row">
            <div class="container-fluid z-depth-3 rounded mx-xl-0 mx-lg-0 mx-md-3 mx-sm-3 mx-3">
                <div class="row">
                    <div class="col-lg-6 p-0">
                        ${this.props.widgetFor("image1")}
                    </div>
                    <div class="col-lg-6 d-flex align-items-center mt-xl-0 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 m-xl-3 m-lg-3 m-md-1 m-sm-1 m-1">
                                    <h3 class="h3-responsive text-uppercase font-weight-bold green-text">ABOUT ME</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 m-xl-3 m-lg-3 m-md-1 m-sm-1 m-1">
                                    ${this.props.widgetFor("body")}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 m-xl-3 m-lg-3 m-md-1 m-sm-1 m-1">
                                    <button type="button" class="btn btn-dark-green" href="about.html">More Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </main>
    `;
    }
});

export default Home;



