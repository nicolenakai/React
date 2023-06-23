class JSXDemo extends React.Component {
   render(){
    return (
        <div>
            <h1>My Image!</h1>
            <img src="https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ix" />
        </div>
    )
   } 
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));