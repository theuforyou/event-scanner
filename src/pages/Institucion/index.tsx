import NavMenu from '../../components/NavMenu';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  institucion: string;
  scan: File;
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
        <Controller
          name="scan"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              {...field}
              accept="image/*" // Allow only image files
            />
          )}
        />

        {errors.scan && <span>This field is required</span>}

        <input {...register('quality', { required: false })} />

        <input {...register('notes', { required: false })} />

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;