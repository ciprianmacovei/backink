import React from "react";
import "./index.css";
import Master from "./pages/master/master";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class App extends React.Component {
  render() {
    return (
        <div>
        <Master></Master>
        <ToastContainer position={toast.POSITION.TOP_RIGHT}/>
        </div>
    );
  }
}
