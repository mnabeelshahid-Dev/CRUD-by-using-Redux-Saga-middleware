import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Form, Icon, Input } from "antd";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      errors: {
        name: "",
        age: "",
        task: ""
      }
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // if()
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.props.handleEvent(event);
  };

  // handleChange = (event) => {
  // event.preventDefault();
  // const { name, value } = event.target;
  // let errors = this.state.errors;

  // switch (name) {
  //   case 'fullName':
  //     errors.fullName =
  //       value.length < 5
  //         ? 'Full Name must be 5 characters long!'
  //         : '';
  //     break;
  //   case 'email':
  //     errors.email =
  //       validEmailRegex.test(value)
  //         ? ''
  //         : 'Email is not valid!';
  //     break;
  //   case 'password':
  //     errors.password =
  //       value.length < 8
  //         ? 'Password must be 8 characters long!'
  //         : '';
  //     break;
  //   default:
  //     break;
  // }

  //   this.setState({
  //     [event.target.id]: event.target.value,
  //     errors, [name]: value});
  //     this.props.handleEvent(event);
  // }

  render() {
    const { name, task, age } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <Modal
          title={this.props.create ? "Create New User" : "Update User Data"}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          <i>{name}</i>
          <i>{age}</i>
          <i>{task}</i>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                id="name"
                placeholder="Username"
                name="name"
                value={this.props.name}
                defaultValue={name}
                onChange={this.handleChange}
              />
              {/* {this.props.errorName ?  
              <label>Name is required</label>
              : null} */}
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon
                    type="usergroup-add"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                id="age"
                placeholder="Age"
                name="age"
                value={age}
                onChange={this.props.handleEvent}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                id="task"
                type="text"
                placeholder="Task"
                name="task"
                value={task}
                onChange={this.props.handleEvent}
                required
              />
            </Form.Item>
            <Form.Item>
              {this.props.create ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    this.props.addData();
                  }}
                >
                  Add User
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={this.props.updateData}
                >
                  Update Data
                </Button>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  CreateUser
);
export default WrappedNormalLoginForm;
