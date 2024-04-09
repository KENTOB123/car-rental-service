import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth, useUser } from '../../../hooks/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

type Inputs = {
    firstname: string;
    familyname: string;
    email: string;
    password: string;
    confirmationPasword: string;
}

const RegsiterButton = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const auth = useAuth();
    const currentUser = useUser();

    const signup = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log('ユーザー登録成功');
        } catch (e) {
            console.error(e);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = ({
        email,
        password,
        confirmationPasword,
    }) => {
        if (password === confirmationPasword) {
            signup(email, password);
        } else {
            alert('パスワードが一致しません');
        }
    };

  return (
    <form 
    onClick={handleSubmit(onSubmit)}
    className='flex flex-col justify-evenly items-center gap-5 bg-white p-8 rounded w-2/3'>
            <span className='font-bold text-xl'>Register Here</span>
            <input 
            type="text" 
            placeholder='FirstName' 
            className='p-3 rounded border' 
            required
            {...register('firstname', { required: true })} 
            />
            <input 
            type="text" 
            placeholder='FamilyName' 
            className='p-3 rounded border' 
            required
            {...register('familyname', { required: true })} 
            />
            <input 
            type="email" 
            placeholder='E-mail' 
            className='p-3 rounded border' 
            required
            {...register('email', { required: true })} 
            />
            <input 
            type="password" 
            placeholder='Password' 
            className='p-3 rounded border' 
            required
            {...register('password', { required: true })} 
            />
            <input 
            type="password" 
            placeholder='Password Comformation' 
            className='p-3 rounded border' 
            required
            {...register('confirmationPasword', { required: true })} 
            />
            <button type='submit' className='bg-green-700 text-white px-12 text-xl rounded pt-1 pb-1'>Registar</button>
        </form>
  )
}

export default RegsiterButton;
