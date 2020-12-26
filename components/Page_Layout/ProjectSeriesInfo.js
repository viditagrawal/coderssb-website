import React, {Component} from "react";
import "../../css/index.css";
import Faq from "react-faq-component";

export default function ProjectSeriesPage() {
    const data = {
        title: <h2 className="h2">Frequently Asked Questions</h2>,
        rows: [
            {
                title: <h3 className="paragraph-text">Lorem ipsum dolor sit amet</h3>,
                content: <p className="paragraph-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.
                </p>
                // title: "Lorem ipsum dolor sit amet,",
                // content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                // ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                // In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                // Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: <h3 className="paragraph-text">Lorem ipsum dolor sit amet</h3>,
                content: <p className="paragraph-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.
                </p>
                // title: "Nunc maximus, magna at ultricies elementum",
                // content:
                //     "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: <h3 className="paragraph-text">Lorem ipsum dolor sit amet</h3>,
                content: <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.
                </p>
                // title: "Curabitur laoreet, mauris vel blandit fringilla",
                // content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                // Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                // Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                // Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: <h3 className="paragraph-text">Lorem ipsum dolor sit amet</h3>,
                content: <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.
                </p>
                // title: "What is the package version",
                // content: <p>current version is 1.2.1</p>,
            },
        ],
    };
    
    const styles = {
        color: "#028490",
        tableStyle: {
            align: "center",
            margin: "20px",
            padding: "20px"
        },
        text: {
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Quicksand",
            fontSize: "15px"
        },
        faq: {
            titleTextColor: "black",
            rowTitleColor: "black",
            rowContentColor: 'grey',
            fontFamily: "'Quicksand', sansSerif"
        }
    }

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div class={styles.tableStyle}>
            <h1 class="h1">Winter 2021 Project Series</h1>
            <p className="paragraph-text">
                In this project series you will work with a team of up to 4 to create a full 
                 stack web application using React, the industry standard for building user interfaces.
                 At the end of the quarter, your team will participate in our showcase where you 
                 will be able to display your final product to a panel of judges. All skill levels 
                 are welcome. Stay tuned for more information on our panel and exciting prizes! 
                Register your team <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeMtcyr95cKYof14ZbrExpPy1HDbJ_MgHqxeaDc0GXC8dH73w/viewform"
                    target="_blank"
                    className="link"
                >here</a> in advance.
            </p>
            <p className="paragraph-text">
                Throughout the quarter, we will have 7 events from week 2-9 (with a gap week in week 8) 
                 on Thursday @ 7-8:30PM. Each meeting will consist of a 20-40 minute workshop and the 
                 remaining time will be used for checking in with your project mentor as well as an open 
                 space to work and ask questions. These meetings will be conducted using both zoom and 
                 discord. To remain qualified to present in our showcase, your team can only miss two events.
            </p>
            <br></br>

            <br></br>
            <div>
                <video id="animated-schedule-winter-project-series" width="102%" margin="5px" autoPlay loop muted>
                    <source src="./ProjectSeries/scheduleAnimated.mp4" type="video/mp4"/>
                    Your browser does not support this video format.
                </video>
            </div>
            {/* <h2 class="h2">Schedule</h2> */}
            <br></br>
            <table syle={styles.tableStyle}>
                <tr>
                    <td>
                        <img
                            src="ProjectSeries/promo.png"
                            alt="Introducting Coders SB's project series."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop1.png"
                            alt="Workshop1: Creating and hosting a React application."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop2.png"
                            alt="Workshop2: React fundamentals."
                            className="imgHoverWithShadow"
                        />
                    </td>
                </tr>
   
                <tr>
                    <td>
                        <p className="projectSeriesText">Introducing our <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfjcJ4mlNq9kBvOX6krGW6_RQdDTcdO8hI3twwcT2FeP0SdXA/viewform?gxids=7628"
                            target="_blank"
                            className="projectSeriesLink">project series</a>!</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 1 | slideshow | video recording | code</p> 
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 2 | slideshow | video recording | code</p>
                    </td>                    
                </tr>

                <tr>
                    <td>
                        <img
                            src="ProjectSeries/workshop3.png"
                            alt="Workshop3: Google OAuth Sign In."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/midpointShowcase.png"
                            alt="Midpoint Showcase."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop4.png"
                            alt="Workshop 4: Creating and hosting a React application."
                            className="imgHoverWithShadow"
                        />
                    </td>
                </tr> 

                <tr>
                    <td>
                        <p className="projectSeriesText">workshop 3 | slideshow | video recording | code</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">Midpoint Showcase</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 4 | slideshow | video recording | code</p>
                    </td>                    
                </tr>

                <tr>                  
                    <td>
                        <img
                            src="ProjectSeries/workshop5.png"
                            alt="Workshop5: connect to database."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workWeek.png"
                            alt="There are no workshops this week. Use this time to finsih up your Website."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/finalShowcase.png"
                            alt="Final Project Showcase!"
                            className="imgHoverWithShadow"
                        />
                    </td>
                </tr>

                <tr>
                    <td>
                        <p className="projectSeriesText">workshop 5 | slideshow | video recording | code</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">Work Week</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">Project Showcase</p>
                    </td>                 
                </tr>
            </table>               
            <h2 class="h2">Resources</h2>
            <div className="w3-row" id="project-series-resources">
                <div className="w3-col m6 s2 w3-padding-large">
                <video id="animated-resources-winter-project-series" width="100%" className="resources" autoPlay loop muted>
                    <source src="./ProjectSeries/resources.mp4" type="video/mp4"/>
                    Your browser does not support this video format.
                </video>
                </div>
                <div className="w3-col m6 s2 w3-padding-large">
                    <span
                        className="resources-text">Learn the fundamentals of React <a className="resources-text-link"href=
                        "https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/"
                        target="_blank"
                        > here.</a>
                    </span>
                    <p className="resources-text">Watch a video tutorial of React <a className="resources-text-link"href=
                        "https://www.youtube.com/watch?v=Ke90Tje7VS0&amp;t=32s&amp;ab_channel=ProgrammingwithMosh"
                        target="_blank"
                        > here.</a>
                    </p>  
                </div>
            </div>

            {/* <div className="w3-container">
                <div className="w3-col w3-padding" class="col">
                    <img
                        src="ProjectSeries/promo.png"
                        alt="Introducting Coders SB's project series."
                        className="imgHoverWithShadow"
                    />
                </div>
                <div className="w3-col w3-padding" class="col">
                    <img
                        src="ProjectSeries/promo.png"
                        alt="Introducting Coders SB's project series."
                        className="imgHoverWithShadow"
                    />                    
                </div>
                <div className="w3-col w3-padding" class="col">
                    <img
                        src="ProjectSeries/promo.png"
                        alt="Introducting Coders SB's project series."
                        className="imgHoverWithShadow"
                    />                    
                </div>
            </div> */}
            {/* <FAQ /> */}
            <div>
                <br></br>
                <Faq data={data} styles={styles.faq} config={config} />
            </div>
        </div>
    );
}
