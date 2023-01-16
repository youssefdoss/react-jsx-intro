'use strict';

/** App: Renders root component */
function App() {
  return (
    <div>
      <Tweet
        name="Chris"
        username="Chrisalicious"
        date={new Date().toDateString()}
        message="I am the first tweet"
      />
      <Tweet
        name="Youssef"
        username="TheEgyptianPrescription"
        date={new Date().toDateString()}
        message="I am the second tweet"
      />
      <Tweet
        name="Kadeem"
        username="NickiMinajFan"
        date={new Date().toDateString()}
        message="I am the third tweet"
      />
    </div>
  )
}