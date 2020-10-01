import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
// import { render } from "react-dom";

export default function FooterPage() {
  return (
    <Footer
      backgroundColor="rgb(250, 176, 60)"
      columns={[
        {
          icon: (
            <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
          ),
          title: "Footer Title",
          url: "google.com",
          description: "nice",
          openExternal: true
        }
      ]}
      bottom="Coders SB"
    />
  );
}
