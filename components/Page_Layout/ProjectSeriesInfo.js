import React, {Component} from "react";
import "../../css/index.css";
import Faq from "react-faq-component";

export default function ProjectSeriesPage() {
    const data = {
        title: <h2 className="h2">Frequently Asked Questions</h2>,
        rows: [
            {
                title: <h3 className="paragraph-text">Do I have to know how to code to participte?</h3>,
                content: <p className="paragraph-text">
                Nope. This series is beginner friendly. We'll teach you everything you need
                 to know about building a website. All skill levels are welcome!
                </p>
            },
            {
                title: <h3 className="paragraph-text">How many team members can I have?</h3>,
                content: <p className="paragraph-text">
                Ideally, a team will be componsed of 3-4 students. However, you can work solo or with a partner if you'd like.
                 The maximum number of students allowed in a team is 4. If you have any questions/concerns about your team, feel free to reach
                 out to us via email at coderssb@gmail.com.
                </p>
            },
            {
                title: <h3 className="paragraph-text">How can I ensure that I am eligible to participate in the showcase?</h3>,
                content: <p className="paragraph-text">
                We would like for you to attend all of our workshops, but we understand that might not be possible. You
                 can only miss 2 workshops to remain qualified for the final showcase. Attending the weekly workshops and check-in is super important because
                 it'll help you stay on track for your project. 
                </p>
            },
            {
                title: <h3 className="paragraph-text">Will the workshops be recorded and will we have access to the presentations?</h3>,
                content: <p className="paragraph-text">
                Yes! Everything will be posted on this webpage- just click on the links and you will be able to 
                 access all workshops and recordings. The schedule for the project series is at the top of the page and will be
                 updated weekly so you can easily see which week of the project series we are on.
                </p>
            },
            {
                title: <h3 className="paragraph-text">I don't have a team- what should I do?</h3>,
                content: <p className="paragraph-text">
                No worries, we'll help you find one. More details about team formation are coming up soon!
                </p>
            },
            {
                title: <h3 className="paragraph-text">Who do I contact if I have any questions?</h3>,
                content: <p className="paragraph-text">
                You can ask questions in our Discord or email us at coderssb@gmail.com. We're always happy to help and we will get back
                 to you ask soon as we can.
                </p>
            }
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
        animate: true,
        tabFocus: true
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
            {/* <p className="projectSeriesText">workshop  | <a href="" target="_blank" className="projectSeriesLink">slideshow</a> | <a href="" target="_blank" className="projectSeriesLink">video recording</a> | <a href="" target="_blank" className="projectSeriesLink">code</a></p> */}
            <table syle={styles.tableStyle}>
                <tr>
                    <td>
                        <img
                            src="ProjectSeries/promo-c.png"
                            alt="Introducting Coders SB's project series."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop1-c.png"
                            alt="Workshop1: Creating and hosting a React application."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop2-c.png"
                            alt="Workshop2: React fundamentals."
                            className="imgHoverWithShadow"
                        />
                    </td>
                </tr>
   
                <tr>
                    <td>

                        <p className="projectSeriesText">Introducing our project series!</p>
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 1 | <a href="https://docs.google.com/presentation/d/1GsmxRTXGTIGrjZfVEkURXkTK-hpjqNcMo7WNc80XEpE/edit?usp=sharing" target="_blank" className="projectSeriesLink">slideshow</a> | <a href="https://drive.google.com/file/d/1pH89Ygi6MfW35hkbl4uxBrjzmHXv8S7Z/view?usp=sharing" target="_blank" className="projectSeriesLink">video recording</a> | <a href="https://github.com/pkuang5/workshop-w21-project-series/tree/hosting-feature" target="_blank" className="projectSeriesLink">code</a></p> 
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 2 | <a href="https://docs.google.com/presentation/d/1mGx069RZoCcsyJ4bufxhIwZs8aSnYALJDMjQUrhIoaM/edit?usp=sharing" target="_blank" className="projectSeriesLink">slideshow</a> | <a href="https://drive.google.com/file/d/1xglr4bTv6LF-BOt-aq0iFKNtLhx8UCvu/view?usp=sharing" target="_blank" className="projectSeriesLink">video recording</a> | <a href="https://github.com/pkuang5/workshop-w21-project-series/tree/workshop2" target="_blank" className="projectSeriesLink">code</a></p>
                    </td>                    
                </tr>

                <tr>
                    <td>
                        <img
                            src="ProjectSeries/workshop3-c.png"
                            alt="Workshop3: Google OAuth Sign In."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/midpointShowcase-c.png"
                            alt="Midpoint Showcase."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workshop4-c.png"
                            alt="Workshop 4: Creating and hosting a React application."
                            className="imgHoverWithShadow"
                        />
                    </td>
                </tr> 

                <tr>
                    <td>
                    <p className="projectSeriesText">workshop 3 | <a href="https://docs.google.com/presentation/d/1JP8JMJbuSHPBRdcEzaClZ8bVLzQTm4ixvHWbpqeGkvs/edit?usp=sharing" target="_blank" className="projectSeriesLink">slideshow</a> | <a href="https://drive.google.com/file/d/17_n1k2a7jOmStVXfrOoMIgkU_40Qn2YK/view?usp=sharing" target="_blank" className="projectSeriesLink">video recording</a> | <a href="https://github.com/pkuang5/workshop-w21-project-series/tree/workshop3" target="_blank" className="projectSeriesLink">code</a></p>
                    </td>
                    <td>
                        <p className="projectSeriesText">Midpoint Showcase | <a href="https://docs.google.com/presentation/d/1QfurwKYRUNBxYERKpwSE1qEpbeatfMZojT2AaGNLTjg/edit?usp=sharing" target="_blank" className="projectSeriesLink" >slideshow</a> | <a href="https://drive.google.com/file/d/1WPOVSDjPGUVRwqNKTWOXabDEGhzAmdvR/view?usp=sharing" target="_blank" className="projectSeriesLink">video recording</a></p>
                    </td>
                    <td>
                        <p className="projectSeriesText">workshop 4 | <a href="https://docs.google.com/presentation/d/19lfndTU2xSnVun5Y9m78WN9Bgu-VOU4r0cowCzNToZM/edit?usp=sharing" target="_blank" className="projectSeriesLink">slideshow</a> | <a href="" target="_blank" className="projectSeriesLink">video recording</a> | code</p>
                    </td>                    
                </tr>

                <tr>                  
                    <td>
                        <img
                            src="ProjectSeries/workshop5-c.png"
                            alt="Workshop5: connect to database."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/workWeek-c.png"
                            alt="There are no workshops this week. Use this time to finish up your Website."
                            className="imgHoverWithShadow"
                        />
                    </td>
                    <td>
                        <img
                            src="ProjectSeries/finalShowcase-c.png"
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
                        className="resources-text"><a className="resources-text-link"href=
                        "https://drive.google.com/drive/folders/1vKSjbAbvDCfa2u7W0LTWgx4V7JVGpf_N?usp=sharing"
                        target="_blank"
                        > Folder with all our resources.</a>
                    </span>
                    <p
                        className="resources-text">Learn how to set up your GitHub repo <a className="resources-text-link"href=
                        "https://docs.google.com/document/d/1q-W8fQjpR2KVEb-9XT09cXJGcGKDkB216yfzTafJ4dA/edit?usp=sharing"
                        target="_blank"
                        > here.</a>
                    </p>
                    <p
                        className="resources-text">Learn how to set up your React app <a className="resources-text-link"href=
                        "https://docs.google.com/document/d/15b8BNC9B8EbqUkhkB2pEgw-rdFdqVmXC0Hcfh5cNQFE/edit?usp=sharing"
                        target="_blank"
                        > here.</a>
                    </p>                    
                    <p
                        className="resources-text">Learn the fundamentals of React <a className="resources-text-link"href=
                        "https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/"
                        target="_blank"
                        > here.</a>
                    </p>
                    <p className="resources-text">Watch a video tutorial of React <a className="resources-text-link"href=
                        "https://www.youtube.com/watch?v=Ke90Tje7VS0&amp;t=32s&amp;ab_channel=ProgrammingwithMosh"
                        target="_blank"
                        > here.</a>
                    </p> 
                    <span
                        className="resources-text">Create a navbar using React router <a className="resources-text-link"href=
                        "https://www.youtube.com/watch?v=Law7wfdg_ls&amp;t=858s&amp;ab_channel=DevEd"
                        target="_blank"
                        > here.</a>
                    </span> 
                    <p
                        className="resources-text">Learn how to host your website in Firebase <a className="resources-text-link"href=
                        "https://docs.google.com/document/d/1uGQxP5FYOe4NfP9nLwNEFAkvUh76P-ccARDO_ephhoE/edit?usp=sharing"
                        target="_blank"
                        > here.</a>
                    </p>
                </div>
            </div>

            <div>
                <br></br>
                <Faq data={data} styles={styles.faq} config={config} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <video id="animated-happy-coding-winter-project-series" width="102%" margin="5px" autoPlay loop muted>
                    <source src="./ProjectSeries/happyCoding.mp4" type="video/mp4"/>
                    Your browser does not support this video format.
                </video>
            </div>
        </div>
    );
}
