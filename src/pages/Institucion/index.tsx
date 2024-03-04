import NavMenu from '../../components/NavMenu';
import { useForm } from 'react-hook-form';

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
      <label htmlFor="institucion">Institucion</label>
        <input id="institucion" defaultValue="institucion" {...register('institucion')} />
        
        <label htmlFor="scan">Scan QR</label>
        <input id="scan" {...register('scan', { required: false })} />
        {errors.scan && <span>This field is required</span>}

        <label htmlFor="quality">Calidad</label>
        <input id="quality" {...register('quality', { required: false })} />

        <label htmlFor="notes">Notas</label>
        <input id="notes" {...register('notes', { required: false })} />

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;