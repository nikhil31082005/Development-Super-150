// let rootEle = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerText = "welcome to react";

// rootEle.append(h1);

// -----------------------React--------------------

// let rootEle = document.getElementById('root');

// let h1 = React.createElement('h1', {id: "sam", className: "vohra"}, "welcome to react");

// let root = ReactDOM.createRoot(rootEle);

// root.render(h1)


// --------------------------------------------------------------

// let rootEle = document.getElementById('root');

// let h1 = React.createElement('h1', {id: "sam", className: "vohra"}, React.createElement('div', null, "welcome to react"));

// let root = ReactDOM.createRoot(rootEle);

// root.render(h1)


// ------------------------------------------------------------------

let rootEle = document.getElementById('root');

let h1 = <div>
            <div>
                <h1>welcome to jsx</h1>
            </div>
        </div>

let root = ReactDOM.createRoot(rootEle);

root.render(h1)