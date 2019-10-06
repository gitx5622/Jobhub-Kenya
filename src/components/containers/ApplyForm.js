import React from 'react'
import axios from 'axios';
import {Form, Input, Button,Icon,Upload,Select} from 'antd';
const { Option } = Select;


  class CustomForm extends React.Component {
      
    handleFormSubmit = (event, requestType, applyjobID) => {
        // event.preventDefault();
        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const phone_number = event.target.elements.phone_number.value;
        const minimum_qualification = event.target.elements.minimum_qualification.value;
        const years_of_experience = event.target.elements.years_of_experience.value;
        const salary_expectation = event.target.elements.salary_expectation.value;
        const cover_letter = event.target.elements.cover_letter.value;
        const curriculum_vitae = event.target.elements.curriculum_vitae.value;

        switch ( requestType ) 
        {
            case 'post':
            return axios.post('http://127.0.0.1:8000/api/', {
                firstname: firstname,
                lastname : lastname,
                phone_number : phone_number,
                minimum_qualification : minimum_qualification,
                years_of_experience : years_of_experience,
                salary_expectation : salary_expectation,
                cover_letter : cover_letter,
                curriculum_vitae :  curriculum_vitae
            })
            .then(res => console.log(res))
            .catch(error => console.err(error));
            
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${applyjobID}/`, {
                    firstname: firstname,
                    lastname : lastname,
                    phone_number : phone_number,
                    minimum_qualification : minimum_qualification,
                    years_of_experience : years_of_experience,
                    salary_expectation : salary_expectation,
                    cover_letter : cover_letter,
                    curriculum_vitae :  curriculum_vitae
            })
            .then(res => console.log(res))
            .catch(error => console.err(error));

            default:
            // unknown type! based on the language,
            // there should probably be some error-handling
            // here, maybe an exception
        }        
        
    }
   
    render() {
         return (
        <div>
          <Form onSubmit={(event) => this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.applyjobID )}>
            <Form.Item label="First Name">
              <Input name="firstname" placeholder="Firstname" />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input name="lastname" placeholder="Lastname" />
            </Form.Item>
            <Form.Item label="Phone Number">
              <Input name="phone_number" placeholder="Phone Number" />
            </Form.Item>

            <Form.Item label="Minimum Qualification">
            <Select
             name="minimum_qualification" placeholder="Minimum Qualification"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
            </Form.Item>

            <Form.Item label="Years of Experience">
            <Select
             name="years_of_experience" placeholder="Years of Experience"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
            </Form.Item>
        
            <Form.Item label="Salary Expectation">
              <Input name="years_of_experience" placeholder="Salary Expectation" />
            </Form.Item>
            <Form.Item label="Cover Letter">
              <Input type="text" name="cover_letter" placeholder="Cover Letter" />
            </Form.Item>
            <Form.Item  label="Curriculum Vitae">
            <Upload name="logo" action="./cvs/" listType="picture">
              <Button>
                <Icon name="curriculum_vitae" type="upload" /> Click to upload
              </Button>
            </Upload>
        </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>

          </Form>
        </div>
      );
    }
  }
  
  export default CustomForm;