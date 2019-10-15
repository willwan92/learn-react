import React from 'react';

import FilterableProductTable from './thinking-in-react/filterableProductTable';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// import CommentList from './commont-box/CommentList';
// import CommentForm from './commont-box/CommentForm';
// import './commont-box/CommentBox.css';

// import Clock from './clock/clock.js';
// import './clock/clock.css';

// import SnapShotSample from './snapshot-sample/snapshotSample.js';
// import './snapshot-sample/snapshotSample.css';

// const comments = [
//   {
//     author: "Nate",
//     content: "Hello React! This is a sample comment.",
//   },
//   { author: "Kevin", content: "Hello Redux!" },
//   { author: "Bood", content: "Hello Rekit!" },
// ];

function App() {
  return (
		<div className="App">
			<FilterableProductTable products={PRODUCTS} />
		</div>

    // <div className="comment-box">
    //   <h1>Comments(3)</h1>
    //   <CommentList comments={comments} />
    //   <CommentForm />
		// </div>
		
		// <div className="clock-box">
		// 	<Clock />
		// </div>

		// <div className="snapshot-sample">
		// 	<SnapShotSample />
		// </div>
  );
}

export default App;
