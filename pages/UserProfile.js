//Profile page of user who is currently logged in
//Contains "edit profile" functionality
//THIS PAGE IS CURRENTLY BEING USED: NAVIGATE HERE BY LOGGING IN AND CLICKING ON YOUR IMAGE IN THE TOP RIGHT

import UserProfile from "../components/Page_Layout/UserProfile";
import Layout from "../components/Website_Layout/Layout";

export default function UserProfilePage() {
  return (
    <div>
      <Layout setGoogleId={id => setGoogleId(id)}>
        <UserProfile />
      </Layout>
    </div>
  );
}
