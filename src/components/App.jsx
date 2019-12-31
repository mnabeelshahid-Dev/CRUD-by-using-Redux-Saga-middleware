import React from "react";
import "antd/dist/antd.css";
import DashBoard from "./DashBoard";
import CreateUser from "./CreateUser";
import { Button } from "antd";
import { connect } from "react-redux";
import { _createUser, _updateUser, _deleteData } from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: "",
      name: "",
      age: "",
      task: "",
      errorName: false,
      error: false,
      edit: true,
      create: true
    };
  }
  showModal = create => {
    this.setState({
      visible: true,
      create
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: false
    });
  };
  addDataHandler = () => {
    if (this.state.name === "") {
      this.setState({
        errorName: true
      });
    } else if (this.state.age === "") {
      this.setState({
        error: true
      });
    } else if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      // let array = [...this.state.dataSource];
      let name = this.state.name;
      let age = this.state.age;
      let task = this.state.task;
      // let length = array.length;
      // let index = array.findIndex(x => x.id === length);
      let obj = { name, age, task };
      this.props.createUser(obj);
      // array.push(obj);
      //  array.splice(length+1,0, obj);
      this.setState({
        name: " ",
        age: " ",
        task: " ",
        visible: false
      });
    }
  };
  updateHandler = id => {
    if (this.state.id === "") {
      this.setState({
        error: true
      });
    } else if (this.state.name === "") {
      this.setState({
        error: true
      });
    } else if (this.state.age === "") {
      this.setState({
        error: true
      });
    } else if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      // let array = [...this.state.dataSource];
      // let index = array.findIndex(x => x.id === id);
      // let id = this.state.id;
      let name = this.state.name;
      let age = this.state.age;
      let task = this.state.task;
      let id = this.state.id;
      let obj = { id, name, age, task };
      // array.splice(index, 1, obj);
      this.props.updateData(obj, id);
      this.setState({
        // dataSource: array,
        name: "",
        age: "",
        task: "",
        visible: false
      });
    }
  };
  deleteHandler = id => {
    this.props.deleteData(id);
    // let array = [...this.state.dataSource];
    // let index = array.findIndex(x => x.id === id);
    // array.splice(index, 1);
    // this.setState({
    //   dataSource: array
    // });
  };
  editDataHandler = id => {
    let array = [...this.props.dataSource];
    let index = array.findIndex(x => x.id === id);
    this.setState({
      id: array[index].id,
      name: array[index].name,
      age: array[index].age,
      task: array[index].task,
      edit: true
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataSource.map((data, key) => (
              <DashBoard
                key={data.key}
                deleteData={key => {
                  this.deleteHandler(data.id);
                }}
                editData={this.editDataHandler}
                data={data}
                showModal={this.showModal}
              />
            ))}
          </tbody>
        </table>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Button type="primary" onClick={() => this.showModal(true)}>
            Create User
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <CreateUser
            name={this.state.name}
            age={this.state.age}
            task={this.state.task}
            errorName={this.state.name}
            handleEvent={this.handleChange}
            addData={this.addDataHandler}
            visible={this.state.visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            create={this.state.create}
            updateData={this.updateHandler}
          />
        </div>
      </div>
    );
  }
}
const mapSateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchTOProps = dispatch => {
  return {
    createUser: obj => {
      dispatch(_createUser(obj));
    },
    updateData: (obj, id) => {
      dispatch(_updateUser(obj, id));
    },
    deleteData: id => {
      dispatch(_deleteData(id));
    }
  };
};
export default connect(mapSateToProps, mapDispatchTOProps)(App);
