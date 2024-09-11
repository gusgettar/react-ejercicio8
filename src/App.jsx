import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';




const App = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
 
  const onSubmit = handleSubmit(() => {
    if(register){
      alert("Datos enviados")
    }
    else{
      alert("Completar los datos")
    }
    reset({nombre: '',
    apellido: '',
    dni: '',
    email: ''
    })
   
    
  })
  return (
    <>
    <h1 className='text-center bg-info'>FORMULARIO</h1>
    <div className='container d-flex justify-content-center my-5'>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Nombre" {...register("nombre", 
      {required: {
        value: true, 
        message: 'Nombre requerido'},
        maxLength: 20, 
        minLength: 2})} 
        />
        
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && <span>No debe ser mayor a 20 caracteres</span>}
        {errors.nombre?.type === "minLength" && <span>No debe ser menor a 2 caracteres</span>}
        
        
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="apellido">
      <Form.Label>Apellido</Form.Label>
      <Form.Control type="text" placeholder="Apellido"  {...register("apellido", 
      {required: {
        value: true, 
        message: 'Apellido requerido'},
        maxLength: 20, 
        minLength: 2})} 
        />
        
        {errors.apellido?.type === "required" && <span>Apellido requerido</span>}
        {errors.apellido?.type === "maxLength" && <span>No debe ser mayor a 20 caracteres</span>}
        {errors.apellido?.type === "minLength" && <span>No debe ser menor a 2 caracteres</span>}
      <Form.Text className="text-muted">
   
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="dni">
      <Form.Label>DNI</Form.Label>
      <Form.Control type="number" placeholder="DNI"  {...register("dni", 
      {required: {
        value: true, 
        message: 'dni requerido'},
        maxLength: 8, 
        minLength: 5})} 
        />
        
        {errors.dni?.type === "required" && <span>DNI requerido</span>}
        {errors.dni?.type === "maxLength" && <span>No debe ser mayor a 8 caracteres</span>}
        {errors.dni?.type === "minLength" && <span>No debe ser menor a 5 caracteres</span>}
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email"{...register("email", 
      {required: {
        value: true, 
        message: 'email requerido'},
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Correo no válido",},}
      )} 
        />
        
        {errors.correo && <span>{errors.message}</span>}
        
      <Form.Text className="text-muted">
     
      </Form.Text>
    </Form.Group>

    
    
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  </div>
  </>
  );
};

export default App;