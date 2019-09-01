import React from 'react';
// import CommentList from './commont-box/CommentList';
// import CommentForm from './commont-box/CommentForm';
// import './commont-box/CommentBox.css';

// import Clock from './clock/clock.js';
// import './clock/clock.css';

import SnapShotSample from './snapshot-sample/snapshotSample.js';
import './snapshot-sample/snapshotSample.css';

const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bood", content: "Hello Rekit!" },
];

function App() {
  return (
    // <div className="comment-box">
    //   <h1>Comments(3)</h1>
    //   <CommentList comments={comments} />
    //   <CommentForm />
		// </div>
		
		// <div className="clock-box">
		// 	<Clock />
		// </div>

		<div className="snapshot-sample">
			<SnapShotSample />
		</div>
  );
}

export default App;
