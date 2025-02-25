import React, { Component } from "react";

class LdtEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ldtSelectCheckBox: ["Apple"], // Trái cây mặc định đã chọn
    };
  }

  // Hàm xử lý khi chọn checkbox
  ldtHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.ldtSelectCheckBox];

    // Nếu chọn checkbox, thêm vào mảng; nếu bỏ chọn, loại bỏ khỏi mảng
    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter((option) => option !== value);

    console.log("selected:", selected, "selectedOptions:", selectedOptions);

    this.setState(
      {
        ldtSelectCheckBox: selectedOptions,
      },
    );
  };

  // Hàm xử lý khi form được submit
  ldtHandleSubmit = (event) => {
    event.preventDefault();
    const { ldtSelectCheckBox } = this.state;
    console.log("Fruits selected:", ldtSelectCheckBox);
    
    alert("Selected fruits: " + ldtSelectCheckBox.join(", "));
  };

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form onSubmit={this.ldtHandleSubmit}>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.ldtSelectCheckBox.includes("Apple")}
              onChange={this.ldtHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.ldtSelectCheckBox.includes("Banana")}
              onChange={this.ldtHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.ldtSelectCheckBox.includes("Orange")}
              onChange={this.ldtHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default LdtEventForm4;