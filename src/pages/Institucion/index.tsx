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
        <input defaultValue="institucion" {...register('institucion')} />
        <input {...register('scan', { required: true })} />
        {errors.scan && <span>This field is required</span>}

        <input {...register('quality', { required: true })} />
        {errors.quality && <span>This field is required</span>}

        <input {...register('notes', { required: true })} />
        {errors.notes && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;