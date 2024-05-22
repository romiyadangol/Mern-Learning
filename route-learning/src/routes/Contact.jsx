import { Form } from "react-router-dom";
function Contact() {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://images.pexels.com/photos/20195991/pexels-photo-20195991/free-photo-of-hand-holding-puppy-head.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      };
  return (
    <div id="contact">
    <div>
      <img
        key={contact.avatar}
        src={contact.avatar || null}
      />
    </div>

    <div>
      <h1>
        {contact.first || contact.last ? (
          <>
            {contact.first} {contact.last}
          </>
        ) : (
          <i>No Name</i>
        )}{" "}
        <Favorite contact={contact} />
      </h1>

      {contact.twitter && (
        <p>
          <a
            target="_blank"
            href={`https://twitter.com/${contact.twitter}`}
          >
            {contact.twitter}
          </a>
        </p>
      )}

      {contact.notes && <p>{contact.notes}</p>}

      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (
              !confirm(
                "Please confirm you want to delete this record."
              )
            ) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  </div>
);
}

function Favorite({ contact }) {
// yes, this is a `let` for later
let favorite = contact.favorite;
return (
  <Form method="post">
    <button
      name="favorite"
      value={favorite ? "false" : "true"}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      {favorite ? "★" : "☆"}
    </button>
  </Form>
  );
}
export default Contact;