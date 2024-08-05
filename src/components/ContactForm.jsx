import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="form.EmailInput">
        <Form.Label>Direccion e-mail</Form.Label>
        <Form.Control type="email" placeholder="Ingrese e-mail" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.Textarea">
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
