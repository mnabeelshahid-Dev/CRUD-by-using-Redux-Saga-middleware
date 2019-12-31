import React from "react";
import "antd/dist/antd.css";
import { Divider } from "antd";
class DashBoard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.task}</td>
          <td>
            <span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.showModal(false);
                  this.props.editData(data.id);
                }}
              >
                Edit
              </span>
              <Divider type="vertical" />
              <span
                onClick={this.props.deleteData}
                style={{ cursor: "pointer" }}
              >
                Delete
              </span>
            </span>
          </td>
        </tr>
      </>
    );
  }
}
export default DashBoard;
