import {useState} from 'react'
import './MovieForm.css'
import Axios from 'axios'

const MovieForm = () => {
    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState("")
    const [comment, setComment] = useState("")
    console.log(title, poster, comment)

    const submitForm = (e) => {
        e.preventDefault();
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({title, poster, comment})
        };
        const url = "https://post-a-form.herokuapp.com/api/movies";
        fetch(url, config)
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Movie #${res} has been successfully added!`);
            }
          })
          .catch((e) => {
            console.error(e);
            alert("There was an error when adding the Movie.");
          });
      };

    return (
        <div className="FormMovies">
        <h1>Add Movie Form</h1>
  
        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Movie Form</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
  
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={(e) => setPoster(e.target.value)}
                value={poster}
              />
            </div>
  
            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <input
                type="comment"
                id="comment"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
}
export default MovieForm