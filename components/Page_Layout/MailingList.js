import React from "react";
import { useState, useEffect } from "react";
import { useMailChimpForm } from "use-mailchimp-form";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlinedIcon from "@material-ui/icons/ErrorOutlined";

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
  const url =
    "https://facebook.us4.list-manage.com/subscribe/post?u=a4c5aea99f7cb23b39e5f7c55&amp;id=33418f55d4";
  const { status, message, handleSubmit } = useMailChimpForm(url);
  const [params, handleFieldChange] = useFormFields({
    EMAIL: ""
  });
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    }
  }));

  const classes = useStyles();

  useEffect(() => {
    var btn = document.getElementById("MailchimpSubmitBtn");
    if (status.loading) {
      btn.innerHTML = "Adding to Mailing List ...";
      btn.disabled = true;
    } else if (status.error) {
      btn.innerHTML = "Submit Another Email";
      btn.disabled = false;
    } else if (status.success) {
      btn.innerHTML = "Submit";
      btn.disabled = false;
    }
  }, [status]);

  return (
    <div className="w3-container w3-padding-64" id="contact">
      <h1>Join Our Mailing List</h1>
      <form onSubmit={event => handleSubmit(event, params)}>
        <p>
          In order to stay up to date with CodersSB's company events, technical
          workshops, and networking events, make sure to join our mailing list!
          You wouldn't want to miss out any important information!
        </p>
        <input
          className="w3-input w3-padding-16"
          id="EMAIL"
          autoFocus
          type="email"
          value={params.EMAIL}
          placeholder="your_email@gmail.com"
          onChange={handleFieldChange}
        />
        <button
          id="MailchimpSubmitBtn"
          className="w3-button w3-light-grey w3-section"
          type="submit"
        >
          Submit
        </button>
        {status.loading && (
          <div className={classes.root}>
            <CircularProgress />
          </div>
        )}
        {status.success && (
          <div className={classes.root}>
            Joined
            <CheckIcon />
          </div>
        )}
        {status.error && (
          <div className={classes.root}>
            Email Already in Mailing List
            <ErrorOutlinedIcon />
          </div>
        )}
      </form>
    </div>
  );
}
