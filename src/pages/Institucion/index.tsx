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
  return (
    <>
      <NavMenu />
      <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
        <label htmlFor="institucion">Institución</label> 
        </Form.Label>
        <input id="institucion" defaultValue="institución id" {...register('institucion', { required: true })} />
        {errors.institucion && <span>Este campo es obligatorio</span>}
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={4}>
            <label htmlFor="scan">Scan QR</label>
        </Form.Label>
        <input id="scan" {...register('scan', { required: true })} />
        {errors.scan && <span>Este campo es obligatorio</span>}
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
            <label htmlFor="quality">Calidad</label>
        </Form.Label>
        <input id="quality" {...register('quality', { required: false })} />
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm={2}>
            <label htmlFor="notes">Notas</label>
        </Form.Label>
        <input id="notes" {...register('notes', { required: false })} />
      </Form.Group>

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;