import React from "react";

// Lifecycle Stateful Component/Class Component
// Constructor -> Render -> componentDidMount -> Render
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("CONSTRUCTOR");
  }

  // biasanya digunakan untuk pengambilan data API
  componentDidMount() {
    this.setState({ counter: 10 });
    console.log("DIDMOUNT");
  }

  // akan dipanggil setiap perubahan yang terjadi
  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.counter === 10) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="flex gap-6 items-center">
        <h1>{this.state.counter}</h1>
        <button
          type="button"
          className="bg-green-500 p-2 rounded-lg text-white"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        {console.log("Render")}
      </div>
    );
  }
}

export default Counter;
