import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createMuiTheme, MuiThemeProvider ,TextField } from '@material-ui/core';
import { btnPackage } from '../../utils/data/btnPageData';
import { theme } from '../../utils/theme/theme';
import emailjs from 'emailjs-com';

import SubmitMainContactFormButton from '../Buttons/mainBtn';


const ContactFormWrapper = styled.div`
  margin-top: 30px;
  width: 70%;
  margin-left: 50%;
  transform: translateX(-50%);

  @media ${ theme.device.mobileL } {
    width: 100%;
    margin-left: 0;
    transform: translateX(0);
    margin-top: 0;
  }
`;
const ButtonStyledContactForm = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  position: relative;
  z-index: 50;

  :hover .circleSwap {
        width: 125%;
  }
`;

const validationSchema = yup.object({
  name: yup
    .string('Enter your Name'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  subject: yup
    .string('Enter your subject'),
  message: yup
    .string('Enter your message')
    .required('Message is required'),
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      window.location.replace('/success');
    },
  });

  const THEME = createMuiTheme({
    typography: {
      "fontFamily": "Poppins-SemiBold",
      "color": "red"
    }
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_b7k3tk1', 'template_7cmiqyk', e.target, 'user_9ut3W3e5q1jESB8dzmLby')
      .then((result) => {
          console.log(result.text);
          window.location.replace('/success');
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <MuiThemeProvider theme={THEME}>
      <form onSubmit={sendEmail}>
        <TextField
          fullWidth
          id="standard-basic"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="standard-basic"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="standard-basic"
          name="subject"
          label="Subject"
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextField
          fullWidth
          multiline
          rows={8}
          id="standard-basic"
          name="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <ButtonStyledContactForm type="submit">
          <SubmitMainContactFormButton
            name={ btnPackage.MainBtn.SendMessage }
            style={{
              width: '170px',
              marginLeft: '-50px'
            }}
            styleArrow={{
              right: '-30px'
            }}
          />
        </ButtonStyledContactForm>
      </form>
    </MuiThemeProvider>
  )
}

class ContactForm extends React.Component {
  render() {
    return (
      <ContactFormWrapper>
        <WithMaterialUI />
      </ContactFormWrapper>
    )
  }
}

export default ContactForm;