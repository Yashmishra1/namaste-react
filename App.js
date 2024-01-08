const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h1", {}, "I am a H1 tag"),
], React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h1", {}, "I am a H1 tag"),
]))

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from React!")

console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)    
root.render(parent)           