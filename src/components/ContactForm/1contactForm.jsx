import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Contact } from '../../utils/data/contactPageData';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { theme } from '../../utils/theme/theme';

import SubmitMainContactFormButton from '../Buttons/mainBtn';
import { btnPackage } from '../../utils/data/btnPageData';

const FieldNameStyled = styled(Field)`
  //background-color: #ff000034;
  background-color: transparent;
  border: none;
  margin-top: 65px;
  height: 45px;
  width: 700px;
  padding: 15px;
  position: relative;
  z-index: 50;

  :focus {
    outline: none;
    background-color: #00000011;
  }
  :focus::placeholder {
    color: ${ theme.colors.darkergray };;
  }
  ::placeholder {
    font-size: ${ theme.fontSize.DA_17 };
    font-family: 'Poppins-Medium';
    color: ${ theme.colors.gray };
  }
`;
const FieldEmailStyled = styled(Field)`
    //background-color: #ff000034;
  background-color: transparent;
  border: none;
  margin-top: 5px;
  height: 45px;
  width: 700px;
  padding: 15px;
  position: relative;
  z-index: 50;

  :focus {
    outline: none;
    background-color: #00000011;
  }
  :focus::placeholder {
    color: ${ theme.colors.darkergray };;
  }
  ::placeholder {
    font-size: ${ theme.fontSize.DA_17 };
    font-family: 'Poppins-Medium';
    color: ${ theme.colors.gray };
  }
`;
const FieldSubjectStyled = styled(Field)`
    //background-color: #ff000034;
  background-color: transparent;
  border: none;
  margin-top: 5px;
  height: 45px;
  width: 700px;
  padding: 15px;
  position: relative;
  z-index: 50;

  :focus {
    outline: none;
    background-color: #00000011;
  }
  :focus::placeholder {
    color: ${ theme.colors.darkergray };;
  }
  ::placeholder {
    font-size: ${ theme.fontSize.DA_17 };
    font-family: 'Poppins-Medium';
    color: ${ theme.colors.gray };
  }
`;
const FieldMessageStyled = styled(Field)`
  //background-color: #ff000034;
  background-color: transparent;
  border: none;
  margin-top: 5px;
  height: 150px;
  width: 700px;
  padding: 15px;
  resize: none;
  position: relative;
  z-index: 50;

  :focus {
    outline: none;
    background-color: #00000011;
  }
  :focus::placeholder {
    color: ${ theme.colors.darkergray };;
  }
  ::placeholder {
    font-size: ${ theme.fontSize.DA_17 };
    font-family: 'Poppins-Medium';
    color: ${ theme.colors.gray };
  }
`;
const ContactFormUnderLine = styled.div`
  width: 100%;
  height: 2px;
  margin-top: -2px;
  background-color: ${ theme.colors.gray };
  position: relative;
  z-index: 50;
`;
const ContactFormUnderLineTextarea = styled.div`
  width: 100%;
  height: 2px;
  margin-top: -8px;
  background-color: ${ theme.colors.gray };
  position: relative;
  z-index: 50;
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

const ContactFormComponent = () => (
  <Formik
    initialValues={{
      nameSurname: '',
      emailAdress: '',
      subjectTitle: '',
      messageContent: '',
    }}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
      <Row className="justify-content-center">
        <Form>
          <Col>
            <FieldNameStyled
              id="nameSurname"
              name="nameSurname"
              placeholder={ Contact.ContactFormName }
            />
            <ContactFormUnderLine />
          </Col>
          <Col>
            <FieldEmailStyled
              id="emailAdress"
              name="emailAdress"
              placeholder={ Contact.ContactFormEmail }
            />
            <ContactFormUnderLine />
          </Col>
          <Col>
            <FieldSubjectStyled
              id="subjectTitle"
              name="subjectTitle"
              placeholder={ Contact.ContactFormSubject }
            />
            <ContactFormUnderLine />
          </Col>
          <Col>
            <FieldMessageStyled
              as='textarea'
              id="messageContent"
              name="messageContent"
              placeholder={ Contact.ContactFormMessage }
            />
          
            
            <ContactFormUnderLineTextarea />
          </Col>
          <ButtonStyledContactForm type="submit">
            <SubmitMainContactFormButton
              name={ btnPackage.MainBtn.SendMessage }
              style={{
                width: '170px',
              }}
              styleArrow={{
                right: '-30px'
              }}
            />
          </ButtonStyledContactForm>
        </Form>
      </Row>
  </Formik>
)

export default ContactFormComponent;