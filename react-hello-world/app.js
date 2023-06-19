console.log(React, ReactDOM)

const container = document.querySelector('#root')
const app = ReactDOM.createRoot(container)

function HelloWorld() {
  return React.createElement('div', {}, [
    React.createElement('span', {key: 1,}, 'Hello '),
    React.createElement(NestedComponent, {key: 2})
  ])
}

function NestedComponent() {
  return React.createElement('div', {}, 'World')

}

app.render(React.createElement(HelloWorld))
