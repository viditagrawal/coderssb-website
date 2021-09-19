import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import "../../redesign/index.css";

export default function FooterPage(props) {
  const FOOTER_ITEM = "footer_item";
  const FOOTER_TITLE = "footer_title";

  return (
    <div id={`#card${props.id}`}>
      <Footer
        maxColumnsPerRow={4}
        backgroundColor="#38618c"
        columns={[
          {
            items: [
              {
                title: <p className={FOOTER_TITLE}>Stay Updated</p>
              },
              {
                icon: <img src="Icons/instagram.png" />,
                title: "Instagram",
                url: "https://www.instagram.com/coders.sb/",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/facebook.png" />,
                title: "Facebook",
                url: "https://www.facebook.com/coderssb",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/discord.png" />,
                title: "Discord",
                url: "https://discord.com/invite/bW69w4QsS6",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/ucsb.png" />,
                title: "Shoreline",
                url:
                  "https://shoreline.ucsb.edu/student_community?club_id=29769",
                openExternal: true,
                className: { FOOTER_ITEM }
              }
            ]
          },
          {
            items: [
              {
                title: <p className={FOOTER_TITLE}>Contact Us</p>
              },
              {
                icon: <img src="Icons/email.png" />,
                title: "Email",
                url:
                  "https://mail.google.com/mail/?view=cm&source=mailto&to=coderssb@gmail.com",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/mailchimp.png" />,
                title: "Mailing List",
                url: "http://eepurl.com/gPudI1",
                openExternal: true,
                className: { FOOTER_ITEM }
              }
            ]
          },
          {
            items: [
              {
                title: <p className={FOOTER_TITLE}>Other CS Orgs</p>
              },
              {
                icon: <img src="Icons/swe.png" />,
                title: "UCSB SWE",
                url: "https://ucsbswe.weebly.com",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/thetatau.png" />,
                title: "Theta Tau",
                url: "https://sbthetatau.herokuapp.com",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/sbhacks.png" />,
                title: "SB Hacks",
                url: "https://sbhacks.com",
                openExternal: true,
                className: { FOOTER_ITEM }
              },
              {
                icon: <img src="Icons/ucsb.png" />,
                title: "Engineering Student Council",
                url: "https://esc.engineering.ucsb.edu",
                openExternal: true,
                className: { FOOTER_ITEM }
              }
            ]
          }
        ]}
      />
    </div>
  );
}
