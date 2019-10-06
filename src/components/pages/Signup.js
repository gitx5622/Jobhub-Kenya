import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form, Input, Icon, Button } from 'antd';
import * as actions from '../store/actions/auth';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './Signup.css';
  
  
class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
    };
  
    handleSubmit = (e) => {
      e.preventDefault(); 
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            this.props.onAuth(
                values.userName,
                values.email,
                values.password,
                values.confirm
                )
        }
      });
      this.props.history.push('/');
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
   
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    
  
    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Form onSubmit={this.handleSubmit} className="signup-form">
        <style>{'body { background-color: #BBEAE8; }'}</style>
 <strong><center><h2>SignUp Form</h2></center></strong>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>

          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email..." />
            )}
          </Form.Item>
          <Form.Item
           
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
            )}
          </Form.Item>
          <Form.Item
            
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm.." onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          
          <Form.Item>
          <Button type="primary"  className="signup-form-button" htmlType="submit" style={{marginRight: '10px'}}>
            SignUp
          </Button>

          <NavLink style={{marginRight: '10px'}} to="/login">
          <Button type="primary"  className="login-form-button" htmlType="submit" style={{marginRight: '10px'}}>
            Login
          </Button> 
          </NavLink>
          </Form.Item>

        </Form>
      );
    }
  }
  
const mapStateToProps = state => {
    return {
      loading: state.loading,
      error: state.error
      }
    }
const mapDispatchToProps = dispatch => {
        return {
          onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
            }
        }
    
const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
  