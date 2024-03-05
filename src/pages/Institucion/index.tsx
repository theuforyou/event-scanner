import NavMenu from '../../components/NavMenu';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

interface FormData {
  institucion: string;
  scan: string;
  quality: string;
  notes: string;
}

const Institucion = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  console.log(watch('institucion')); // watch input value by passing the name of it

  return (
    <>
      <NavMenu />
      <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
        <label htmlFor="institucion">Institucion</label> 
        </Form.Label>
        <input id="institucion" defaultValue="institucion id" {...register('institucion')} />
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={3}>
            <label htmlFor="scan">Scan QR</label>
        </Form.Label>
        <input id="scan" {...register('scan', { required: false })} />
        {errors.scan && <span>This field is required</span>}
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
            <label htmlFor="quality">Calidad</label>
        </Form.Label>
        <input id="quality" {...register('quality', { required: false })} />
        {errors.quality && <span>This field is required</span>}
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
            <label htmlFor="notes">Notas</label>
        </Form.Label>
        <input id="notes" {...register('notes', { required: false })} />
        {errors.notes && <span>This field is required</span>}
      </Form.Group>

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;