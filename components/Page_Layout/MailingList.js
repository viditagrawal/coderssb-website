import { useState } from "react";
import { useMailChimpForm } from "use-mailchimp-form";

const useFormFields = initialState => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
};

export default function MailingList() {
  const url = "YOUR_SUBSCRIBE_URL";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const { status, message, handleSubmit } = useMailChimpForm(url);
  const [params, handleFieldChange] = useFormFields({
    EMAIL: ""
  });
  return (
    <div className="w3-container w3-padding-64" id="contact">
      <h1>Join Our Mailing List</h1>
      <br />
      <form onSubmit={event => handleSubmit(event, params)}>
        <input
          className="w3-input w3-padding-16"
          id="EMAIL"
          autoFocus
          type="email"
          value={params.EMAIL}
          onChange={handleFieldChange}
        />
        <button>submit</button>
      </form>
      {status.loading && message}
      {status.error && message}
      {status.success && message}
    </div>
  );
}
